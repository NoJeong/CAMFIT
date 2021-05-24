from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .serializers import InfoArticleLikeSerializer,InfoArticleDetailSerializer, InfoArticleSerializer
from .models import InfoArticle


@api_view(['GET','POST'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def infoarticle_list_create(request):
    if request.method == 'GET':
        infoarticles = InfoArticle.objects.order_by('-pk')
        serializer = InfoArticleSerializer(infoarticles, many =True)
        return Response(serializer.data)
    else:
        serializer = InfoArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def infoarticle_detail(request, infoarticle_pk):
    infoarticle = get_object_or_404(InfoArticle, pk=infoarticle_pk)
    serializer = InfoArticleDetailSerializer(infoarticle)
    return Response(serializer.data)

@api_view(['PUT'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def like(request, infoarticle_pk):
        infoarticle = get_object_or_404(InfoArticle, pk=infoarticle_pk)
        user = request.user
        print(infoarticle)
        print(request.data)

        if infoarticle.like_users.filter(pk=user.pk).exists():
            infoarticle.like_users.remove(user)
        else:
            infoarticle.like_users.add(user)

        serializer = InfoArticleLikeSerializer(infoarticle, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user= user)
            return Response(serializer.data)
