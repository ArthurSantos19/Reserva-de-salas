from django.db import models

class Sala(models.Model):
    nomeSala = models.CharField(max_length=100)
    nomeAdmin = models.CharField(max_length=100)
    disponivel = models.BooleanField(default=True)

    def __str__(self):
        return self.nome_sala
