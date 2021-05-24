from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    user_category = (
        (1, 'Common'), (2, 'Trainer'),
    )

    category = models.IntegerField(choices=user_category, default=1)

class Alert(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='alerts')
    pushed_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pushed')
    category = models.IntegerField()
    checked = models.BooleanField(default=False)
    content = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

