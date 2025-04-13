from django.contrib import admin
from .models import Company, Vacancy, Position

# Register your models here.
admin.site.register(Company)
admin.site.register(Vacancy)
admin.site.register(Position)