# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-11-27 05:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0017_cliente_numero_notificacion'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='apellido',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name='cliente',
            name='edad',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name='cliente',
            name='email',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name='cliente',
            name='telefono',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='nombre',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
