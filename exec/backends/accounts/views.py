from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .serializers import UserSerializer,AlertSerializer

from .models import User,Alert

# Create your views here.
@api_view(['POST'])
def signup(request):
    password = request.data.get('password')
    passwordcheck = request.data.get('passwordcheck')

    if password != passwordcheck:
        message = {
            'error': '비밀번호와 다릅니다.'
        }
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        user.set_password(password)
        user.save()

    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def emailCheck(request):
    email = request.data.get('username')
    # print(email)
    if User.objects.filter(username=email).exists():
        return Response({'있음'})
    return Response({'없음'})

@api_view(['GET'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def alertCheck(request):
    alerts = Alert.objects.filter(user_id=request.user.pk).order_by('-pk')
    for alert in alerts:
        if not alert.checked:
            alert.checked = True
    serializer = AlertSerializer(alerts, many=True)
    return Response(serializer.data)

@api_view(['POST'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def getUserInfo(request):
    username = request.data.get('email')
    user = User.objects.get(username=username)
    return Response({'id':user.id,'nickname':user.first_name,'email':user.username,'category':user.category})
