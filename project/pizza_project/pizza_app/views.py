from rest_framework import generics, response, status
from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Pizza, Order, OrderItem
from .serializers import PizzaSerializer, OrderSerializer, OrderItemSerializer
import logging

logger = logging.getLogger(__name__)

# Список всех пицц с фильтрацией и пагинацией
class PizzaListView(generics.ListAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['price', 'name']
    pagination_class = PageNumberPagination

# Обновление пиццы (только для админов)
class PizzaUpdateView(generics.UpdateAPIView):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer
    lookup_field = 'id'
    permission_classes = [IsAdminUser]

# Создание заказа
@api_view(['POST'])
def OrderCreateView(request):
    user = request.user
    logger.info(f"Order creation attempt by user {user.username if user.is_authenticated else 'anonymous'}: {request.data}")

    if not user.is_authenticated:
        logger.warning("Unauthorized order creation attempt")
        return response.Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
    
    order = Order.objects.create(user=user, status='pending')
    items_data = request.data.get('items', [])
    
    for item_data in items_data:
        serializer = OrderItemSerializer(data=item_data)
        if serializer.is_valid():
            OrderItem.objects.create(
                order=order,
                pizza=serializer.validated_data['pizza'],
                quantity=serializer.validated_data['quantity']
            )
        else:
            order.delete()
            logger.error(f"Invalid item data: {serializer.errors}")
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = OrderSerializer(order)
    logger.info(f"Order created successfully: {order.id}")
    return response.Response(serializer.data, status=status.HTTP_201_CREATED)
