from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('contact-info/', ContactInfoView.as_view()),
    path('banners/', BannerView.as_view()),
    path('property-cat/', PropertyCategoryView.as_view()),
    path('properties/', PropertyView.as_view()),
    path('cat/<int:pk>/properties/', CategoryPropertyView.as_view()),
    path('featured/', FeaturedView.as_view()),
    path('vedioview/', VedioviewView.as_view()),
    # path('bestdeal/', BestdealView.as_view()),
    path('contact/', ContactView.as_view()),
]