from django.urls import path
from . import views

app_name = 'fitclasses'

urlpatterns = [
    path('', views.fitclass_list_create, name='fitclass_list_create'),
    path('<int:fitclass_pk>/detail/', views.fitclass_detail, name='fitclass_detail'),
    path('<int:fitclass_pk>/pl/', views.fitclass_participate_left, name='fitclass_pl'),
    path('<int:fitclass_pk>/', views.fitclass_update_delete, name='fitclass_update_delete'),
]


