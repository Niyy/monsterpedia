from django import forms

class MonsterForm(forms.Form):
    monsterName = forms.CharField(max_length=100)