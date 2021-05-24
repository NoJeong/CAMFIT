from rest_framework import serializers
from .models import Fitclass

from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields=('username',)

class FitclassSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    guests = UserSerializer(required=False, many=True)

    class Meta:
        model = Fitclass
        fields = '__all__'
        read_only_fields = ('user',)