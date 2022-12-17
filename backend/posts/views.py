from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from django.db import IntegrityError
from .models import Post
# Create your views here.

class AddPostApi(APIView):
    def post(self, request : Request) -> Response:
        data = request.data
        title = data['title']
        content = data['content']

        if not title or not content:
            return Response({
                "title": ["This field is required"],
                "content": ["This field is required"]
            }, status=status.HTTP_400_BAD_REQUEST)

        # Attempt to create a new post
        try:
            post = Post(title=title, content=content, user=request.user)
            post.save()
        except IntegrityError:
           return Response({'detail': 'Internal error'}, status=status.HTTP_409_CONFLICT)

        return Response({
            'title': str(title),
            'content': str(content)
        }, status=status.HTTP_201_CREATED)