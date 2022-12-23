from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import authenticate
from django.conf import settings

# Create your views here.

class LoginView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request: Request) -> Response:
        data = request.data
        try:
            username = data['username']
            password = data['password']
        except KeyError:
            return Response({
                'username': ['this field is required'],
                'password': ['this field is required']
            }, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=username, password=password)
        if not user:
            return Response({'detail': 'No active account found with the given credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        # Set refresh token cookie
        response = Response()
        response.set_cookie(
            key = settings.SIMPLE_JWT['AUTH_COOKIE'],
            value = str(refresh),
            expires = settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
            secure = settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            httponly = settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
            samesite = settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
        )

        response.status_code = status.HTTP_200_OK
        response.data = {
            'access': str(refresh.access_token),
        }

        return response

class RegisterView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request: Request) -> Response:
        data = request.data
        username = data['username']
        password = data['password']

        if not username or not password:
            return Response({
                "username": ["This field is required"],
                "password": ["This field is required"]
            }, status=status.HTTP_400_BAD_REQUEST)

        # Attempt to create a new user
        try:
            user = User.objects.create_user(username=username, password=password)
            user.save()
        except IntegrityError:
           return Response({'detail': 'User already exists'}, status=status.HTTP_409_CONFLICT)

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }, status=status.HTTP_201_CREATED)


class TokenRefreshView(APIView):
    def post(self, request: Request) -> Response:
        refresh = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])
        if not refresh:
            return Response({'detail': 'Refresh token cookie not found'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            refresh = RefreshToken(refresh)
            refresh.verify()
        except Exception:
            return Response({'detail': 'token is invalid or expired', 'code': 'token_not_valid'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'access': str(refresh.access_token)}, status=status.HTTP_200_OK)


class GetUserView(APIView):
    def get(self, request: Request) -> Response:
        user: User = request.user

        return Response({'username': user.get_username()}, status=status.HTTP_200_OK)
