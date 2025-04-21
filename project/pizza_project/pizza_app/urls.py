from django.urls import path
from .views import PizzaListView, PizzaUpdateView, OrderCreateView

urlpatterns = [
    path('pizzas/', PizzaListView.as_view(), name='pizza-list'),
    path('pizzas/<int:id>/update/', PizzaUpdateView.as_view(), name='pizza-update'),
    path('order/', OrderCreateView, name='order-create'),  # Уже исправлено
]