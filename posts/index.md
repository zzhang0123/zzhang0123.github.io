---
layout: default
title: All Posts
subtitle: And some notes to Share
description: This space serves as my blog, where I share informal writings, ideas, and reflections on a variety of topics.
featured_image: /images/MontBlanc.jpg
---

<section class="intro">

	<div class="wrap">

		<h1>{{ page.title }}</h1>
		<p>{{ page.subtitle }}</p>

		<hr style="margin: 10px 0;">
		{% if page.description %}
		<p style="font-style: italic;">{{ page.description }}</p>
		{% endif %}

	</div>

</section>



<section class="blog">
  <div class="wrap">
    {% for post in site.posts %}
    <div class="blog-post">
      {% if post.featured_image %}
      <a href="{{ post.url | relative_url }}" class="blog-post__image" style="background-image: url({{ post.featured_image | relative_url }});"></a>
      {% endif %}
      <div class="blog-post__content">
        <h2 class="blog-post__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="blog-post__subtitle">{{ post.date | date: "%B %d, %Y" }}</p>
        {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>{% endif %}
        <a href="{{ post.url | relative_url }}" class="button">Read more</a>
      </div>
    </div>
    {% endfor %}
  </div>
</section>




