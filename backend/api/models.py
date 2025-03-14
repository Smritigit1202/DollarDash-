from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    account_no = models.CharField(max_length=20, unique=True, blank=True, null=True)
    stars = models.IntegerField(default=0)
    profile_pic = models.ImageField(upload_to="profile_pics/", blank=True, null=True)
    cash_balance = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    online_balance = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)

    def __str__(self):
        return self.username

class Income(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    source = models.CharField(max_length=255)
    payment_method = models.CharField(max_length=20, choices=[('Cash', 'Cash'), ('Online', 'Online')])
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.amount} ({self.payment_method})"

class Expense(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    description = models.TextField()
    category = models.CharField(max_length=50)
    payment_method = models.CharField(max_length=20, choices=[('Cash', 'Cash'), ('Online', 'Online')])
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.amount} ({self.category})"

class BillReminder(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    due_date = models.DateField()
    description = models.TextField()
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.amount} (Due: {self.due_date})"

class MoneyTransfer(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    from_account = models.CharField(max_length=10, choices=[('Cash', 'Cash'), ('Online', 'Online')])
    to_account = models.CharField(max_length=10, choices=[('Cash', 'Cash'), ('Online', 'Online')])
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.amount} ({self.from_account} → {self.to_account})"
