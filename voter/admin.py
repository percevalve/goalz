from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Vote, Issue

admin.site.register(Vote)
admin.site.register(Issue)
