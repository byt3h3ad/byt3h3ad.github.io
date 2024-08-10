---
title: "Server-sent events in Go"
description: "What are server-sent events and where do you see them everyday?"
date: "25 July 2024"
---

Last week I came across this tweet while scrolling my twtr -

<a href="https://x.com/not_salgaonkar/status/1812753305174462641" target="_blank">![](https://i.imgur.com/SqluSKp.png)</a>

This was new to me. I had never come across server-sent events before. So I did what everyone else on twtr was doing - I _implemented it from scratch in ~C~ Go_.

## What is SSE? Why do we need it even?

In case you haven't realised it yet, I am a big time foodie. So I will use another restaurant analogy today. 

Imagine you go to your fav next door dineout. The waiter there knows you well, he takes your order while you sit scrolling your phone. They know how much you love your food, and so they give you updates that your appetiser is almost ready, the main course is being plated, the dessert is getting prepared and so on. But one day your fav waiter is absent and instead you have a new joinee. You have to keep asking them to check if the food is ready.  

Server-Sent Events (SSE) work the same way for web applications. Instead of your computer constantly asking the server if there's any new information, the server sends updates to your computer automatically. This way, you get the latest information, like new messages or updates, without having to keep refreshing the page, much like you don't have to keep calling the waiter to check on your food.

It is quite similar to WebSocket. The server keeps a persistent connection with the client and sends the events as they happen in real time to the client. The key difference is that it is a uni-directional connection, allowing only text data to be sent from the server. It is not a separate protocol, just plain HTTP.

![](https://i.imgur.com/YAZHPkf.png)
*Source: https://ably.com/topic/server-sent-events*

This is really useful for scenarios when you need to receive a stream of data from the server: live scores, social media notifications and live news feeds, chat applications etc.

## How stuff works

SSE consists of two components -

1. An `EventSource` interface in the browser, which allows the client to subscribe to events.

2. The “event stream” data format, which is used to deliver the individual updates.

To start receiving messages, we just need to call the EventSource constructor with a url to the SSE endpoint. The browser will connect to the endpoint and keep the connection open, waiting for events. There’s no need to worry about negotiating the connection, parsing the event stream, or deciding how to propagate the events. All the implementation logic is handled for us.

The event stream protocol describes the standard plain-text format that events sent by the server must follow in order for the EventSource client to understand and propagate them. The server has header `Content-Type: text/event-stream`. Events can carry arbitrary text data, an optional ID, and are delimited by newlines. The ID is useful in case of an unexpected disconnection. EventSouce automatically remembers the last received message ID and will automatically send a Last-Event-ID header with that ID when trying to reconnect.

## Implementation

![](https://i.imgur.com/leOSDCL.png)
*https://github.com/byt3h3ad/go-sse*

I created a simple HTTP server in Go that sends a message with the time every 2s, 10 times, and then closes the connection. Similarly, the token streaming in AI chatbots can be mimicked with characters being generated and streamed in realtime from the server to the client.

### Further reading

- https://html.spec.whatwg.org/#server-sent-events
- https://www.youtube.com/watch?v=4HlNv1qpZFY
- https://javascript.info/server-sent-events
- https://ably.com/topic/server-sent-events
- https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events

In case you're still here, if you're someone who thinks this is some cool shit and arouses your curiosity, and in case you aren't on twtr, do yourself a favour and be active on it. Follow builders, get inspired, build your own stuff. Stay away from the negativity and you'll realise how powerful and useful the platform is.

Brickbats and bouqets at [tg](https://t.me/byt3h3ad) or [twtr](https://home.byt3h3ad.workers.dev/twitter).

