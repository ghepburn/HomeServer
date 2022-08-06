
class SmsValidator():
    validAttributes = ["from", "to", "parts", "message", "receivedDate"]

    def validate(self, data):
        valid = self.attributesAreValid(data)

        return valid

    def attributesAreValid(self, data):
        for i in data.keys():
            attribute = i
            value = data[i]
            if not self.attributeIsValid(attribute, value):
                return False
        return True

    def attributeIsValid(self, attribute, value):
        if attribute.lower() in self.validAttributes:
            return True
        else:
            return False