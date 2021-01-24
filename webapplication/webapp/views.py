from django.http import HttpResponse
from django.shortcuts import render

def home(request):
	return render(request, "folio.html")
def contact(request):
	if request.method == "POST":
		sender_name = request.POST.get("name")
		sender_email = request.POST.get("email")
		subject = request.POST.get("subject")
		message = request.POST.get("message")
	return render(request, "thank_you.html", {"name": sender_name, "email": sender_email, "subject": subject, "message": message})