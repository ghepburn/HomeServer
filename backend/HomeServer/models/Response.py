

class Response:
    def __init__(self, code=200, message="Successful", data=None):
        self.response = {}
        self.response["status"] = code
        self.response["message"] = message
        self.response["data"] = data 