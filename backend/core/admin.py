from django.contrib import admin

from .models import (
    ContactInfo,
    Banner,
    PropertyCategory,
    Faq,
    Property,
    Featured,
    VedioView,
    Bestdeal,
    Contact,
)

admin.site.register([
    ContactInfo,
    Banner,
    PropertyCategory,
    Faq,
    Property,
    Featured,
    VedioView,
    Bestdeal,
    Contact,
])