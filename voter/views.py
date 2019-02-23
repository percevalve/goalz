from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from .models import Issue, Vote
import ujson


# Create your views here.
@csrf_exempt
def vote(request,issue_id):
    assert issue_id is not None
    data_vote = ujson.loads(request.body)
    assert "grade" in data_vote
    issue = get_object_or_404(Issue, pk=issue_id)
    grade = data_vote.get("grade")
    json_answer = {}
    try:
        vote = Vote(issue=issue,grade=int(grade))
        vote.save()
        status_code = 202
    except:
        status_code = 500
        json_answer["err"] = f"There was en error processing vote {issue_id} or {grade}"
    data_json = ujson.dumps(json_answer)
    return HttpResponse(data_json, status=status_code,
                        content_type='application/json')
