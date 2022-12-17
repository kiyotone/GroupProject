from django.urls import path

from .views import AddPostApi

urlpatterns = [
    path('addpost', AddPostApi.as_view(), name='add_post')
]