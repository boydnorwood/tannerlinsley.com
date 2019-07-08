# The similarities between open source work and running a tech startup.

_February 7, 2018_

![](https://cdn-images-1.medium.com/max/2560/1*Nt9EPqMKTAQewJ5BlOGpig.jpeg)

If you have every written an open source library of any significant size, you know there is so much more than simply publishing your brilliant code to Github and expecting people to use it. You’ll also quickly find out why some call open source maintenance a full time job. Once you’ve done this a few times, you start to understand a lot more about yourself and how you might apply the things you learn during this process to running a tech startup. So what does it take to build a successful open source library?

### Assessing the Pain

As a **passionate user** in the open-source world, I am evaluating and using open source projects and solutions literally every day. I see so many of them so often that I can now quickly and easily spot the trends, warning signs and promising characteristics just by looking through a library’s documentation, source code, and issues. This skill becomes indispensable when addressing the pain that other developers might be feeling. How much does this problem hurt? Is this pain wide spread? How many other libraries are attempting to solve this problem? The only way to know this is to be well versed in the open source marketplace. So naturally, **as a frequent customer and explorer of my market, I am better fit to identify solvable problems in it.**

### **Product-Market Fit**

Simply knowing that a pain exists in the open source world is a very important first step, but it’s just that… a first step. In this world (especially the Front-end corner of it, where I most frequently find myself), there will forever be a constant onslaught of opportunities to improve processes and make development easier. It’s no wonder a new javascript framework is released every week, or a new state manager announced for React every day! This constant innovation can sometimes feel unique to just the javascript world and those in it, but if anyone were to peek their head out for just a second, they would quickly realize that constant innovation is happening absolutely everywhere around them.

With all of this noise, it’s a very real challenge to identify if a problem is worth solving or not and if the solution I have in mind will be accepted by those in the community. I know too well how easy it is to assume everything should be magically turned into an open source library, but **knowing when to pursue an idea or when to pass is easily half the battle**. To help in this quest, I always self-prescribe this advice:

- Be your own customer for a day. Imagine your library (or product) is finished and works well enough to use. How often would you use it? Does it, in fact, appease the pain you thought it did? Was it worth the work you put into it?
- Survey, survey, survey. Ask your peers, post in forums, be hypothetical. Research is your best friend. It can quickly identify your own biases and assumptions about your “amazing” product before you will even think to.
- Research. Be absolutely certain that you are seeing all of the angles of the problem. Play devil’s advocate from the perspective of other libraries and developers. Would it be easy for one of your competitors to solve this problem? How long would it take them? Would they even want to?

### Execution & Integration

Implementation. It’s very hard, which is what makes it insanely fun, at least for me! Actually realizing my idea into something tangible and usable is both exciting and intense and can sometimes require a lot of architecture decisions, rewrites, and time. I think its commonly known by software developers alike that its normal to multiply a delivery expectation by 3, then do it again! Technology is hard, and no one said that writing an open source library was any easier. There are universal concerns I have learned to consider like **design, user experience, cost, flexibility, durability, use cases, maintenance, appearance, etc.** After all, this is a developer _product._ These are just a few things among many that make any product great, including open source software.

Integration is also key to fitting your library snuggly into it’s correct place in the open source world. I am always making decisions on what framework I will support (if any), and the level of abstraction my libraries will provide to my users. If I plan on a library being an integral piece of my users software stack, I always make the best effort to have it play nice with the other technology they actively use and care about.

### Marketing

If you’re in the Front-end developer community, you’ve probably heard of React, Redux, Angular, Vue, and D3. These are some of the easiest examples of popular libraries that came to my mind in only 5 seconds. These libraries didn’t just magically appear at the top of Github over night, though. There was, without a doubt, a **massive amount of invisible work that went into marketing these libraries**. They possibly weren’t even the best solutions available to solve a problem when they were first released. So, what helped get them where they are? **Marketing**. Despite that I may feel like I’m just building a small javascript library, I’m actually building a **product,** not just an small piece of open source software.

> The existence of a great product is not enough for it to be a success.

Any library you may set out to build needs to be **persuasive, attractive, and easy.** Here are some things I consider for myself when marketing a library:

- Logos, Design and Aesthetic. You’d be surprised what the [simplest emoji logo can do for a brand](https://github.com/paypal/downshift/)!
- Documentation. Code is not something anyone can peek at and immediately know exactly how to use it. There will always be some amount of learning involved with new tools and it’s important to **educate your users to productivity as fast as possible**!
- Public Relations. If you want people to know about your library, you’re going to have to show them. You can’t expect people to stumble on it for themselves in the beginning. Blog posts, forums, and basically anywhere your market is experiencing the problem you solve should be a daily destination. Show them how to use it. Demonstrate its power and simplicity. Work hard to convince influencers that your solution is beneficial to what they’re doing and hopefully they will repay the favor!

### Support

Congratulations! You made it! You’ve built and released your open source library and you’re proud of it! It has amazing docs, a great logo, it’s lean and scrappy and already making the world a better place!

> Until it’s not…

Maybe you forgot a semi-colon or didn’t cover an edge case. Maybe you zoned out during that security presentation at your last meetup or didn’t make some part of your solution 100% customizable to someone’s liking. Whatever it is, you’re going to have problems, and your users are quickly going let you know about it. Usually the feedback you get is polite and nice (considering that using open source is \$FREE.99), but the world is not a perfect place, and neither are developers.

The more your library grows in popularity, the more support you’re going to need for it. You might even petition the help of some of your most passionate early adopters to help you out. Either way, the inevitable and sometimes difficult interactions you’ll have with some of your users are going to test your patience and demeanor. If there is any point during your open source journey where you will question why you even started in the first place, it’s going to be during times of support. Patching endless bugs, writing boring migration guides, doing damage control, and appeasing disgruntled users are things that not nearly as exciting or as fun as trail blazing with cutting-edge, innovative code. It’s probably not what you envisioned in the beginning, but these seemingly boring and tedious actions rightfully comprise a large portion of the “non-sexy fundamentals” that will ensure the long term viability of your library by keeping your users coming back for more. If you can succeed here, you will be rewarded with a good brand that is truly loyal to its product and users.

### Expansion and/or Exit

Eventually and hopefully, things might settle down and you may even briefly bask in the sunlight of your hard work and efforts. You can feel good about yourself with the Github stars and uplifting feedback you’ll hear from your users. People might even begin to ask if your library could do more for them. They may request new features from your library that could help them tackle related (or sometimes new) problems. This is a great sign! It means you have succeeded! You have built a library that helps people in their daily lives to be more efficient and happier with their job. But it’s still up to you to know where to go next. Will you expand the features of your existing library? Will you build another? If you do, who will take care of this one?

### 🎶 It’s business. It’s business time! 🎶

If you haven’t caught on already to my very obvious foreshadowing, I’ll tell you now that building and maintaining an open source library is so very similar to running a technology startup. The challenges and rewards involved in this recipe are almost identical in nature, with only a few changes to the ingredients and the return on investment.

In **both** scenarios:

- The feedback loop can be as fast as we make it
- The problems can be as small or as large as we choose
- The cost of investment and failure all come down to the value of the time you (and your team) are willing to invest
- The skills you learn in either process are indispensably valuable.
- The journey is both fun and **extremely addicting.**

The core differences:

- Scale. Business tend to tackle a larger problem, but this isn’t always the case (and doesn’t have to be).
- The currency. Both technology startups and open source libraries aim to solve a problem and achieve steady growth within their community. The former just happens to exchange money, while the latter is geared more towards personal portfolio and branding.
- Open source libraries can occasionally become businesses themselves (and many have) by offering services, paid versions and through corporate or developer sponsorship. Whether this is a good reason to start an open source library is naturally controversial.

In the end, the skills needed to build both an open source library and a technology startup don’t seem all that different. The former may be a microcosm of the latter, but it can definitely teach us a lot about ourselves and how we may handle running a tech startup.

So, go try it! There are new libraries being built ever day by people just like you. More than likely you offer a unique perspective to the problems you experience every day and can use that perspective to both practice these skills, learn more about yourself, and make the world a better place.

Just be aware of the risks. Entrepreneurship is highly addictive 😉.

If you like to use or build open source software, let’s be friends! I’ve written and maintained libraries like `react-static`, `react-table`, `react-form`, `react-move`, and `chart.js`, all while co-running a startup called [Nozzle](https://nozzle.io). I would be more than happy to chat and help you in your own open source endeavors. Good luck!
