from django.urls import path
from . import views

app_name = 'community'

urlpatterns = [
    path('', views.article_list_create, name= 'article_list_create'),
    path('<int:article_pk>/detail/', views.article_detail, name='article_detail'),
    path('<int:article_pk>/', views.article_update_delete, name='article_update_delete'),
    path('<int:article_pk>/comments/', views.comment_list_create, name='comment_list_create'),
    path('comments/<int:comment_pk>/', views.comment_update_delete),
]


