class ExplanationSelector:
    def __init__(self,strategy_list=["Theory + Example1", "Example2", "Analogy"]):
        self.strategy_list=strategy_list
    def get_style(self,failures):
        # 1. Calculate the last valid index (The Roof)
        limit=len(self.strategy_list)-1
        # 2. Pick the index: use 'failures', but don't go over 'limit'
        index=min(failures,limit)
        # 3. Return the style
        return self.strategy_list[index]
