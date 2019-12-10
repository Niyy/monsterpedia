from django.shortcuts import render, redirect
from django.utils.safestring import mark_safe
import json

# Create your views here.
def index(request):

    context = {
        
    }

    return render(request, "index.html")

def monster_maker(request):

    context = {
        
    }

    return render(request, "monster_maker.html")

def hunters_lodge(request, room_name):

    return render(request, 'hunters_lodge.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

def monster_maker_two(request):
    return render(request, "monster_maker_two.html")
