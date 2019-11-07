from django.shortcuts import render, redirect

# Create your views here.
def index(request):

    context = {
        
    }

    return render(request, "index.html")

def monster_maker(request):

    context = {
        
    }

    return render(request, "monster_maker.html")

def hunters_lodge(request):

    context = {
        
    }

    return render(request, "hunters_lodge.html")
