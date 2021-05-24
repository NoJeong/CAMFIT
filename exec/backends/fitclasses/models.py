from django.db import models
from django.conf import settings

# Create your models here.
class Fitclass(models.Model):
    title = models.CharField(max_length=100)
    nickname = models.CharField(max_length=100, default="camfit trainer")
    content = models.TextField()
    image = models.ImageField(blank=True)
    desc_image = models.ImageField(blank=True)
    start_day = models.CharField(max_length=50)
    end_day = models.CharField(max_length=50)
    user_limit = models.IntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='my_fitclasses')
    guests = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='participated_fitclasses')
    price = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)