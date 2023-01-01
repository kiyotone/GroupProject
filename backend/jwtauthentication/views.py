from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from django.db import IntegrityError

User = get_user_model()
# Create your views here.

class RegisterApi(APIView):
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

class GetUserApi(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request: Request) -> Response:
        user: User = request.user

        return Response({'username': user.get_username() , 'gender':user.gender }, status=status.HTTP_200_OK)

class ListUserApi(APIView):
    authentication_classes = []
    permission_classes = []
    
    def filter_users(self,users,user_attributes):
        filtered = []
        for user in users:
            filtered_user = {key:user[key] for key in user.keys and user_attributes}
            filtered.append(filtered_user)
        return filtered

    def get(self,request:Request) -> Response:
        users = User.objects.values()
        try:
            if request.data:   
                if  "username" in request.data.keys():
                    responced_user = []
                    for user_check in users:
                        if user_check['username'] == request.data['username']:
                            responced_user.append(user_check)
                        
                filtered_user = self.filter_users(users=responced_user,user_attributes={"username","gender"})

                return Response(filtered_user)
        except NameError:
            return Response({'detail': 'No such user found'}, status=status.HTTP_409_CONFLICT)

        next_users = self.filter_users(users,{"username","gender"})
        return Response(next_users)