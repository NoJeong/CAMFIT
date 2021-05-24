from django.urls import path
from . import views

app_name = 'infoboards'

urlpatterns = [
    path('', views.infoarticle_list_create, name= 'infoarticle_list_create'),
    path('<int:infoarticle_pk>/detail/', views.infoarticle_detail, name='infoarticle_detail'),
    path('<int:infoarticle_pk>/like/', views.like, name='like'),
]