---
layout: page
title: About
permalink: /about/
published: true
---

<div class="page" markdown="1">

{% capture page_subtitle %}
<img
    class="me"
    alt="{{ author.name }}"
    src="{{ site.author.photo | relative_url }}"
    srcset="{{ site.author.photo2x | relative_url }} 2x"
/>
{% endcapture %}

{% include page/title.html title=page.title subtitle=page_subtitle %}

## Glad you're here!

Hi, I am Bikram. A biologist turned software engineer. I am from Tezpur, Assam. Currently living in Bangalore.

I am a natural introvert. But I have cracked the formula for floating around that line between introvert and extrovert. 

Call me for a game of cricket or a run, I am always ready. Party, travel? Let me think...


I specialise in web development. I would love to work on any interesting (or challenging, that's what they say) engineering problem, any domain, any stack. Checkout my skills here.

From 2020, I am starting to plan out my year. Here are my goals for the year:

{% comment %} add a x  between [] to mark as complete {% endcomment %}

- [ ] &nbsp; Pass Google Mobile Web specialist certification (first half).
- [ ] &nbsp; Run a half marathon (first half).
- [ ] &nbsp; Play an organized leather ball tournament.
- [ ] &nbsp; Contribute to at least 1 machine learning codebase.
- [ ] &nbsp; Contribute to 4+ open source react projects.
- [ ] &nbsp; Contribute to 2+ open source typescript project. Declaration file, etc...
- [ ] &nbsp; Write 1+ dart application.
- [ ] &nbsp; Finish in top 30 in a CP event, or score 1800+ rating on hackerEarth.
- [ ] &nbsp; Weekly tech blog, Bi-weekly life blog.
- [ ] &nbsp; Montly Community give back. Its a small give back thing we were planning to start.

</div>
