from django.shortcuts import render
from django.utils.safestring import mark_safe
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.http import HttpResponse, JsonResponse
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync


import ujson

from .models import Results

def index(request):
    return render(request, 'board.html', {})

@csrf_exempt
def results(request):
    results = get_results()
    results_json = ujson.dumps({"data":results})
    status_code = 202
    return HttpResponse(results_json, status=status_code,
                        content_type='application/json')

def submit_to_websocket(vote):
    channel_layer = get_channel_layer()
    results = get_results()
    to_submit = {"type": "chat_message",
                 "message":f'{vote.id} +{vote.grade}',
                 "results": ujson.dumps(results), }
    async_to_sync(channel_layer.group_send)("main", to_submit)

def get_results():
    results =  Results.objects.all()
    return results
