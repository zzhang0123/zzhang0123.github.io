---
layout: default
title: Projects
subtitle: Research projects and scientific work
description: Ongoing and past research projects in cosmology, radio astronomy, and astrophysics.
featured_image: /images/demo/cosmology.jpg
permalink: /projects
---

<section class="intro">
	<div class="wrap">
		<h1>{{ page.title }}</h1>
		<p>{{ page.description }}</p>
	</div>
</section>

<section class="single">
	<div class="wrap">

		<div class="projects-list">
			{% for project in site.projects %}
			<a href="{{ project.url | relative_url }}" class="project-feature {% if project.status == 'coming-soon' %}project-feature--coming-soon{% endif %}">
				{% assign proj_img = project.card_image | default: project.featured_image %}
				{% if proj_img %}
				<div class="project-feature__image">
					<img src="{{ proj_img | relative_url }}" alt="{{ project.title }}" loading="lazy">
				</div>
				{% endif %}
				<div class="project-feature__body">
					{% if project.status %}
					<span class="status-badge status-badge--{{ project.status }}">{{ project.status | replace: '-', ' ' }}</span>
					{% endif %}
					<h3 class="project-feature__title">{{ project.title }}</h3>
					{% if project.subtitle %}
					<p class="project-feature__desc">{{ project.subtitle }}</p>
					{% endif %}
					<span class="project-feature__cta">View project &rarr;</span>
				</div>
			</a>
			{% endfor %}
		</div>

	</div>
</section>
