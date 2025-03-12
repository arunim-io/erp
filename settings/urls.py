from django.urls import path
from django.views.generic import RedirectView, TemplateView

app_name = "settings"

urlpatterns = [
    path("", RedirectView.as_view(pattern_name="settings:user-info"), name="index"),
    path(
        "appearance/",
        TemplateView.as_view(template_name="settings/appearance.html"),
        name="appearance",
    ),
    path(
        "user/",
        TemplateView.as_view(template_name="settings/user_info.html"),
        name="user-info",
    ),
]
