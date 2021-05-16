from ..models.HomeServerSms import HomeServerSms as Sms

class SmsTransformer():

    def transform(self, data):
        sms = Sms(data)
        print("TRANSFORMED")

        return sms