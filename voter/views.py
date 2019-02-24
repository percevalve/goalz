from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from .models import Issue, Vote
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

import json


# Create your views here.
@csrf_exempt
def vote(request,issue_id):
    assert issue_id is not None
    data_vote = json.loads(request.body)
    assert "grade" in data_vote
    issue = get_object_or_404(Issue, pk=issue_id)
    grade = data_vote.get("grade")
    json_answer = {}
    try:
        vote = Vote(issue=issue,grade=int(grade))
        vote.save()
        status_code = 202
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)("main", {"type": "chat_message","message":f'{issue_id} +{grade}'})
    except Exception as e:
        print(e)
        status_code = 500
        json_answer["err"] = f"There was en error processing vote {issue_id} or {grade}"
    data_json = json.dumps(json_answer)
    return HttpResponse(data_json, status=status_code,
                        content_type='application/json')
