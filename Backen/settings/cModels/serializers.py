from rest_framework import serializers
from .models import Transaction, SavingPlan, Wallet, CustomLabel

from django.utils import timezone
from django.contrib.auth import authenticate

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken, AuthenticationFailed


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # Use email and password for authentication
        email = attrs.get("email")
        password = attrs.get("password")

        if email is None or password is None:
            raise AuthenticationFailed("Email and password are required")

        user = authenticate(request=self.context.get("request"), email=email, password=password)

        if not user:
            raise AuthenticationFailed("Invalid email or password")

        self.user = user
        data = super().validate(attrs)

        # Add extra response fields
        data['first_name'] = user.first_name
        data['last_name'] = user.last_name
        data['email'] = user.email

        return data

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['email'] = user.email

        return token


class MyTokenRefreshSerializer(TokenRefreshSerializer):
    refresh = None

    def validate(self, attrs):
        attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
        if attrs['refresh']:
            return super().validate(attrs)
        else:
            raise InvalidToken("No valid token found in cookie 'refresh_token'")


class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomLabel
        fields = ('id', 'name', 'color')


class WalletSerializer(serializers.ModelSerializer):
    monthly_earnings = serializers.SerializerMethodField(source='get_monthly_earnings')
    monthly_expenses = serializers.SerializerMethodField(source='get_monthly_expenses')
    labels = LabelSerializer(many=True)

    class Meta:
        model = Wallet
        fields = ('current_amount', 'monthly_earnings', 'monthly_expenses', 'labels')

    @staticmethod
    def get_monthly_earnings(obj):
        return obj.get_monthly_earnings()

    @staticmethod
    def get_monthly_expenses(obj):
        return obj.get_monthly_expenses()


class TransactionSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format="%m-%d-%Y", input_formats=['%m-%d-%Y'])
    value = serializers.DecimalField(decimal_places=2, max_digits=10)
    amount = serializers.SerializerMethodField()
    duration = serializers.SerializerMethodField()
    label = LabelSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = ('id', 'value', 'date', 'type', 'title', 'label', 'recurrent', 'amount', 'duration', 'imported')

    @staticmethod
    def get_amount(obj):
        if obj.recurrent:
            return None
        return None

    @staticmethod
    def get_duration(obj):
        if obj.recurrent:
            return None
        return None


class SavingPlanSerializer(serializers.ModelSerializer):
    # days_to_end_goal = serializers.SerializerMethodField('get_days_to_end_goal')

    class Meta:
        model = SavingPlan
        fields = ('title', 'amount', 'active', 'goal_date', 'description')

    # def get_days_to_end_goal(self, obj):
    #     return (timezone.now() - obj.goal_date).days
from rest_framework import serializers
from .models import Transaction, SavingPlan, Wallet, CustomLabel

from django.utils import timezone
from django.contrib.auth import authenticate

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken, AuthenticationFailed


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # Use email and password for authentication
        email = attrs.get("email")
        password = attrs.get("password")

        if email is None or password is None:
            raise AuthenticationFailed("Email and password are required")

        user = authenticate(request=self.context.get("request"), email=email, password=password)

        if not user:
            raise AuthenticationFailed("Invalid email or password")

        self.user = user
        data = super().validate(attrs)

        # Add extra response fields
        data['first_name'] = user.first_name
        data['last_name'] = user.last_name
        data['email'] = user.email

        return data

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['email'] = user.email

        return token


class MyTokenRefreshSerializer(TokenRefreshSerializer):
    refresh = None

    def validate(self, attrs):
        attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
        if attrs['refresh']:
            return super().validate(attrs)
        else:
            raise InvalidToken("No valid token found in cookie 'refresh_token'")


class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomLabel
        fields = ('id', 'name', 'color')


class WalletSerializer(serializers.ModelSerializer):
    monthly_earnings = serializers.SerializerMethodField(source='get_monthly_earnings')
    monthly_expenses = serializers.SerializerMethodField(source='get_monthly_expenses')
    labels = LabelSerializer(many=True)

    class Meta:
        model = Wallet
        fields = ('current_amount', 'monthly_earnings', 'monthly_expenses', 'labels')

    @staticmethod
    def get_monthly_earnings(obj):
        return obj.get_monthly_earnings()

    @staticmethod
    def get_monthly_expenses(obj):
        return obj.get_monthly_expenses()


class TransactionSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format="%m-%d-%Y", input_formats=['%m-%d-%Y'])
    value = serializers.DecimalField(decimal_places=2, max_digits=10)
    amount = serializers.SerializerMethodField()
    duration = serializers.SerializerMethodField()
    label = LabelSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = ('id', 'value', 'date', 'type', 'title', 'label', 'recurrent', 'amount', 'duration', 'imported')

    @staticmethod
    def get_amount(obj):
        if obj.recurrent:
            return None
        return None

    @staticmethod
    def get_duration(obj):
        if obj.recurrent:
            return None
        return None


class SavingPlanSerializer(serializers.ModelSerializer):
    # days_to_end_goal = serializers.SerializerMethodField('get_days_to_end_goal')

    class Meta:
        model = SavingPlan
        fields = ('title', 'amount', 'active', 'goal_date', 'description')

    # def get_days_to_end_goal(self, obj):
    #     return (timezone.now() - obj.goal_date).days
