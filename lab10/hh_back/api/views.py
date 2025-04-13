from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy, Position
from .serializers import CompanySerializer, VacancySerializer, PositionSerializer
from django.http import JsonResponse

@api_view(['GET']) # List of all companies
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET']) # Get one company
def company_get(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['GET']) # List of vacancies by company
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
    
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET']) # List of all vacancies
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET']) # Get one vacancy
def vacancy_get(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return Response({"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

@api_view(['GET']) # List of top 10 vacancies sorted by desc salary
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def position_list(request):
    positions = Position.objects.all()
    serializer = PositionSerializer(positions, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def position_get(request, id):
    try:
        position = Position.objects.get(id=id)
    except Position.DoesNotExist:
        return Response({"error": "Position not found"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = PositionSerializer(position)
    return Response(serializer.data)

def api_root(request):
    return JsonResponse({
        "message": "Welcome to the API!",
        "endpoints": [
            "/api/companies/",
            "/api/vacancies/",
            "/api/positions/"
        ]
    })
