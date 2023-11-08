from django.db import models
from authapi.models import CustomUser
from django.shortcuts import reverse


# Create your models here.

class ContactInfo(models.Model):
    email = models.EmailField(max_length=50, unique=True, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    facebook_link = models.CharField(max_length=100, blank=True, null=True)
    twitter_link = models.CharField(max_length=100, blank=True, null=True)
    linkedin_link = models.CharField(max_length=100, blank=True, null=True)
    instagram_link = models.CharField(max_length=100, blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Contact Info'
        
    def __str__(self):
        return self.email


class Banner(models.Model):
    image = models.ImageField(upload_to='banner/', blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Banners'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:banner", kwargs={
            'slug': self.slug
        })


class PropertyCategory(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Property Categories'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:propertycategory", kwargs={
            'slug': self.slug
        })


class Faq(models.Model):
    question = models.CharField(max_length=255, blank=True, null=True)
    answer = models.TextField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Faq'
        ordering = ('-created',)
    
    def __str__(self):
        return self.question
    
    

class Property(models.Model):
    category = models.ManyToManyField(PropertyCategory)
    image = models.ImageField(upload_to='property/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()
    faq = models.ManyToManyField(Faq)
    flat = models.CharField(max_length=255, blank=True, null=True)
    floor = models.PositiveIntegerField()
    room = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField(default=0)
    parking = models.CharField(max_length=255, blank=True, null=True)
    price = models.CharField(max_length=255, blank=True, null=True)
    available = models.BooleanField(default=True)
    payment = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Properties'
        ordering = ('-created',)
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:properties", kwargs={
            'slug': self.slug
        })



class Featured(models.Model):
    property = models.ManyToManyField(Property)
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Featured Property'
    
    def get_absolute_url(self):
        return reverse("core:featuredproperty", kwargs={
            'slug': self.slug
        })
        

class VedioView(models.Model):
    bg_image = models.ImageField(upload_to='contact/', blank=True, null=True)
    vedio_image = models.ImageField(upload_to='vieioview/', blank=True, null=True)
    vedio_link = models.CharField(max_length=255, blank=True, null=True)
    building = models.PositiveIntegerField()
    experience = models.PositiveIntegerField()
    awards = models.PositiveIntegerField()
    
    class Meta:
        verbose_name_plural = 'Veio View'


class Bestdeal(models.Model):
    property = models.ManyToManyField(Property)
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Bestdeal Property'
    
    def get_absolute_url(self):
        return reverse("core:bestdealproperty", kwargs={
            'slug': self.slug
        })



class Contact(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=50, blank=True, null=True)
    subject = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField(blank=True)
    
    class Meta:
        verbose_name_plural = 'Contact'
    
    def __str__(self):
        return self.email
    
    def get_absolute_url(self):
        return reverse("core:contact", kwargs={
            'slug': self.slug
        })





