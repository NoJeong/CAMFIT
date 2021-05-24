from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .serializers import ArticleDetailSerializer, ArticleSerializer, CommentSerializer, ArticleListSerializer
from .models import Article, Comment
from accounts.models import Alert
from accounts.serializers import AlertSerializer

# Create your views here.
@api_view(['GET','POST'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def article_list_create(request):
    if request.method == 'GET':
        articles = Article.objects.order_by('-pk')
        serializer = ArticleSerializer(articles, many =True)
        return Response(serializer.data)
    else:
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user= request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def article_detail(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    article.hit += 1
    serializer = ArticleDetailSerializer(article, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data)


@api_view(['PUT','DELETE'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def article_update_delete(request,article_pk):
    article = get_object_or_404(Article, pk=article_pk)

    if not request.user.articles.filter(pk=article_pk).exists():
        return Response({'detail': '권한이 없습니다.'})
    
    if request.method == 'PUT':
        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user= request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        article.delete()
        return Response({'id': article_pk}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def comment_list_create(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)

    if request.method == 'GET':
        comments = Comment.objects.filter(article_id=article_pk)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    else:
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user= request.user,article= article)
            # print(request.data['content'])
            alert = Alert(
                user=article.user,
                pushed_user=request.user,
                category=1,
                content='{}'.format(request.data['content'])
            )
            alert.save()


            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT', 'DELETE'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def comment_update_delete(request, comment_pk):
    comment = get_object_or_404(Comment, pk=comment_pk)

    if not request.user.my_article_comments.filter(pk=comment_pk).exists():
        return Response({'detail': '권한이 없습니다.'})

    if request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user= request.user)
            return Response(serializer.data)
    else:
        comment.delete()
        return Response({ 'id': comment_pk }, status=status.HTTP_204_NO_CONTENT)