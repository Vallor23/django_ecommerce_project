from django.db import models
from django.utils.text import slugify

# Create your models here.
class Product(models.Model):
    CATEGORY = (
        ( "electronics", "Electronics"),
        ("clothings", "Clothings"),
        ("groceries", "Groceries")
    )
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img = models.ImageField(upload_to="img")
    slug = models.SlugField(unique=True, blank=True, null=True)
    stock = models.IntegerField()
    category = models.CharField(max_length=15, choices=CATEGORY, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug

    def __str__(self):
        return f"{self.name} ({self.category})"