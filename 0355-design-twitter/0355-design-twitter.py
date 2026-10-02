import heapq
class Twitter:
    def __init__(self):
        self.follower_map = {}
        self.time = 1
        self.post = {}

    def postTweet(self, userId: int, tweetId: int) -> None:
        post_to_write = (self.time, tweetId)
        if userId not in self.post:
            self.post[userId] = [post_to_write]
        else:
            self.post[userId].append(post_to_write)
        
        self.time += 1

    def getNewsFeed(self, userId: int) -> list[int]:
        arr = [userId]
        if userId in self.follower_map:
            arr += self.follower_map[userId]
        
        heap = []

        for i in range(len(arr)):
            user_id = arr[i]
            posts = []
            if user_id in self.post:
                posts = self.post[user_id]

            for j in range(len(posts)):
                heapq.heappush(heap, (posts[j]))
                if len(heap) > 10:
                    heapq.heappop(heap)
        
        heap.sort(reverse=True)
        for i in range(len(heap)):
            heap[i] = heap[i][1]
        
        return heap

    def follow(self, userId: int, secUserId: int) -> None:
        if userId == secUserId:
            return

        if userId not in self.follower_map:
            self.follower_map[userId] = [secUserId]
        else:
            if secUserId not in self.follower_map[userId]:
                self.follower_map[userId].append(secUserId)

    def unfollow(self, userId: int, secUserId: int) -> None:
        if userId in self.follower_map:
            if secUserId in self.follower_map[userId]:
                self.follower_map[userId].remove(secUserId)
        


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)