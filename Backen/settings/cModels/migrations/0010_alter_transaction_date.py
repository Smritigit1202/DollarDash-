# Generated by Django 4.1.7 on 2024-03-04 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cModels', '0009_remove_hubuser_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='date',
            field=models.DateField(),
        ),
    ]
