from django.core.management.base import BaseCommand
from pizza_app.models import Pizza

class Command(BaseCommand):
    help = 'Initialize pizza data with 6 types of pizzas'

    def handle(self, *args, **kwargs):
        pizzas = [
            {"name": "Margherita", "description": "Tomato sauce, mozzarella, fresh basil", "price": 9.99},
            {"name": "Pepperoni", "description": "Tomato sauce, mozzarella, pepperoni", "price": 11.99},
            {"name": "Four Cheese", "description": "Mozzarella, parmesan, gorgonzola, cheddar", "price": 12.50},
            {"name": "Hawaiian", "description": "Tomato sauce, mozzarella, ham, pineapple", "price": 10.99},
            {"name": "Veggie", "description": "Tomato sauce, mozzarella, bell peppers, mushrooms, olives", "price": 10.50},
            {"name": "BBQ Chicken", "description": "BBQ sauce, mozzarella, grilled chicken, red onion", "price": 13.99},
        ]

        for pizza_data in pizzas:
            Pizza.objects.get_or_create(**pizza_data)
            self.stdout.write(self.style.SUCCESS(f"Created or found pizza: {pizza_data['name']}"))

        self.stdout.write(self.style.SUCCESS('Successfully initialized 6 pizzas'))