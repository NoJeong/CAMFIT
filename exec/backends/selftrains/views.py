from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .serializers import TrainListSerializer, TrainDetailSerializer
from .models import SelfTrain

@api_view(['GET','POST'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def train_list_create(request):
    if request.method == 'GET':
        trains = SelfTrain.objects.order_by('-pk')
        serializer = TrainListSerializer(trains, many =True)
        return Response(serializer.data)
    else:
        if request.user.is_superuser:
            serializer = TrainDetailSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        else: 
            category = request.data.get('category')
            if category == 0 or category == '0':
                trains = SelfTrain.objects.order_by('-pk')
            else:
                trains = SelfTrain.objects.filter(category=category)
            serializer = TrainListSerializer(trains, many = True)
            return Response(serializer.data)

@api_view(['GET'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def train_detail(request, selftrain_pk):
    train = get_object_or_404(SelfTrain, pk=selftrain_pk)
    serializer = TrainDetailSerializer(train)
    return Response(serializer.data)

@api_view(['PUT','DELETE'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def train_update_delete(request,selftrain_pk):
    train = get_object_or_404(SelfTrain, pk=selftrain_pk)

    if not request.user.is_superuser:
        return Response({'detail': '권한이 없습니다.'})
    
    if request.method == 'PUT':
        serializer = TrainDetailSerializer(train, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        train.delete()
        return Response({'id': selftrain_pk}, status=status.HTTP_204_NO_CONTENT)
