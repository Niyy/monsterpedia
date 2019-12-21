from django.shortcuts import render, redirect
from django.utils.safestring import mark_safe
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from . import models, forms
import json

# Create your views here.
def index(request):

    data = models.Monster.objects.all()

    context = {
        "data": data,
    }
    
    return render(request, "index.html", context=context)

def monster_maker(request):

    return render(request, "monster_maker.html")

def hunters_lodge(request, room_name):

    return render(request, 'hunters_lodge.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

def monster_maker_two(request):
    return render(request, "monster_maker_two.html")



@csrf_exempt
def save_monster(request):
    if request.method == "POST":
        print(request.FILES['fileUpload'])
        print("Oh my gosh! I got it.")

        newMonster = models.Monster()
        newMonster.monster_picture = request.FILES['fileUpload']

        newMonster.save()
        print("Saving ", newMonster.id)

    return HttpResponse("")
