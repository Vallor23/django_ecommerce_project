from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import User

# Register your models here.

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = (
        ('Additional Info', {'fields':('phone',)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide'),
            'fields': ('username', 'email', 'password1', 'password2', 'phone')
        }),
    )

    list_display = ('username', 'email', 'phone', 'is_staff')