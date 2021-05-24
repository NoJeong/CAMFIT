from django.urls import path
from . import views

from rest_framework_jwt.views import obtain_jwt_token

app_name = 'accounts'
urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('emailCheck/', views.emailCheck, name='emailCheck'),
    path('alertCheck/', views.alertCheck, name='alertCheck'),
    path('api-token-auth/', obtain_jwt_token),
    path('userinfo/',views.getUserInfo, name='userinfo')
] 