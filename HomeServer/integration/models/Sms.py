

class Sms:
    acceptedAttributes = ["from", "to", "parts", "message", "dateReceived"]

    def __init__(self, data):
        for key in data.keys():
            if key in self.acceptedAttributes:
                setattr(self, key, data[key])





    