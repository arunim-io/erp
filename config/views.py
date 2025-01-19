from django.http import HttpRequest
from inertia import render


def home(request: HttpRequest):
    return render(request, "Home")
