# Generated by Django 2.2.8 on 2019-12-18 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='monster',
            name='monster_picture',
            field=models.ImageField(upload_to=''),
        ),
    ]
