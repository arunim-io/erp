from django.http import HttpRequest
from inertia import share


def inertia_share(get_response):
    def middleware(request: HttpRequest):
        share(
            request,
            user=lambda: request.user if request.user.is_authenticated else None,
        )

        return get_response(request)

    return middleware
