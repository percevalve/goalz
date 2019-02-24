from django.db import models

# Create your models here.
class Results(models.Model):
	issue_id = models.IntegerField(primary_key=True, )
	total_votes = models.IntegerField( null=True)
	description =  models.CharField(max_length=15)
#	def refresh(self):
#	    with connection.cursor() as cursor:
#	        cursor.execute("REFRESH MATERIALIZED VIEW CONCURRENTLY report_job_for_listing")
	class Meta:
		managed = False
		db_table = 'board_results'
