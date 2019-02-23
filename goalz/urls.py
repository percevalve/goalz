"""goalz URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from .api.views import index_view, MessageViewSet
from voter.views import vote
from board.views import index

urlpatterns = [
    # http://localhost:8000/
    path('', index_view, name='index'),

    path('admin/', admin.site.urls),
    path('vote/<int:issue_id>', vote),
    path("board",index),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
