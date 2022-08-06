class Manager:
    actionWords = [
        "add", "remove", "complete"
    ]

    def __init__(self):
        return

    def receiveSms(self, sms):
        #parse message
        message = sms.message.split(" ")
        if len(message) > 1:
            
            # define action
            actionWord = message[0]
            if not self.isActionWord(actionWord):
                actionWord = "add"

            #define subject
            

            #define content

            
        #act on message

        #respond to message

    def isActionWord(self, word):
        if word in self.actionWords:
            return True
        else:
            return False