# Generated by Django 4.1.7 on 2024-03-09 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cModels', '0009_remove_hubuser_avatar'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='description',
        ),
        migrations.AddField(
            model_name='transaction',
            name='imported',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='type',
            field=models.CharField(choices=[('EXPENSE', 'Expense'), ('EARNING', 'Earning')], max_length=7, null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='update_wallet',
            field=models.BooleanField(default=False),
        ),
    ]
