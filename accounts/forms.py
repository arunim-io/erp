from django import forms
from django.contrib.auth.forms import AuthenticationForm


class AuthForm(AuthenticationForm):
    stay_logged_in = forms.BooleanField(
        required=False,
        label="Remember",
        label_suffix="",
    )
