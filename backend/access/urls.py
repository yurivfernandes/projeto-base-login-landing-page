from django.urls import path

from . import views

app_name = "access"

urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("api/login/", views.api_login, name="api_login"),
]
