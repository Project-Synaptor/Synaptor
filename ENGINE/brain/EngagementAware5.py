class EngagementMonitor:
    def __init__(self,min_length=5,max_latency=120):
       self.min_length=min_length
       self.max_latency=max_latency
    def check_status(self,response_text,latency):
        if len(response_text)<self.min_length or latency>self.max_latency:
            return "low_engagement"
        else:
            return "high engagement"


