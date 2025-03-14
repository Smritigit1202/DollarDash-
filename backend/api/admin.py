from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Income, Expense, BillReminder, MoneyTransfer

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email', 'account_no', 'stars', 'cash_balance', 'online_balance', 'is_staff', 'is_active')
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('account_no', 'stars', 'profile_pic', 'cash_balance', 'online_balance')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Income)
admin.site.register(Expense)
admin.site.register(BillReminder)
admin.site.register(MoneyTransfer)
