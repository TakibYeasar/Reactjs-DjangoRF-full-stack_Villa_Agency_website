from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.core.mail import send_mail

# Create your views here.


class ContactInfoView(APIView):
    def get(self, request):
        info_obj = ContactInfo.objects.all()
        info_serializers = ContactInfoSerializer(
            info_obj, many=True, context={'request': request}).data
        return Response(info_serializers)


class BannerView(APIView):
    def get(self, request):
        banner_obj = Banner.objects.all()
        banner_serializers = BannerSerializer(
            banner_obj, many=True, context={'request': request}).data
        return Response(banner_serializers)


class PropertyCategoryView(APIView):
    def get(self, request):
        category_obj = PropertyCategory.objects.all()
        category_serializers = PropertyCategorySerializer(
            category_obj, many=True, context={'request': request}).data
        return Response(category_serializers)


class PropertyView(APIView):
    def get(self, request):
        property_obj = Property.objects.all()
        property_serializers = PropertySerializer(
            property_obj, many=True, context={'request': request}).data
        return Response(property_serializers)


class CategoryPropertyView(APIView):
    def get(self, request, pk):
        category_obj = PropertyCategory.objects.filter(id=pk)
        category_serializer = PropertyCategorySerializer(
            category_obj, context={'request': request}, many=True).data
        data = []
        for cata in category_serializer:
            property_obj = Property.objects.filter(category=cata['id'])
            cata['property'] = PropertySerializer(
                property_obj, context={'request': request}, many=True).data
            data.append(cata)
        return Response(data)


class FeaturedView(APIView):
    def get(self, request):
        featured_obj = Featured.objects.all()
        featured_serializers = FeaturedSerializer(
            featured_obj, many=True, context={'request': request}).data
        return Response(featured_serializers)


class VedioviewView(APIView):
    def get(self, request):
        vedio_obj = VedioView.objects.all()
        vedio_serializers = VedioViewSerializer(
            vedio_obj, many=True, context={'request': request}).data
        return Response(vedio_serializers)


class BestdealView(APIView):
    def get(self, request):
        bestdeal_obj = Bestdeal.objects.all()
        bestdeal_serializers = BestdealSerializer(
            bestdeal_obj, many=True, context={'request': request}).data
        return Response(bestdeal_serializers)


class ContactView(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request, format=None):
        data = self.request.data
        response = 'You will be contacted shortly.'

        try:
            send_mail(data['subject'],
                      'Name: ' + data['name'] + '\nEmail: ' + data['email'] +
                      '\n\nMessage:\n' + data['message'] + '\n\n' + response,
                      '19bcp101.nepal@gmail.com',
                      [data['email'], 'nothing3669@gmail.com'],
                      fail_silently=False)

            contact = Contact(name=data['name'],
                              email=data['email'],
                              subject=data['subject'],
                              message=data['message'])
            contact.save()

            return Response({'success': 'Message sent successfully'})

        except:
            return Response({'error': 'Message failed to send'})
