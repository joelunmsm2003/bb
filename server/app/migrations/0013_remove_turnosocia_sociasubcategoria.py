# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-11-27 00:08
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_auto_20171126_2216'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='turnosocia',
            name='sociasubcategoria',
        ),
    ]
