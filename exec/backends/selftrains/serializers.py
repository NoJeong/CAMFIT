from rest_framework import serializers
from .models import SelfTrain

from django.contrib.auth import get_user_model


class TrainListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=SelfTrain
        fields= ('id','title','thumbnail','thumbnail2','thumbnail3','category','content')

class TrainDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model=SelfTrain
        fields= '__all__'



