from django.urls import path
from . import views

app_name = 'grasses'

urlpatterns = [
    path('', views.grass_create_read, name= 'grass_create_read'),
]


