class InvalidWheelParam(Exception):
    def __init__(self, message):
        self.error_message = message
