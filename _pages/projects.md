---
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

		<div class="projects-grid">
			{% for project in site.projects %}
			<a href="{{ project.url | relative_url }}" class="project-card">
				{% if project.featured_image %}
				<div class="project-card__image" style="background-image: url({{ project.featured_image | relative_url }})"></div>
				{% endif %}
				<div class="project-card__content">
					{% if project.status %}
					<span class="status-badge status-badge--{{ project.status }}">{{ project.status | replace: '-', ' ' }}</span>
					{% endif %}
					<h3 class="project-card__title">{{ project.title }}</h3>
					{% if project.subtitle %}
					<p class="project-card__subtitle">{{ project.subtitle }}</p>
					{% endif %}
				</div>
			</a>
			{% endfor %}
		</div>

	</div>
</section>
