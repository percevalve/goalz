from django.db import models

# Create your models here.
class Issue(models.Model):
    description = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.description

class Vote(models.Model):
    grade = models.IntegerField()
    issue = models.ForeignKey(Issue,on_delete=models.CASCADE)
    voter_ref = models.CharField(max_length=250,)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
