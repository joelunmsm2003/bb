# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-11-24 04:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20171124_0411'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicio',
            name='notificacion_titulo',
            field=models.CharField(blank=True, default=True, max_length=1000),
        ),
    ]
