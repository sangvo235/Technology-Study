class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """

        l, r = 0, 1
        max_profit = 0

        while r < len(prices):
            max_profit = max(max_profit, prices[r]-prices[l])
            if prices[l] > prices[r]:
                l = r
            r += 1
        
        return max_profit

# Time Complexity: O(N)
# Space Complexity: O(1)