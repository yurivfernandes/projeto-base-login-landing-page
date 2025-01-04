from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    phone = models.CharField(max_length=15, blank=True)
    company_name = models.CharField(max_length=255, blank=True)
    cpf = models.CharField(max_length=11, unique=True, blank=True)
    cep = models.CharField(max_length=8, blank=True)
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='access_user_set',
        related_query_name='access_user',
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='access_user_set',
        related_query_name='access_user',
        blank=True,
    )