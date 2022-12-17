from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from django.db import IntegrityError
from .models import Post
# Create your views here.

class AddPostApi(APIView):
    """
    API endpoint that allows users to add a new post.
    """
    def post(self, request : Request) -> Response:
        data = request.data

        try:
            title = data['title']
            content = data['content']
        except KeyError:
            return Response({
                "title": ["This field is required"],
                "content": ["This field is required"]
            }, status=status.HTTP_400_BAD_REQUEST)

        # Attempt to create a new post
        try:
            post = Post(title=title, content=content, author=request.user)
            post.save()
        except IntegrityError:
           return Response({'detail': 'Internal error'}, status=status.HTTP_409_CONFLICT)

        return Response({
            'id': post.id,
        }, status=status.HTTP_201_CREATED)


class GetPostsApi(APIView):
    """
    API endpoint that allows users to posts from database.
    """
    def get(self, request : Request) -> Response:
        """
        Gets first 10 posts after start
        """
        try:
            start = request.data['start']
        except KeyError:
            start = 0
        else:
            try:
                start = int(start)
            except ValueError:
                return Response({'detail': 'Invalid data parameters'}, status=status.HTTP_400_BAD_REQUEST)


        # Posts from start to end
        posts = Post.objects.order_by('-created_at')[start:(start+10)]
        posts_list = []
        for post in posts:
            posts_list.append(post.to_dict())
        return Response({"posts": posts_list}, status=status.HTTP_200_OK)