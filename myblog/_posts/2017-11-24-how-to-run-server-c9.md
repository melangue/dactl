---
layout: post
title:  "How to run jekyll using c9??"
date:   2017-11-24 19:07:05 +0000
categories: jekyll update
---

{% highlight bash %}
$ jekyll serve --host $IP --port $PORT --watch
{% endhighlight %}

When your new post is not availalbe in your server, you should check some things.
- The post is not placed in the `_posts` directory.
- The post has incorrect title. Posts should be named `YEAR-MONTH-DAY-title.MARKUP` (Note the extension too.)
- The post's date is in the future. You can make the post visible by setting `future: true` in `_config.yml` (documentation)
- The post has `published: false` in its front matter. Set it to true.
- The title contains a `:` character. Replace it with `&#58`.

these tips are originally found in [here][jekyll-make-new-post]

[jekyll-make-new-post]: https://stackoverflow.com/questions/30625044/jekyll-post-not-generated

