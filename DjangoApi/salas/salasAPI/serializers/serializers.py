from rest_framework import serializers
from salasAPI.models import Sala

class SalaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sala
        fields = ['id', 'nomeSala', 'nomeAdmin', 'disponivel']

    def create(self, validated_data):
        sala = Sala.objects.create(**validated_data)
        return sala
