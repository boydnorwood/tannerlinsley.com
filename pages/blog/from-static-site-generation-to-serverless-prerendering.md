# From Static Site Generation to Serverless Pre-Rendering

_July 9, 2019_

![Leaves changing from green to red during the fall](https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4050&q=80)

_Photo by [Chris Lawton](https://unsplash.com/@chrislawton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/change?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

## The good, the bad, and the ugly of SSG

2 years ago I created and have since maintained a library called [React Static](https://react-static.js.org). It's a progressive static site generator much like [Gatsby](https://www.gatsbyjs.com/), but less opinionated (and likewise, less magical). If you're interested in learning more about it, you can [watch my presentation about it at JamStack Conf NY 2019](https://www.youtube.com/watch?v=zYHEAcMLjhs).

Writing and maintaining this library has taught me [many reasons why static progressive site generators are great.](https://www.youtube.com/watch?v=zYHEAcMLjhs) But has also presented so many difficulties inherent to their architecture that I didn't see before. Most of the difficulties revolve around a few core ideas:

- **Progressive** static sites are difficult to scale for large amounts of pages and also highly dynamic/frequently updated content. Both of these constraints are difficult pills to swallow when you reach them in an SSG.
- Progressive static sites have a much harder time fitting into content creator and business workflows than dynamic sites. The problems that need to be solved to make these workflows acceptable are very difficult but they are increasingly more important for companies. So much even that [Gatsby](https://www.gatsbyjs.org/blog/2018-07-17-announcing-gatsby-preview/), has even created dedicated products to make the process possible at all.
- The benefits of SSG's are mostly based in speed, simplicity, security, visitor scalability and cost. As SSG's are evolving, they are becoming more complex and introducing new overhead that traditional SSG's never suffered from. Simultaneously, dynamic site technology, especially in the React world is getting faster, more secure and more scalable, thanks to things like serverless functions and smarter CDN's.

## If not progressive static site generation, then what?

Over the last few months, I have been investigating serverless functions as a new tool for scalability and dynamic website generation. I was wondering how serverless functions could compliment static content and eventually found the article: [Serverless Prerendering](https://zeit.co/blog/serverless-pre-rendering) (SPR) from Next.js's blog. The concepts involved are really simple to understand and really resonated with me.

The issues that I was trying to solve with scalability and flexibility could theoretically be solved with SPR, so I dug right in. After a lot of experimentation and discussion in the community, I'm convinced for now that Next.js is the platform that comes closest to my ideals.

## Next.js... Really?

Yes. First of all, I'd like to make it clear that in the world of programming, the worst thing you can do is develop emotional attachment to an implementation detail or means to an end. I originally wrote React Static and used SSG's because they solved a problem for me that other tools didn't. But things change, and tools and ideas evolve. When I am given the opportunity to open my mind and adopt a new technology for the sake of the end product and user, I can't pass it up. This is one of those circumstances.

Next.js is a highly polished product now and I have been extremely impressed with the progress the Next.js team has made towards performance, scalability, cost, etc.

## So what's going to happen to React Static?

In summary, React Static will continue to live on through the great developers and companies that use it. It is to those great individuals that I am handing it off to as successors. If you are interested in owning, sponsoring, or contributing to React Static, head over and [read the RFC](https://github.com/nozzle/react-static/issues/1259)!

## This is just the beginning of a new era for me

I plan on aggressively working on Next.js and it's features for the next little while. I am still very passionate about building fast, SEO and developer friendly websites in React and have no plans of stopping on that front.

## I'm very thankful!

My experience with React Static has been amazing, and even though it's just an open source project, it has felt like a career. I put my heart and soul into it for countless hours simply to help people build better sites in React. I will admit, it's been difficult to move on. I would like to thank everyone who made that possible. Namely:

- Nozzle - My awesome startup that I call home.
- Every site that [has used React Static](https://github.com/nozzle/react-static/tree/master/#sites-built-with-react-static). You made my day, over and over again.
- Every [contributor that graciously donated their time to help me](https://github.com/nozzle/react-static/graphs/contributors). You will be blessed for your time, I guarantee it!

**Thank you all so much!**

Until next time, you can always check out my:

- OSS:
  - [github.com/tannerlinsley](http://github.com/tannerlinsley)
- Videos:
  - [youtube.com/tannerlinsley](http://youtube.com/tannerlinsley)
- Products:
  - [nozzle.io](http://nozzle.io) My Startup!
- Music:
  - [soundcloud.com/ikontower](http://soundcloud.com/ikontower)
  - [soundcloud.com/djlinz](http://soundcloud.com/djlinz)
- Instagram:
  - [instagram.com/tannerlinsley](http://instagram.com/tannerlinsley)
