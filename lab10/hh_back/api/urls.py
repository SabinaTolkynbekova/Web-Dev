from django.urls import path
from .views import company_list, company_get, company_vacancies, vacancy_list, vacancy_get, top_ten_vacancies, position_list, position_get

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', company_get),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_get),
    path('vacancies/top_ten/', top_ten_vacancies),
    path('positions/', position_list),
    path('positions/<int:id>/', position_get),
]