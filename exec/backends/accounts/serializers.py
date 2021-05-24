from rest_framework import serializers
from .models import Alert

from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = get_user_model()
        fields=('username','password','category','first_name')

class AlertSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    pushed_user = UserSerializer(required=False)
    class Meta:
        model = Alert
        fields = '__all__'