from django.urls import path
from rest_framework_simplejwt.views import TokenVerifyView
from .views import RegisterView, GetUserView, LoginView, TokenRefreshView

urlpatterns = [
    path('token', LoginView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify', TokenVerifyView.as_view(), name='token_verify'),
    path('register', RegisterView.as_view(), name='register'),
    path('getuser', GetUserView.as_view(), name='get_user')
]