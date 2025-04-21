from rest_framework import serializers
from .models import Pizza, Order, OrderItem
from django.contrib.auth.models import User

class PizzaSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Pizza
        fields = ['id', 'name', 'description', 'price', 'image']

    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.image.url)
        return None

class OrderItemSerializer(serializers.ModelSerializer):
    pizza = PizzaSerializer(read_only=True)
    pizza_id = serializers.PrimaryKeyRelatedField(
        queryset=Pizza.objects.all(), source='pizza', write_only=True
    )
    quantity = serializers.IntegerField(min_value=1)

    class Meta:
        model = OrderItem
        fields = ['id', 'pizza', 'pizza_id', 'quantity']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'created_at', 'status', 'items']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']