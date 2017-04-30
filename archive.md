---
layout: page
title: Archive
permalink: /archive/
weight: 5
sitemap:
  priority: 0.9
---

<div class="page">

{% capture page_subtitle %}
  {% include page/searchbox.html %}
{% endcapture %}

{% include page/title.html title=page.title subtitle=page_subtitle %}

    {% for post in site.posts %}

    {% assign category = site.my_categories | where: "slug", post.category %}
    {% assign category = category[0] %}
      {% if category %}
        {% capture category_content %}<a class="label" href="{{ category.url }}">{{ category.name }}</a>{% endcapture %}
      {% endif %}

  	{% capture month %}{{ post.date | date: '%m%Y' }}{% endcapture %}
  	{% capture nmonth %}{{ post.next.date | date: '%m%Y' }}{% endcapture %}
  		{% if month != nmonth %}
  			{% if forloop.index != 1 %}
  			</ul>
  			{% endif %}
  			<h1>{% include utils/date_custom_short.html date = post.date %}</h1>
  			<ul class="related-posts">
  		{% endif %}

      {% include page/post-list-item.html %}

      {% comment %}
      tagi w archiwum <span class="post-tag right">{{ tags_content }}</span>
      {% endcomment %}

     {% endfor %}
  	 </ul>


  {% comment %}
    {% include utils/tag-box.html %}
  {% endcomment %}


</div>
