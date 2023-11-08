from rest_framework import serializers
from .models import *


class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = "__all__"


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"
        # depth = 1

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class PropertyCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyCategory
        fields = "__all__"
        
        
class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = "__all__"
        # depth = 1


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = "__all__"
        depth = 1

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class FeaturedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Featured
        fields = "__all__"
        
    # def to_representation(self, instance):
    #     response = super().to_representation(instance)
    #     request = self.context.get('request')
    #     response['property'] = PropertySerializer(instance.property, context={'request':request}).data
    #     return response


class VedioViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = VedioView
        fields = "__all__"
        # depth = 1

    def imageurl(self, obj):
        request = self.obj.get('request')
        return request.url("image")


class BestdealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bestdeal
        fields = "__all__"
        
    # def to_representation(self, instance):
    #     response = super().to_representation(instance)
    #     request = self.context.get('request')
    #     response['property'] = PropertySerializer(instance.property, context={'request':request}).data
    #     return response



class ContactSerialier(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


