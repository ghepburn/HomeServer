from ..models.Sms import Sms

class SmsTransformer():

    def transform(self, data):
        sms = Sms(data)
        print("TRANSFORMED")

        return sms