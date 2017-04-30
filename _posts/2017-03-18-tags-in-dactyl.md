---
layout: post
title: 'Tags in dactl'
tags:
  - dactl
  - howto
hero: https://source.unsplash.com/collection/427433/
overlay: green
---

Tags are built using Jekyll's native categories functionality and you need to add them manually as files before using them in posts. Read on to learn how.
{: .lead}

## How to add a new tag
Please make sure to do the following for each tag:
<!–-break-–>

Create a .md file within `_my_tags` folder with the name of your category, e.g. `cool-stuff.md`. This file needs to look like this:

~~~
---
slug: cool-stuff
name: Cool Stuff
description: >
             This is an awesome description of my cool stuff tag which will be display underneath the title of this tag's page.
---
~~~

`slug` is a mandatory field and defines tag's slug, accessible at `yourblog.com/tag/dactl/`, use `-` instead of spaces here.  
`name` is a mandatory field and defines tag's name, e.g. `Cool Stuff`.  
`description` is an optional field, it's visible on tag's page.  
Click [here]({{ "tag/dactl" | relative_url }}) and [here]({{ "tag/howto" | relative_url }}) to see the difference.

## Optional
You can configure the Archive page to show 'Tag box' underneath the search box - this box will contain all of your blog's tags with links to them.
