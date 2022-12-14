from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.db import IntegrityError

# Create your views here.

class RegisterApi(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request: Request) -> Response:
        data = request.data
        username = data['username']
        password = data['password']

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

class GetUserApi(APIView):
    def get(self, request: Request) -> Response:
        user: User = request.user

        return Response({'username': user.get_username()}, status=status.HTTP_200_OK)
