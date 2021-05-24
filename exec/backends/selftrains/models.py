from django.db import models
from django.conf import settings

# Create your models here.
class SelfTrain(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    yt_address = models.TextField()
    category = models.IntegerField()
    thumbnail = models.ImageField(blank=True, upload_to='%Y%m%d')
    thumbnail2 = models.ImageField(blank=True, upload_to='%Y%m%d')
    thumbnail3 = models.ImageField(blank=True, upload_to='%Y%m%d')
    
