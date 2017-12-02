# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-11-29 03:49
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0023_configuracion_tipo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Estadoservicio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=1000, null=True)),
            ],
            options={
                'verbose_name': 'Estado de servicio',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='servicio',
            name='estado',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.Estadoservicio'),
        ),
    ]