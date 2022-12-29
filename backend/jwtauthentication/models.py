from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    
    first_name =models.CharField(max_length=200,null=True)
    last_name =models.CharField(max_length=200,null=True)
    email = models.EmailField(max_length=50,null=True)
    gender = models.CharField(max_length=20,default="N/A")

    REQUIRED_FIELDS = []
