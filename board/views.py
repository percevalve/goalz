from django.shortcuts import render
from django.utils.safestring import mark_safe
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.http import HttpResponse, JsonResponse


import ujson

from .models import Results

def index(request):
    return render(request, 'index.html', {})

@csrf_exempt
def results(request):
    results =  Results.objects.all()
    results_json = ujson.dumps({"data":results})
    status_code = 202
    return HttpResponse(results_json, status=status_code,
                        content_type='application/json')
