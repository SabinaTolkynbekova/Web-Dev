from rest_framework import generics
from django.http import HttpResponse
from django.shortcuts import render
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# Список всех продуктов
class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Получение одного продукта по ID
class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Список всех категорий
class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Получение одной категории по ID
class CategoryDetailView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Список продуктов по категории
class ProductByCategoryView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)

# Приветственное сообщение для корневого пути
def home(request):
    return HttpResponse("Welcome to the Shop API! Go to /api/ for endpoints.")

# HTML-страница для списка продуктов
def product_list_html(request):
    products = Product.objects.all()
    return render(request, 'products.html', {'products': products})