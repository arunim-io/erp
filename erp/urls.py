"""
URL configuration for erp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from debug_toolbar.toolbar import debug_toolbar_urls
from django.contrib import admin
from django.contrib.auth.decorators import login_not_required
from django.urls import include, path
from django.views.decorators.cache import cache_page
from django.views.generic import TemplateView
from django.views.i18n import JavaScriptCatalog

js_catalog = login_not_required(
    cache_page(3600)(
        JavaScriptCatalog.as_view(
            packages=["formset"],
        ),
    ),
)

urlpatterns = [
    path("admin/docs/", include("django.contrib.admindocs.urls")),
    path("admin/", admin.site.urls),
    path("jsi18n/", js_catalog, name="js-catalog"),
    path("__reload__/", include("django_browser_reload.urls")),
    path("", include("django_components.urls")),
    path("", TemplateView.as_view(template_name="home.html"), name="home"),
    path("accounts/", include("accounts.urls", namespace="accounts")),
    path("settings/", include("settings.urls", namespace="settings")),
    *debug_toolbar_urls(),
]
