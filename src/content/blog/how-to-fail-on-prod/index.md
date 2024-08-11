---
title: "How to Cook and Fail on Prod (and fix it)"
description: "How a bunch of nerds cooked a bunch of nerdy shit and failed (not really)"
date: "Aug 12 2024"
---

It's college election season. Things are pretty charged in the campus right now. Being seniors now, all the key people in the elections are our friends. The election debate was in a few hours and the candidates were getting ready. The close set of friends I keep, we're a bunch of nerds. We stay away from the negativity. While wondering what we can do help the candidates and the junta, an idea took seed - an entrance poll (instead of an exit poll) through a website. The user could login, vote for their candidate, and post comments as well.

### The start

[One of us](https://x.com/dekamdev) already had a voting project they built for buildspace called [LoserLeague](https://loserleague.vercel.app/) (go check it out, it's cool af). So the backend was already ready, all we had to do was change parts of the frontend and remove some features which might be misused and was unnecessary for the use case in hand.

We quickly got to work and by the time the election debate was over, V1 was ready. Or so we thought.

We launched at 11 pm, 31st July 2024.

![](https://i.imgur.com/rsYeozL.png)
_Crude publicity through WhatsApp status_

The site blew up.

Like really blew up.

We had over 100 registrations in the first 45 minutes.

We were elated, high on the adrenaline of the success. Until we realised something was off. The registrations had stopped, even though the page view count was still going up. It was very weird.

Until we tried registering with a new account.

![](https://i.imgur.com/X6T72U9.png)

You see, we were using [Clerk](https://clerk.com/) to manage our authentication and users. And so by default, we were using the [Development instance](https://clerk.com/docs/deployments/environments). And the thing about Development instances is that:

![](https://i.imgur.com/GMRMqes.png)

We never realised this because none of our projects went over 20 users. We acted quickly and started to shift to a Production instance. That came with its own bag of problems:

![](https://i.imgur.com/u48NaBV.png)

This meant we could not use our `.vercel.app` link anymore. We now had to up our game. A `.live` domain was quickly bought from GoDaddy and setup in Clark.

All this while, we were manually deleting old accounts so that users would keep flowing in and the usage didn't drop.

By the time the migration was done, it was around 2 in the morning. We deployed the production instance.

Except, it didn't work.

The user was able to login and register, but the account wasn't getting created in our Convex database. So we knew the problem, and our guess was that the databases were not "talking" to each other properly.

The debug session started and went though the night. Blogs were read, YouTube videos were watched, fixes were pushed, yet nothing seemed to work. I fell asleep trying to find possible solutions. By 5 am we had given up hope and went to get some much needed sleep. All this while the page views had crossed the 3k mark.

### The comeback

The morning came and the debug sessions started again. At 1:25 pm, a miracle happened.

![](https://i.imgur.com/KDfYTLr.png)

We were finally back. Things were working again.

A fresh round of statuses were sent out again.

![](https://i.imgur.com/nbLZufA.png)
_By 2:15 pm we had reached 4k+ page views_

![](https://i.imgur.com/5hhZXHO.png)
_And by 3 pm we reached 5k page views_

There was no looking back after this. Things started getting heated up in the comments section. There were allegations, insults and rampant fightings going on. We had a strict rule of no moderation which made it a true wild west.

However, we were already gearing up to release the next set of features. We wanted to be able to livestream the vote counting on the day of the elections for our users. I unfortunately fell sick and hence 20% of the team had to go on sick leave. The changes were made and it was ready to launch.

![](https://i.imgur.com/p6DuuA0.png)
_A poster was designed and circulated for the same._

### Election day

3rd August 2024. The day was finally here. It was an electric environment in the campus. Votes were being cast, seniors were forcing juniors to come out of their rooms and go vote, prayers were being prayed.

Our HQ was ready and setup. Polling agents were instructed to send us live updates as the countings happened. We would quickly make those changes live.

![](https://i.imgur.com/NKo7oi0.png)

We crossed over 15k views by the time the results were declared. There were absolutely no hiccups this time and everything went as smoothly as it could have.

### Conclusion

The entrance poll results and the actual results were very close.

![](https://i.imgur.com/p9mGLXz.png)

Appreciations were flowing in from alumni, batchmates, contestants, juniors. One particular message will always stay close to my heart:

![](https://i.imgur.com/nJk5nNA.png)

This was from a senior who helped us get into development, and be a part of the club that connected us together. In the end, its all about the memories we make along the way.

In conclusion, keep building awesome shit!

![](https://i.imgur.com/K3knzPe.png)

Hail https://www.moodofnits.live/. Hail [GDSC NITS](https://gdscnits.in/).
