---
layout: post
title: Post excerpts and leading paragraphs
tags:
  - dactl
  - howto
hero: 'https://source.unsplash.com/collection/261936/'
overlay: blue
published: true
---

By default, dactl's blog layout displays post excerpts which are leading paragraphs as well. This requires some manual work on your part when writing a post but don't worry - it's really easy. Read on for more info.
{: .lead}

## Post excerpts
First, let's see how this and the above paragraph looks like in markdown:
<!–-break-–>
```markdown
By default, dactl's blog layout displays post excerpts which are leading paragraphs as well. This requires some manual work on your part when writing a post but don't worry - it's really easy. Read on for more info.
{: .lead}

## Post excerpts
First, let's see how this and the above paragraph looks like in markdown:
<!–-break-–>
```

As you can see above there are two things which are visible only in the post's markdown version. You won't see them here because they got processed by Jekyll and 'thrown out' while generating html version of this post.

`{: .lead}` inserted on a new line after a paragraphtells Jekyll's markdown processor (dactl uses [kramdown](https://kramdown.gettalong.org/)) to add class `.lead` to the above `<p>` tag which results in a leading paragraph.

`<!--break-->`, inserted on a new line after `{: .lead}`, tells Jekyll that it should ['break'](https://media.giphy.com/media/l46CxpYSFoFtN11ug/giphy.gif) the post content at this point, so everything above it will become a post excerpt.

The order is important here - `<!--break-->` comes **after** `{: .lead}` and because of that the leading paragraph/ post excerpt has it's font enlarged both on blog and post pages.
{: .notice-alert}
