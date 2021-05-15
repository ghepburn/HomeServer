class Error():
    def __init__(self, type, message, code):  
        self.isError = True
        self.type = type
        self.message = message
        self.code = code