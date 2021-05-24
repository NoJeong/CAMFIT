from django.urls import path
from . import views

app_name = 'selftrains'
urlpatterns = [
    path('', views.train_list_create, name= 'train_list_create'),
    path('<int:selftrain_pk>/detail/', views.train_detail, name='train_detail'),
    path('<int:selftrain_pk>/', views.train_update_delete, name='train_update_delete'),
] 