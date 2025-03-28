from django.contrib.auth.views import LoginView as BaseLoginView

from .forms import AuthForm


class LoginView(BaseLoginView):
    form_class = AuthForm
    template_name = "accounts/login.html"
