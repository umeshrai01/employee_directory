# Generated by Django 4.2.17 on 2025-01-01 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="employee",
            name="age",
            field=models.PositiveIntegerField(blank=True, editable=False),
        ),
    ]