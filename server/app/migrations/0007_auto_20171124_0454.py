# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-11-24 04:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20171124_0444'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sociasubcategoria',
            name='precio',
        ),
        migrations.AddField(
            model_name='subcategoria',
            name='precio',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]