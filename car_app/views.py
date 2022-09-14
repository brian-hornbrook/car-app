from django.shortcuts import render

# Create your views here.


def car(request):
    return render(request, 'car.html', objects.all())


def add(request):
    return render(request, "add_car.html")


def add_car(request):
    if request.method == "POST":
        make = request.POST.get("make")
        model = request.POST.get("model")
        year = request.POST.get("year")
        condition = request.POST.get("condition")
    return render(request, "car.html")
