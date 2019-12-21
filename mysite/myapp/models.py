from django.db import models

# Create your models here.
class Monster(models.Model):
    monster_picture = models.ImageField(upload_to="uploads/%Y/%m/%d")
