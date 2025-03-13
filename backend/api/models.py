from django.contrib.auth.models import AbstractUser
from django.db import models
class Transaction(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    pass


class CustomUser(AbstractUser):  
    account_no = models.CharField(max_length=20, unique=True, blank=True, null=True)
    stars = models.IntegerField(default=0)
    profile_pic = models.ImageField(upload_to="profile_pics/", blank=True, null=True)
    pass

    def __str__(self):
        return self.username
