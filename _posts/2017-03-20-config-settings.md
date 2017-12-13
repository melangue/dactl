---
layout: post
title: 'Layout settings and more in _config.yml'
tags:
  - jekyll
  - dactl
  - howto
hero: https://source.unsplash.com/collection/582860/
overlay: red
---

All of the dactl's configurations has to be set in `_config.yml` file. Read on for explanation of all of the features that you can toggle, including configuring the layout.
{: .lead}

I've split dactl's `_config.yml` into two parts. First part should be configured by you, second contains important Jekyll & build settings and you should leave it alone, unless you know what you are doing.
<!–-break-–>

Let's go through each line in the first, configurable part:

~~~yaml
# Base blog settings
blog:
  title                      : dactl
  description                : >
                               this should contain a proper description
# Layout configuration
  logo_path                  : "assets/img/dactl.svg" # path to logo file
  search_path                : # "yourgitusername.github.io"
                               # needed for searchbox in archive page
  hero_layout                : true # turn on hero layout for blog and posts
  hero_placeholder           : "assets/img/generic_hero.jpg" # placeholder for hero
  excerpts                   : true # show excerpts instead of full post content on blog page
  inline_footnotes           : true # enable/disable barefoot inline footnotes
  titles_only                : false # titles only on main blog page

# Fonts
font                         : '"Rubik", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif'
load_google_fonts            : 'Rubik:400,400italic,700,700italic'

# Author info
author:
  fullname                  : Your Name
  rss                       : true # generate RSS feed and show it's icon in header
  mail                      : your@email.com # change to your e-mail address
  twitter                   : twitter-user-name
  github                    : github-user-name
  youtube                   : youtube-user-name
  stackoverflow             : stackoverflow-user-name
  disqus                    : dactl # your disqus site name
  google_analytics          : # 'UA-XXXXXXXX-X'
  photo                     : "uploads/me2.png"
  photo2x                   : "uploads/me.png"

baseurl                      : "/dactl/" # the subpath of your site, e.g. /blog/, set to '' in case of hosting on GitHub pages
                                  # i.e. `http://<username>.github.io`
url                          : "" # the base hostname & protocol for your site
~~~

## Base blog settings
* `title` - title of your blog, both in `<title>` tag and in the header.
* `description` - descriptionof your blog, shown in the footer

## Layout settings
* `logo_path` - Path to an .svg image used as logo
* `search_path` - Path to your blog, needed for the DuckDuckGo's searchbar found in Archive page.
* `hero_layout` - true / false - Turn the hero image layout on or off. When turned off you don't need to supply images and overlays in post's YAML front matter and the layout gets slightly adjusted.
* `hero_placeholder` - Path to an image which will be used as a placeholder when there is no hero set for post, optional.
* `excerpts` - true or false - Turn post excerpts on or off. When set to `false` you will see full text content for each post on blog page.
* `inline_footnotes` - true or false - When set to `false` you will turn off Barefoot.js inline footnotes.
* `titles_only` - true or false - When set to true Jekyll will generate blog layout with post titles only. `hero_layout` and `excerpts` are overidden by `titles_only` when it's set to `true`.

## Fonts
* `font` - Name of the font family used for theme's typography.
* `load_google_fonts` - Choose what font family should be loaded, served by [google fonts](https://fonts.google.com).
In order to change the font you need to supply it's name and variants - font weight of 400 and 700 are required.  

## Author info
* `fullname` - Your name and surname or nick, used throughout the blog.
* `rss` - true or false - Turn the RSS feeds on or off.
* `mail` - Your e-mail address.
* `twitter` - Your twitter username
* `github` - Your Github username
* `youtube` - Your YouTube username
* `stackoverflow` - Your Stackoverflow username
* `disqus` - Your Disqus site name.
* `photo` - Avatar or photo of you, used on About page.
* `photo2x` - Same as above but in higher resolution.

## Google Analytics
* `google_analytics` - Supply your Google Analytics ID here, if you want to use it.
* `baseurl` - Subpath of your blog, e.g. `/blog`, leave it empty in case of hosting on Github pages - `yourusername.github.io`
