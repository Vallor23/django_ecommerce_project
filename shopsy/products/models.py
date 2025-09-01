from django.db import models
from django.utils.text import slugify
from django.core.validators import MinValueValidator
# Create your models here.
class Product(models.Model):
    CATEGORY = (
        ( "electronics", "Electronics"),
        ("fashion", "Fashion"),
        ("beauty", "Beauty"),
        ("home & living", "Home & Living")
    )
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    description = models.TextField()
    img = models.ImageField(upload_to="img", blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True, null=True)
    stock = models.PositiveIntegerField(default=0)
    category = models.CharField(max_length=15, choices=CATEGORY, blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug and self.name:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while Product.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.category})"
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "Product"
        verbose_name_plural = "Products"