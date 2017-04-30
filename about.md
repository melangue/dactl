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

## Some heading 

I'll alert the crew. Sure. You'd be surprised how far a hug goes with Geordi, or Worf. Did you come here for something in particular or just general Riker-bashing? You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Your shields were failing, sir. Well, that's certainly good to know. A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you. And blowing into maximum warp speed, you appeared for an instant to be in two places at once. How long can two people talk about nothing? I recommend you don't fire until you're within 40,000 kilometers. Congratulations - you just destroyed the Enterprise. Worf, It's better than music. It's jazz. Yes, absolutely, I do indeed concur, wholeheartedly! What's a knock-out like you doing in a computer-generated gin joint like this? I can't. As much as I care about you, my first duty is to the ship. Some days you get the bear, and some days the bear gets you.

</div>
