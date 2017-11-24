# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-11-24 03:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='turnosocia',
            name='notificacion',
        ),
        migrations.AlterField(
            model_name='servicio',
            name='puntaje',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='turnosocia',
            name='dia',
            field=models.DateField(blank=True, null=True),
        ),
    ]
