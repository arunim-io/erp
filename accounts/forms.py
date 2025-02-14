from django import forms
from django.contrib.auth.forms import AuthenticationForm
from formset.renderers.tailwind import FormRenderer
from formset.utils import FormMixin


class AuthForm(FormMixin, AuthenticationForm):
    default_renderer = FormRenderer()
    stay_logged_in = forms.BooleanField(required=False, initial=False)
