from django.db import models

# Create your models here.
class Post(models.Model):
    files = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    
    
