# ruff: noqa: PLR6301

from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.views import View
from django.views.generic.edit import FormMixin
from inertia import render


class LoginView(FormMixin, View):
    form_class = AuthenticationForm

    def get_response(self, request, props=None):
        return render(request, "Login", props)

    def get(self, request):
        return self.get_response(request)

    def post(self, request):
        form: AuthenticationForm = self.get_form()

        if form.is_valid():
            user = authenticate(request, **form.cleaned_data)
