from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

from typing import Dict

# Create your models here.
class Post(models.Model):
    """
    Post model
    """
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def to_dict(self) -> Dict[str, str]:
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'created_at': self.created_at,
            'author': self.author.username
        }

class Follow(models.Model):
    """
    Follow model
    """
    follower = models.ForeignKey(User, related_name='follower', on_delete=models.CASCADE)
    following = models.ForeignKey(User, related_name='following', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.follower.username} follows {self.following.username}'
