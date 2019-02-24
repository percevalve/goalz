from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from .models import Issue, Vote
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

import ujson, json


# Create your views here.
@csrf_exempt
def vote(request,issue_id):
    #Some initial assert
    assert issue_id is not None
    data_vote = json.loads(request.body)
    assert "grade" in data_vote

    #Get object Issue
    try:
        issue = Issue.objects.get(pk=issue_id)
    except Issue.DoesNotExist:
        msg = f"{issue_id} does not exist in Issue"
        print(msg)
        return JsonResponse({"err":msg}, status=500)
    grade = data_vote.get("grade")
    voter_ref =  data_vote.get("voter_ref","anonymous")
    json_answer = {}
    try:
        vote = Vote(issue=issue,grade=int(grade),voter_ref=voter_ref)
        vote.save()
        status_code = 202
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)("main", {"type": "chat_message","message":f'{issue_id} +{grade}'})
    except Exception as e:
        print(e)
        status_code = 500
        json_answer["err"] = f"There was en error processing vote {issue_id} or {grade}"
    data_json = ujson.dumps(json_answer)
    return HttpResponse(data_json, status=status_code,
                        content_type='application/json')

@csrf_exempt
def add_issue(request):
    #Some initial assert
    data_issue= json.loads(request.body)
    assert "description" in data_issue
    description = data_issue.get("description")
    json_answer = {}
    try:
        issue = Issue(description=description)
        issue.save()
        json_answer["issue_id"] = issue.id
        status_code = 202
    except Exception as e:
        print(e)
        status_code = 500
        json_answer["err"] = f"There was en error adding the issue {description}"
    data_json = ujson.dumps(json_answer)
    return HttpResponse(data_json, status=status_code,
                        content_type='application/json')
