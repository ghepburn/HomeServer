from .validate.SmsValidator import SmsValidator
from .transform.SmsTransformer import SmsTransformer
from .load.SmsLoader import SmsLoader

from ..models.Error import Error


class Integrator():
    def __init__(self, type):
        # if type == "sms":
        self.validator = SmsValidator()
        self.transformer = SmsTransformer()
        self.loader = SmsLoader()
    
    def integrate(self, data):
        try:
            isValid = self.validator.validate(data)   
            if not isValid:
                return Error("Validation Error", "Data is not valid. Please correct and try again.", 500)
        except:
            return Error("Validation Error", "Error received when trying to validate the sms", 500)
        try:
            transformedData = self.transformer.transform(data)
        except:
            return Error("Transformation Error", "Error received when trying to transform the sms", 500)
        try:
            loadedData = self.loader.load(transformedData)
        except:
            return Error("Loading Error", "Error receieved trying to load the sms", 500)
        return loadedData