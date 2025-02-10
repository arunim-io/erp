from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path

from .forms import AuthForm

app_name = "accounts"

urlpatterns = [
    path(
        "login/",
        LoginView.as_view(template_name="accounts/login.html", form_class=AuthForm),
        name="login",
    ),
    path("logout/", LogoutView.as_view(), name="logout"),
]
