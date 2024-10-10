---
layout: NickNotes
title: Nick Kaiser Lectures 
subtitle: Notes on Astrophysics, Cosmology and General Relativity.
description: An online archive of lectures given by Nick Kaiser on astrophysics, cosmology and general relativity.
featured_image: /images/hastat.jpg
---

![](/images/Nick.jpg)

## Preface

Before Nick passed away, in addition to enjoying his retirement, he was also organizing his lecture notes. He had expressed to me that he hoped to sort them out and make them available to the public online. In particular, he felt that the world might need another textbook on General Relativity.

Although he obviously intended to present a more polished version, unfortunately we never had the chance to see it. These lectures reflect his continuous reflection and refinement, from his time in Toronto to Hawaii, and finally to Paris.

As Nick's last student, I fully understand his wishes and the value of his lectures. But I hope I won't be his last student, so I'm sharing all of his lecture materials with you. This is the online archive of Nick's lectures and I will do my best to maintain these notes.

**Disclaimer**: I would like to note that I have previously tried to contact people with more resources to suggest the creation of a permanent Nick Kaiser online archive. However, having seen no progress for more than a year, it seems that there may be challenges beyond what I can imagine in achieving this. I have therefore decided to maintain these talks on my own website. I would be delighted if any institute would see this statement and continue my role of maintaining these lectures (in an official way), I would be most grateful.

--- 

<section class="intro">

	<div class="wrap">

		<h1>{{ page.title }}</h1>
		<p>{{ page.subtitle }}</p>

	</div>

</section>

<section class="portfolio">

	<div class="wrap">

		{% for project in site.NickKaiserNotes reversed %}

		<div class="portfolio-item">

			<a class="portfolio-item__link" href="{{ project.url | relative_url }}">
				<!--
				<div class="portfolio-item__image" style="background-image: url({{ project.featured_image | relative_url }});">
				</div>
				-->

				<div class="portfolio-item__content">
					<div class="portfolio-item__info">
						<h2 class="portfolio-item__title">{{ project.title }}</h2>
						<p class="portfolio-item__subtitle">{{ project.subtitle }}</p>
					</div>
				</div>

			</a>

		</div>

		{% endfor %}

	</div>

</section>

--- 
