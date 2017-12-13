---
layout: post
title: YAML front matter in posts
tags:
  - jekyll
  - dactl
  - howto
hero: https://source.unsplash.com/collection/345758/
overlay: orange
---

In order to use dactl's post images with overlays you'll need to learn how to set them. You do that in post's YAML frontmatter and I'll show you how.
{: .lead}

## YAML Front matter
Each Jekyll post starts with YAML Front [^1]. For example, this is how this post would look like if I wanted to use all of the options:
<!–-break-–>

~~~yaml
---
layout: post
title: 'How do I write posts in dactl Jekyll theme?'
tags:
  - jekyll
  - dactl
hero: /assets/hero.jpg
overlay: purple
link: https://link-to-some-page.com
---
~~~

As you can see it has a couple of options, some of them are required by Jekyll (layout, title), some are required by dactl theme when set to default hero layout (hero) and some are completely optional (overlay, link).  
I'll go through what each option means, what it affects and how to use it.

### Layout
This just tells Jekyll to use post layout.
~~~
layout: post
~~~

### Title
Title of the post as seen at the top of this post.
```yaml
title: 'How do I write posts in dactl Jekyll theme?'
```

### Tags
This is how you assign multiple tags to a post.
```yaml
tags:
  - jekyll
  - dactl
```

### Hero image
See that nice picture from unsplash at the top of this page? This is how you set it's source.
```yaml
hero: /assets/hero.jpg
```

### Hero overlay
You can choose the color of the image overlay here.
Currently you can choose from five colors: purple, red, green, blue, orange.
If you don't choose a color it will default to a light black.
```yaml
overlay: purple
```

### Link post
I've included link post functionality (a'la [Daring Fireball](http://daringfireball.net/)) in dactl.  
If you put webpage's address in that field then that post becomes a link post.  
Title of that post (on blog page only) becomes a link to the webpage you set the address to. To access the content of the post you need to click on 'Read more' link. To access a link post content in layout with titles only you need to click a meta link which shows up between date and tags.
```yaml
link: https://link-to-some-page.com
```

[^1]: Everything in between those two `---`
