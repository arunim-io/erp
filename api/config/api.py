from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from ninja import NinjaAPI

api = NinjaAPI(csrf=True)


@api.get("/csrf")
@ensure_csrf_cookie
@csrf_exempt
def get_csrf_token():
    return HttpResponse()
