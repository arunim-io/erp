from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import UserManager


class User(AbstractUser):
    username = None
    email = models.EmailField(_("email address"), unique=True)
    is_email_verified = models.BooleanField(
        _("email verified"),
        default=False,
        help_text=_(
            "Designates whether this user is using a verified email address."
            "If it is unselected, then a regular user can't log in.",
        ),
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()  # pyright: ignore[reportAssignmentType]

    def __str__(self) -> str:
        return self.email
