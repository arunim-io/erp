from django.http import HttpRequest
from django.urls import reverse_lazy
from django_components import Component, register


@register("sidebar")
class Sidebar(Component):
    template_file = "sidebar.html"
    js_file = "sidebar.js"

    def get_context_data(self, request: HttpRequest, *args, **kwargs):
        return {
            "links": [
                {
                    "label": "Personal Information",
                    "icon_name": "mdi:user",
                    "url": reverse_lazy("user-info"),
                },
                {
                    "label": "Appearance",
                    "icon_name": "mdi:paintbrush",
                    "url": reverse_lazy("appearance"),
                },
            ],
        }
