from django.db import models
from django.conf import settings

# Create your models here.
class InfoArticle(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(blank=True, upload_to='%Y%m%d')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_posts', blank=True)

    def __str__(self):
        return f'{self.pk} : {self.title}'