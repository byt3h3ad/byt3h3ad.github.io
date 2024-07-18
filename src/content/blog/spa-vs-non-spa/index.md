---
title: "SPA this, SPA that, but what is SPA"
description: "SPA vs Non-SPA, what's the difference?"
date: "19 July 2024"
---

Single Page Applications are said to bring in all sorts of benefits like dynamic user interactions, fast af load times, etc.

But what are SPAs? How do they work? Do you need a SPA?

To understand all this, we'll consider the most popular example used to explain APIs, dine in restaurants!

But first...

## What are non-SPAs?

If you're not using SPA, you're likely using _server-based routing_. So coming to the restaurant now, what happens is that you go to the restaurant, and to order food you now -

1. Ask the waiter for your order.

2. Wait for the cook to prepare your dish.

3. Receive the ready dish in a shiny new plate.

This is how all websites work when you first visit them. You ask for what you want (visiting a URL like https://x.com/home), wait for the server to get back to you (loading spinner), then enjoy your "meal" once it's ready (the page is done loading).

Now, when you make another order, the same thing repeates again -

1. Ask the waiter for a new dish.

2. The old plates are taken away.

3. Wait for the meal to get prepared.

4. Recieve a new plate with the new dish ready.

Do you see the difference here? You have to **give them the old plates and then you get new plates in it's place**. That is why a loading bar appears when you go to a new page in your website. Whenever you click a link, the browser will remove everything from the page and re-constructing the page from scratch, even if its not really needed as some parts of the page are the same.

### Isn't that... bad?

Not really, not anymore. Modern broswers sprinkle in their own set of optimisations that help with the most common issues that you might think might be happening -

1. HTML is super cheap to load and render

   Even though the browser is "re-painting" the page from scratch every time, it only takes a few milliseconds to load that HTML skeleton. The truly expensive bits are the styles, scripts, and images the browser needs to fetch, which leads us to...

2. Shared resources don't need to get re-loaded

   For instance, say every page pulls in the same CSS file: `<link rel="stylesheet" href="styles.css">`. When you click another link that also pulls this CSS, the browser's like "oh, I loaded this already! I'll just use that and apply it to the page." The same goes for images and fonts as well. This is all thanks to [caching](https://www.youtube.com/watch?v=3XkU_DXcgl0).

So the actual loading of these shared resources isn't a problem. But what about painting those resources to the page over and over again? This brings us to...

3. The next page only appears when it's ready

   Back in the day, there was a risk you'd see a flash of white nothingness between "clearing the plate" and "receiving the new one." But modern browsers have pretty much resolved this. Web browsers now wait for the signal that the next page isn't just "done loading," but is also ready for you to view and interact with. Think of this like bringing out your plate when it's ready to eat, instead of bringing you a plate of ingredients you have to assemble yourself. This especially helps out pages that rely on blocking resources like JavaScript to render everything on the page. This is called [paint holding](https://developers.google.com/web/updates/2019/05/paint-holding).

> Disclaimer: The browser won't always wait for the next page to be interactive before showing it; It'll still show the half-finished page if you're on a slow internet connection and the browser decides it's waited too long.

## Enter... single page apps

Let's revisit that restaurant example from before. When you first visit a site using the SPA approach, everything works pretty much the same:

1. Ask the server for the food you want.

2. Wait a moment for the dish to get prepared (browser loading spinner)

3. Receive your finished plate once it's done (the page is done loading)

Now the interesting part comes when you go back for seconds. When you click a link on an SPA, it replaces the typical, server-based routing with clientside routing. In other words, we process all link requests using JavaScript we wrote ourselves, instead of sending those requests to the server right away.

```html
<a href="/new-page">hello, new page</a>
<script>
  document.addEventListener('click', (event) => {
       if (
         // if you clicked on an A-nchor tag (link)
         event.target.tagName === 'A' &&
         // and you're going to a page on this domain
         event.target.origin === location.origin
       ) {
         // don't ask the server for that resource!
         event.preventDefault()
         // instead, we'll go fetch the resource ourselves
         const response = fetch('https://hello-world.com/new-page')
         // ...convert that response to something we can work with
         const htmlString = await response.text()
         const page = new DOMParser()
           .parseFromString(htmlString, 'text/html')

         // ...and do something with that desert element
         // ex. append desert to our "plate" in the DOM
         document.querySelector('.my-plate').appendChild(page)
       }
     })
</script>
```

This is the super-simplified crux of an SPA: you never truly "leave" the page you started on. Instead, you intercept all future requests (link clicks) and handle the fetching yourself. You'll often do this using the fetch API native to all modern browsers.

SPAs and clientside routing are like a buffet. Instead of ordering your meal and waiting for it to get prepared, you can get out of your seat and grab that pre-prepared food yourself!

### Two Key benefits to this approach

- Load-time efficiency can go up. "can" because of all the serverside routing optimisation mentioned previously (which may cancel out any performance gains). But there is a noticeable difference for resource-hungry frameworks like React, Vue, and Svelte. All of these use some form of clientside routing to keep JavaScript load times to a minimum.

- You can now build dynamic, app-like interactions. Since you're fully in control of loading new content and applying it to the page, you can pull off all sorts of CSS trickery like cross-fades, pop-up modals, tab sliders, and more.

### However, all is not well

Although SPAs seem like the "silver bullet" for any website, there's a case to be made for either approach.

- The most obvious win for server-side routing is, well, it's just simpler. No need to write and maintain all those click listeners; just let the browser do the serving for you. Yes, you'll often use a framework-specific library for SPAs like React Router, but learning and updating JS libraries is always more overhead.

- The second win for server-side is no accessibility worries. When you handle all the routing clientside, you run the risk of hurting screenreader and keyboard experiences. For instance, you'll need to alert screenreader users that new content has appeared on the page whenever they click a link. And for keyboard-ists, you need to make sure their focusing the right element when something new swipes into view.

## Bonus for making it this far

### Server-side routing

1. I go to a page `https://example.com/hello-earth`. The server sends me the page:

   ```html
   <html>
     <body>
       <header class="some class"></header>
       <section class="some other class"></section>
       <main class="example">hello world</main>
       <footer class="brand new class"></footer>
     </body>
   </html>
   ```

2. I request a new page https://example.com/hello-mars. The browser clears the screen and starts afresh:

   ```html
   <html></html>
   ```

3. Server sends back the new page:

   ```html
   <html>
     <body>
       <header class="some class"></header>
       <section class="some other class"></section>
       <main class="earth">hello earth</main>
       <footer class="brand new class"></footer>
     </body>
   </html>
   ```

### Client-side routing

1. I go to a page https://example.com/hello-earth. The server sends me the page:

   ```html
   <html>
     <body>
       <header class="some class"></header>
       <section class="some other class"></section>
       <main class="earth">hello earth</main>
       <footer class="brand new class"></footer>
     </body>
   </html>
   ```

2. I fetch the new page https://example.com/hello-mars and apply some javascript magic to replace the only different node:

   ```html
   <html>
     <body>
       <header class="some class"></header>
       <section class="some other class"></section>
       <main class="mars">hello mars</main>
       <footer class="brand new class"></footer>
     </body>
   </html>
   <script>
     const fetchMars = () => {
              // go fetch Mars from the buffet
              const response = fetch('https://example.com/mars')
              // convert that response to something we can work with
              const htmlString = await response.text()
              const mars = new DOMParser()
                 .parseFromString(htmlString, 'text/html')

              document.body.replaceChild(
                 // 1. select mars from the new page
                 mars.querySelector('.mars'),
                 // 2. remove earth from the current page
                 document.querySelector('earth'))
           }
   </script>
   ```
