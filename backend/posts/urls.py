from django.urls import path

from .views import AddPostApi, GetPostsApi, FollowApi

urlpatterns = [
    path('addpost', AddPostApi.as_view(), name='add_post'),
    path('getposts', GetPostsApi.as_view(), name='get_posts'),
    path('follow/<str:username>', FollowApi.as_view(), name='follow')
]