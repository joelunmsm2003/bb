# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-12-01 19:46
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0027_auto_20171201_1444'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portadaphoto',
            name='effect',
        ),
        migrations.RemoveField(
            model_name='portadaphoto',
            name='loop',
        ),
        migrations.RemoveField(
            model_name='portadaphoto',
            name='speed',
        ),
    ]