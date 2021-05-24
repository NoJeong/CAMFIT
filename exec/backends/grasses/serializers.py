from rest_framework import serializers
from .models import Grass

from django.contrib.auth import get_user_model



class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = get_user_model()
        fields=('username','password')


class GrassSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model= Grass
        fields= '__all__'
        read_only_fields = ('user',)
