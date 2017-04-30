---
layout: post
title: 'Notice blocks'
tags:
  - dactl
  - howto
hero: https://source.unsplash.com/collection/345758/
overlay: purple
---

By default dactl has a couple of special classes which will turn a paragraph into a notice block when added to it. Read on for information on how to use it.
{: .lead}

## How to create a notice block
Creating notices from your paragraphs works the same way as creating [leading post paragraphs](LINKILYNKI).  
You need to add a correct class **after** the paragraph:
<!–-break-–>
~~~
Sea otters [hold each other’s paws](https://www.youtube.com/watch?v=eTvX-CkfqRo) when they sleep so they don’t drift apart.  
That is a fact, look it up on Wikipedia if you don't believe me.
{: .notice}
~~~

## Available options
### Regular notice block
`{: .notice}`

Sea otters [hold each other’s paws](https://www.youtube.com/watch?v=eTvX-CkfqRo) when they sleep so they don’t drift apart.  
That is a fact, look it up on Wikipedia if you don't believe me.
{: .notice}

### Alert notice block
`{: .notice-alert}`

If one examines the capitalist paradigm of context, one is faced with a
choice: either accept textual narrative or conclude that reality serves to
exploit the Other.
{: .notice-alert}

### Success notice block
`{: .notice-success}`

If one examines the capitalist paradigm of context, one is faced with a
choice: either accept textual narrative or conclude that reality serves to
exploit the Other.
{: .notice-success}

## Multi-paragraph notice blocks
The easiest solution I found to wrapping more than paragraph into a notice is just inserting it into a markdown-enabled `div` tag, like this:
```html
<div class="notice" markdown="1">
If one examines the capitalist paradigm of context, one is faced with a
choice: either accept textual narrative or conclude that reality serves to
exploit the Other.

A number of dematerialisms concerning textual objectivism
exist. However, if textual narrative holds, we have to choose between
precultural theory and the conceptual paradigm of consensus.
</div>
```

Which, when processed by kramdown, shows up like this:
<div class="notice" markdown="1">
If one examines the capitalist paradigm of context, one is faced with a
choice: either accept textual narrative or conclude that reality serves to
exploit the Other.

A number of dematerialisms concerning textual objectivism
exist. However, if textual narrative holds, we have to choose between
precultural theory and the conceptual paradigm of consensus.
</div>
