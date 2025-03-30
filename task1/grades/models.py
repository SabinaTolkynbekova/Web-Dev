from django.db import models
import json
# Create your models here.
class student(models.Model):
    name = models.CharField(max_length=1000)

    scores = models.JSONField()

    def get_avg_score(self):
        return sum(self.scores)/len(self.scores) if self.scores else 0 
    
    def get_top_score(self):
        return max(self.scores, default = 0)
    
    def __str__(self):
        return self.name
