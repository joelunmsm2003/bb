# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-12-01 19:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0024_auto_20171128_2249'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portadaphoto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=1000)),
                ('photo', models.FileField(blank=True, null=True, upload_to='static')),
            ],
            options={
                'verbose_name': 'Portada/Photo',
                'managed': True,
            },
        ),
        migrations.DeleteModel(
            name='Configuracion',
        ),
        migrations.RemoveField(
            model_name='servicio',
            name='estado',
        ),
        migrations.DeleteModel(
            name='Estadoservicio',
        ),
    ]
