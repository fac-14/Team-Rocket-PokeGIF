# Team Rocket Readme - PokeGif!

## how did this happen? the whole thing is a bit Farfetch'd.
![dream team](https://media.giphy.com/media/SJ20RExjkWthu/giphy.gif)

The people responsible for wanting to be the very best, like no-one ever was:

- Harry (@harryy27)
- Joe (@thejoefriel)
- Martin (@martingaston)
- Michael (@arrested-developer)

## How do i make pokemons?

1.  Clone this repo
2.  Create an `api.js` file within the workspace
3.  Then plop your own Giphy key into a `giphyApiKey` variable in your `api.js`. We're a secure bunch! **NOTE: Remember to make your API key a string!!!**
4.  Get crack-a-lacking by opening `index.html` in a live server.

## I've done that but I can't find any pokemon on the page?

Simple! Pop in any pokemon you desire into the search function. 
Can't think of one? Then hit our random button and we'll get one for you. Catchin' them all has never been so easy!

While you're at why not see if you're a pokemon? Type in your name and see if you make the cut. 

## i get that, but what's going on here?

Like the glorious fusion between a Shellder and a Slowpoke, our Slowbro of a codebase is split mostly between `logic.js` and `dom.js` files. The heavy lifting of our logic goes through our modular xhr function, which makes an XMLHttpRequest() with two callback functions. We also nest our Giphy API call in a chain after we've finished processing the data from our Pokeapi call. 

Following the challenge last week rather than building a skeleton HTML that we populated with the values, the index.html has an empty pokemon details container, pokemon description container and gif container, which are then populated through the DOM. 

## Talk me through the journey... 

## Planning stage

### Deciding on our idea and APIs
- Keep things simple. Wanted to nail api call functions and DOM, so we decided to work with two APIs that had clear documentation and we felt confident in
- Also after dealing with waterfall functions and abstractions we felt we needed something to get our moods up. 
- Which led us to...
![](https://media.giphy.com/media/I2nZMy0sI0ySA/giphy.gif)


## Set up

### script life
- Putting script in header and using defer
    - Allows the logic file to start running while the actual page loads

### Modular life

![](http://www.electronicbeats.net/app/uploads/2017/03/eurorackcolors-1200x675.jpg)

- Michael and Joe worked closely to get a better sense of how to abstract functions within our DOM file. Examples of this:
    - API request function
    - addNewNode - a function to do the process of adding text elements within pokemon details
    - Also, here's the point when Martin saw we'd created a function called **killChildren** ![](https://i.imgur.com/KaGTM3D.jpg)

### API Security

We created an `api.js` file from the start and used gitignore to mean that it was never pushed to Github or (hopefully) available within our commits.
However this did mean that we needed to share your api.js file separately. It'd be good to think further around how we can do security around something like this. 

## Catching them is obviously your real quest, but what have you also learnt?

### TDD - What TDD?
![TDD](https://media.giphy.com/media/nwErbJbGs6hBS/giphy.gif)
We were huge failures at TDD this week. HUGE. We both couldn't quite work out how to run an asyncronous request through tape and then just stopped doing it completely.

We created a test.html file which was a handy way to console log the requests to check everything was grabbing the right bits. However, on reflection this may be should have been tackled through TDD. Again though, this comes to our confusion over testing asyncronous actions. 

### Everyone loves a dummy
So we could have one pair working on the DOM and the other on the logic from the outset, we created dummy versions of what we expected the request to return. This also provided a useful way to then help formulate our thinking on how we wanted to organise the data we requested and how to link up the Dom and Logic files

In addition, you may see dummy JSON files in our repo. We saved the initial request and then stored this as a separate JSON file that we would then feed in as the URL. This meant we didn't have to keep running actual requests, making coding a bit quicker and preventing risks of hitting API limits! 

### The Design Challenge
We tried to incorporate our design challenge of an 8-grid layout but we started wrestling with this and were pretty intruiged by it - consider our whistles whetted.

To deliver on the challenge you should see that our elements adhere to the columns and also the 48px baselines.

We also followed a mobile first methodology this week as we felt searching for Pokemon is the perfect thing to do on your phone. However, it did mean we ran out of time to ensure we followed the design challenge for the desktop version. Primarily this would involve acknowledging the outer vertical gutters. 

We also tried to continue with what we learned in the design challenge last week, using an 8pt system for all sizes and spacing.

### Asynchronous 
There's a lot going on with asynchronous requests - who knew!

### Truly Team Rocket in every sense
![](https://media.giphy.com/media/UV9aclEfDbTmo/giphy.gif)

We do not recommend half of your team being out for a chunk of an afternoon

### Software Architecture
Our architecture and whiteboarding could definitely also be a lot better. We drew it out![](https://i.imgur.com/IXb54Yf.jpg)

But we didn't refer back to it as much as we could and should have done. We probably should have done a review and re-adjusted it (e.g. as we approached our stretch goal of getting the pokemon description with a further api request)

## What's the best pokeman?

Pikachu, obviously.

![pika pi](https://media.giphy.com/media/p6P1eAF4jsN0I/giphy.gif)
