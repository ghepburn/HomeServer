from flask import Flask, request
import json

from . import app
#from HomeServer.models import DisplaySetting

from .integration.Integrator import Integrator

from .models.Response import Response


@app.route('/')
def base():
    print('HOME SERVER IN SERVICE')
    return 'HOME SERVER IN SERVICE'


# accepts
# {
#   data: {
#       siteSettings: {}
#   }
# }
@app.route('/receive/sms', methods=["POST"])
def receiveSms():
    smsIntegrator = Integrator("models/Sms")

    payload = request.data
    data = json.loads(payload)

    sms = smsIntegrator.integrate(data)

    print(sms)

    if hasattr(sms, "isError"):
        print(sms.message)
        response = {"status": sms.code, "message": sms.message}
        return response
    
    
    print("GOT THE SMS!")
    print(sms)
    sms = sms.__dict__
    return {"status": 200, "data": sms}

