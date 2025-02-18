from django_components import Component, register


@register("sidebar")
class Sidebar(Component):
    template_file = "sidebar.html"
