from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import HubUser, CustomLabel, Transaction, SavingPlan, Wallet

@admin.register(HubUser)
class CustomUserAdmin(UserAdmin):
    model = HubUser
    list_display = ('email', 'first_name', 'last_name', 'is_active', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {
            'fields': (
                'is_active',
                'is_staff',
                'is_superuser',
                'groups',
                'user_permissions',
            )
        }),
        ('Important Dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email',
                'first_name',
                'last_name',
                'password1',
                'password2',
                'is_active',
                'is_staff',
                'is_superuser',
            ),
        }),
    )

# Register other models
admin.site.register(Wallet)
admin.site.register(Transaction)
admin.site.register(SavingPlan)
admin.site.register(CustomLabel)
