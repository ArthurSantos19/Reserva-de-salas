# Generated by Django 3.2.19 on 2023-06-27 22:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('salasAPI', '0003_sala_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sala',
            name='data',
            field=models.DateField(default='01/01/2023'),
        ),
    ]
