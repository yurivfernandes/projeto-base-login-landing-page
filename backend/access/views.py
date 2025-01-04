import json

from django.contrib.auth import authenticate, login
from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .forms import CustomUserCreationForm


def signup(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password1")
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect("home")
    else:
        form = CustomUserCreationForm()
    return render(request, "signup.html", {"form": form})


@csrf_exempt
@require_http_methods(["OPTIONS", "POST"])
def api_login(request):
    if request.method == "OPTIONS":
        response = HttpResponse()
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type"
        return response

    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            response = JsonResponse({"message": "Login successful"})
        else:
            response = JsonResponse(
                {"error": "Invalid credentials"}, status=400
            )

        response["Access-Control-Allow-Origin"] = "*"
        return response

    response = JsonResponse({"error": "Invalid request method"}, status=405)
    response["Access-Control-Allow-Origin"] = "*"
    return response
