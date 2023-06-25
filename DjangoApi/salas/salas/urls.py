from django.urls import path, include
from salasAPI import views
from salasAPI.serializers.viewsets import SalasViewSet
from salasAPI.views import criar_sala
from rest_framework import routers
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'salas', SalasViewSet, basename="salas")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('salas/criar/', views.criar_sala, name='criar_sala'),
    path('salas/reservar/<int:sala_id>/', views.reservar_sala, name='reservar_sala'),
    path('salas/listar_reservadas/', views.listar_salas_reservadas, name='listar_salas_reservadas'),
    path('salas/apagar/<int:sala_id>/', views.apagar_sala),
    path('', include(router.urls)),
]
