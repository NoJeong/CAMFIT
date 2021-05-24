from rest_framework import serializers
from .models import Article, Comment

from django.contrib.auth import get_user_model



class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = get_user_model()
        fields=('username','password')


class CommentSerializer(serializers.ModelSerializer):

    user = UserSerializer(required=False)

    class Meta:
        model= Comment
        fields= '__all__'
        read_only_fields = ('article','user')


class ArticleListSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model= Article
        fields= ('id', 'title','created_at', 'category','user')
        read_only_fields = ('user')


class ArticleDetailSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(required=False, many=True)
    user = UserSerializer(required=False)
    
    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = ('user','title','content','category')


class ArticleSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    comments = CommentSerializer(required=False, many=True)

    class Meta:
        model = Article
        fields = '__all__'