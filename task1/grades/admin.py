from django.contrib import admin
from .models import student 
# Register your models here.
admin.site.register(student)


class AdminStudent(admin.ModelAdmin):
    display = ('name', 'get_avg_score', 'get_top_score')