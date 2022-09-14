from django.forms import ModelForm
from .models import Car

class TodoForm(ModelForm):
    class Meta:
        model = Car
        fields = ['make', 'model', 'year', 'condition']