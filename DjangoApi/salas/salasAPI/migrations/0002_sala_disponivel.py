# Generated by Django 3.2.19 on 2023-06-25 18:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('salasAPI', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sala',
            name='disponivel',
            field=models.BooleanField(default=True),
        ),
    ]
