from flask import Flask, request
import json

from . import app
#from HomeServer.models import DisplaySetting

from .integration.Integrator import Integrator

from .Manager import Manager


@app.route('/')
def base():
    print('HOME SERVER IN SERVICE')
    return 'HOME SERVER IN SERVICE'


@app.route('/receive/sms', methods=["POST"])
def receiveSms():
    smsIntegrator = Integrator("models/Sms")
    personalManager = Manager()

    payload = request.data
    data = json.loads(payload)

    sms = smsIntegrator.integrate(data)

    personalManager.receiveSms(sms)

    if hasattr(sms, "isError"):
        print(sms.message)
        response = {"status": sms.code, "message": sms.message}
        return response
    
    sms = sms.__dict__
    response = {"status": 200, "data": sms}
    print(response)
    return response
