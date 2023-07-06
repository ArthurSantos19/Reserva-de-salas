from django.db import models
import datetime
from django.utils import timezone

class Sala(models.Model):
    nomeSala = models.CharField(max_length=100)
    nomeAdmin = models.CharField(max_length=100)
    data = models.DateField(default=timezone.datetime(2023, 1, 1).date().strftime('%d/%m/%Y'))
    disponivel = models.BooleanField(default=True)

    def __str__(self):
        return self.nome_sala
