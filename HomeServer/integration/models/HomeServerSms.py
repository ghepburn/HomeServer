from .Sms import Sms

class HomeServerSms(Sms):
    actions = ["add", "remove", "complete"]
    subjects = ["todo", "reminder"]

    def __init__(self, data):
        super().__init__(self, data)
        if self.message and len(self.message) > 1:
            self.parseMessage(data)

    def parseMessage(self, message):
        self.action = "add"
        
        splitMessage = message.split(" ")
        
        # make lowercase
        for i in len(range(splitMessage)):
            splitMessage[i] = splitMessage[i].lower()
        
        # define action, subject and other
        if len(splitMessage) > 2:
            self.action = splitMessage[0]
            splitMessage = splitMessage[1:]

        self.subject = splitMessage[0]
        
        if len(splitMessage) > 1:
            self.other = splitMessage[1]