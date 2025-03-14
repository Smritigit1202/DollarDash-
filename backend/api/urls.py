from django.urls import path
from .views import RegisterView, LoginView, LogoutView, IncomeView, ExpenseView, BillReminderView, MoneyTransferView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('income/', IncomeView.as_view(), name='income'),
    path('expense/', ExpenseView.as_view(), name='expense'),
    path('bill-reminder/', BillReminderView.as_view(), name='bill_reminder'),
    path('money-transfer/', MoneyTransferView.as_view(), name='money_transfer'),
]
