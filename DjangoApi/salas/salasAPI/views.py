from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from salasAPI.serializers.serializers import SalaSerializer
from .models import Sala
from django.http import JsonResponse

@api_view(['GET'])
def get_salas_disponiveis(request):
    salas_disponiveis = Sala.objects.filter(disponivel=True)
    serializer = SalaSerializer(salas_disponiveis, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def listar_salas_reservadas(request):
    salas_reservadas = Sala.objects.filter(disponivel=False)
    serializer = SalaSerializer(salas_reservadas, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def criar_sala(request):
    if request.method == 'POST':
        serializer = SalaSerializer(data=request.data)
        if serializer.is_valid():
            sala = serializer.save()
            response_data = {
                'message': 'Sala criada com sucesso!',
                'data': {
                    'id': sala.id,
                    'nomeSala': sala.nomeSala,
                    'nomeAdmin': sala.nomeAdmin,
                    'disponivel': sala.disponivel,
                }
            }
            return Response(response_data, status=201)
        else:
            response_data = {'error': serializer.errors}
            return Response(response_data, status=400)

    response_data = {'error': 'Método de requisição inválido.'}
    return Response(response_data, status=405)

@api_view(['PATCH'])
def reservar_sala(request, sala_id):
    try:
        sala = Sala.objects.get(id=sala_id)
    except Sala.DoesNotExist:
        response_data = {'error': 'Sala não encontrada.'}
        return Response(response_data, status=404)

    sala.disponivel = False
    sala.save()

    serializer = SalaSerializer(sala)
    response_data = {
        'message': 'Sala reservada com sucesso!',
        'data': serializer.data
    }
    return Response(response_data, status=200)

@api_view(['DELETE'])
def apagar_sala(request, sala_id):
    try:
        sala = Sala.objects.get(id=sala_id)
        sala.delete()
        return Response({'message': 'Sala apagada com sucesso.'}, status=200)
    except Sala.DoesNotExist:
        response_data = {'error': 'Sala não encontrada.'}
        return Response(response_data, status=404)

