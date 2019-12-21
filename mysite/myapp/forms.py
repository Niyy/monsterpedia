from django import forms

class MonsterForm(forms.Form):
    planet_picture = forms.ImageField(label='')