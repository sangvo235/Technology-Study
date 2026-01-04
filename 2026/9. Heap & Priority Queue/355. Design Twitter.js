class Twitter {
    constructor() {
        this.time = 0.;
        this.tweets = new Map();
        this.follows = new Map();
    }

    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) this.tweets.set(userId, []);
        this.tweets.get(userId).push({ time: ++this.time, id: tweetId });
    }

    getNewsFeed(userId) {
        const users = new Set([userId]);
        const candidates = [];

        // if userId exist find all the ppl this user follows and add to users Set
        // users = userId + followee1, ...
        if (this.follows.has(userId)) {
            for (const followee of this.follows.get(userId)) {
                users.add(followee);
            }
        }

        // splice lastest 10 uids from the users list and put into the candidates 
        // since max = 10 from one user if it happens to be the latest 10 tweet ids
        for (const uid of users) {
            const userTweets = this.tweets.get(uid) || [];
            candidates.push(...userTweets.slice(-10));
        }

        //
        return candidates
            .sort((a, b) => b.time - a.time)
            .slice(0, 10)
            .map(tweet => tweet.id);
    }

    follow(followerId, followeeId) {
        if (followerId === followeeId) return;
        if (!this.follows.has(followerId)) this.follows.set(followerId, new Set());
        this.follows.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.follows.has(followerId)) {
            this.follows.get(followerId).delete(followeeId);
        }
    }
}

// HashMap
// Time Complexity: Collect Followees = O(F), Collect last 10 tweets per user = O(F), Sort Candidates = O(FlogF) where F = # of followees of userId. 
// Space Complexity: Users Set = O(F), Candidates Array = O(10*F) --> O(F) ~ Overall is O(F).