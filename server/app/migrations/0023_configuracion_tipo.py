# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-11-29 03:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0022_configuracion_titulo_notificacion'),
    ]

    operations = [
        migrations.AddField(
            model_name='configuracion',
            name='tipo',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]