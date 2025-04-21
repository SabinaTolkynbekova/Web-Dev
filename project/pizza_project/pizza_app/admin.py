from django.contrib import admin
from .models import Pizza, Order, OrderItem

@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'image') 
    list_filter = ('price',)  
    search_fields = ('name', 'description') 

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'status')  
    list_filter = ('status', 'created_at') 
    search_fields = ('user__username',)  

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'pizza', 'quantity') 
    list_filter = ('pizza',) 
    search_fields = ('pizza__name',)  