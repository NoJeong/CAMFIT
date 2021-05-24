from django.shortcuts import render

from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .serializers import FitclassSerializer
from .models import Fitclass


@api_view(['GET','POST'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def fitclass_list_create(request):
    if request.method == 'GET':
        fitclasses = Fitclass.objects.order_by('-pk')
        serializer = FitclassSerializer(fitclasses, many=True)
        return Response(serializer.data)
    else:
        category = request.data.get('category')
        # if request.user.is_superuser:
        serializer = FitclassSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # else:
        #     return Response('트레이너만 클래스 생성 가능합니다')

@api_view(['GET'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def fitclass_detail(request, fitclass_pk):
    fitclass = get_object_or_404(Fitclass, pk=fitclass_pk)
    serializer = FitclassSerializer(fitclass)
    # print(fitclass.user.id)
    # print(request.user.username)
    # print(len(fitclass.guests.all()))
    return Response(serializer.data)

@api_view(['PUT'])  
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def fitclass_participate_left(request,fitclass_pk):
    fitclass = get_object_or_404(Fitclass, pk=fitclass_pk)
    user = request.user

    if fitclass.guests.filter(pk=user.pk).exists():
        fitclass.guests.remove(user)
    else:
        if len(fitclass.guests.all()) < fitclass.user_limit:
            fitclass.guests.add(user)
        else:
            return Response('정원이 다 찼습니다')

    serializer = FitclassSerializer(fitclass)
    # if serializer.is_valid(raise_exception=True):
    #     serializer.save(user=request.user)
    return Response(serializer.data)

@api_view(['PUT','DELETE'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def fitclass_update_delete(request,fitclass_pk):
    fitclass= get_object_or_404(Fitclass, pk=fitclass_pk)

    if not request.user.my_fitclasses.filter(pk=fitclass_pk).exists():
        return Response({'detail':'권한 없음'})

    if request.method == 'PUT':
        serializer = FitclassSerializer(fitclass, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data)
    else:
        fitclass.delete()
        return Response({'id':fitclass_pk}, status=status.HTTP_204_NO_CONTENT)