from django.db import models
from django.conf import settings

# Create your models here.

class Grass(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='grasses')
    date = models.DateField(auto_now_add=True)
