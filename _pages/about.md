---
layout: page
custom_hero: true
title: Zheng Zhang
subtitle: I do physics and cosmology (and ask a lot of questions about the Universe)
description: "Postdoctoral researcher in cosmology at the University of Manchester. Working on 21cm intensity mapping, foreground science, and Bayesian inference for next-generation radio telescopes."
featured_image: /images/me/hiking3.jpg
permalink: /
mermaid: true
---
<div class="about-hero">
  <div class="about-hero__portrait">
    <img src="/images/me/zzhang1.jpg" alt="Zheng Zhang">
  </div>
  <div class="about-hero__text">
    <h1>Zheng Zhang</h1>
    <p class="about-hero__subtitle">{{ page.subtitle }}</p>
    <p class="about-hero__description">{{ page.description }}</p>
    <div class="about-hero__links">
      {% include socials.html %}
    </div>
  </div>
</div>

<div class="highlight-projects">
  {% assign highlighted = site.projects | where: "highlight", true %}
  {% for project in highlighted %}
  <a href="{{ project.url | relative_url }}" class="highlight-project-card">
    {% assign card_img = project.card_image | default: project.featured_image %}
    <div class="highlight-project-card__image" style="background-image: url({{ card_img | relative_url }})"></div>
    <div class="highlight-project-card__body">
      <h4 class="highlight-project-card__title">{{ project.title }}</h4>
    </div>
  </a>
  {% endfor %}
</div>

{% if page.pinned_post %}
  {% assign featured = site.posts | where: "url", page.pinned_post | first %}
{% else %}
  {% assign featured = site.posts.first %}
{% endif %}
{% if featured %}
<div class="featured-post-card">
  <span class="featured-label">Latest Post</span>
  <h4><a href="{{ featured.url | relative_url }}">{{ featured.title }}</a></h4>
  <div class="featured-post-meta">{{ featured.date | date: "%B %d, %Y" }}</div>
  {% if featured.excerpt %}
  <div class="featured-post-excerpt">{{ featured.excerpt | strip_html | truncatewords: 35 }}</div>
  {% endif %}
  <a href="{{ featured.url | relative_url }}" class="button">Read more</a>
</div>
{% endif %}

### What I'm doing now

I work at the intersection of observational and theoretical cosmology, with a focus on 21cm line intensity mapping --- tracing cosmic structure and the Epoch of Reionization through the neutral hydrogen signal. I develop methods that are robust to the real complexity of radio data: Bayesian calibration and mapping pipelines, perturbative foreground models, and surrogate frameworks for fast inference. I also model astrophysical foregrounds --- spinning dust emission and the radio synchrotron background excess --- both as science in their own right and as contaminants to be understood. On the theoretical side, I'm drawn to stochastic field theory, topological defects, and the quantum-classical transition.

### Life and Education Journey
I am currently (**Nov 2023 -**) a Postdoctoral Researcher at the University of **Manchester**. Previously, I completed my PhD in Physics of the Universe at the Astroparticle and Cosmology (APC) Laboratory, Université Paris Cité, jointly with the École Normale Supérieure (ENS, Paris), from **November 2020 to October 2023** in **Paris, France**.

Before my PhD, I earned an MSc in Physics from Brown University (**2018–2020, Rhode Island, US**) and a BSc in Applied Physics from Shanghai University (**2014–2018, Shanghai, China**). My earlier education includes high school in **Hai'an** and primary school in Sunzhuang village (**2002–2014**). I was born in 1996.

## Publications

Here is a list of my published and submitted papers to date. Also see my profiles on
[Google Scholar](https://scholar.google.com/citations?user=TemNJQ0AAAAJ&hl=en&oi=sra),
[arXiv](https://arxiv.org/a/zhang_z_28.html), and
[ORCID](https://orcid.org/0000-0002-9154-2803).

<!-- PUB_SECTION_START -->
<div class="pub-cards">
  <div class="pub-card">
    <span class="pub-badge">11 | 2026</span>
    <div class="pub-title">Joint Bayesian calibration and map-making for intensity mapping experiments</div>
    <div class="pub-authors"><strong>Z.&thinsp;Zhang</strong>, P.&thinsp;Bull, M.&thinsp;Santos, A.&thinsp;Nasirrudin</div>
    <div class="pub-links"><a href="https://doi.org/10.1093/rasti/rzag024" target="_blank">RASTI (2026)</a>; <a href="https://arxiv.org/abs/2509.10992" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">10 | 2026</span>
    <div class="pub-title">Spectral Signatures of Spinning Dust from Grain Ensembles in Diverse Environments: A Combined Theoretical and Observational Study</div>
    <div class="pub-authors"><strong>Z.&thinsp;Zhang</strong>, J.&thinsp;Chluba, R.&thinsp;Cepeda-Arroita, J.&thinsp;A.&thinsp;Rubino-Martin</div>
    <div class="pub-links"><a href="https://doi.org/10.1093/mnras/stag509" target="_blank">MNRAS (2026)</a>; <a href="https://arxiv.org/abs/2601.06270" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">9 | 2026</span>
    <div class="pub-title">A general polynomial emulator for cosmology via moment projection</div>
    <div class="pub-authors"><strong>Z.&thinsp;Zhang</strong></div>
    <div class="pub-links"><a href="https://doi.org/10.1093/mnras/staf2039" target="_blank">MNRAS, 545, 1 (2026)</a>; <a href="https://arxiv.org/abs/2507.02179" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">8 | 2025</span>
    <div class="pub-title">Spectral Properties of Anomalous Microwave Emission in 144 Galactic Clouds</div>
    <div class="pub-authors">Cepeda-Arroita, R. <em>et al.</em> (incl. <strong>Z.&thinsp;Zhang</strong>)</div>
    <div class="pub-links"><a href="https://doi.org/10.1051/0004-6361/202557578" target="_blank">A&A (2025)</a>; <a href="https://arxiv.org/abs/2510.05067" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">7 | 2025</span>
    <div class="pub-title">SpyDust: an improved and extended implementation for modeling spinning dust radiation</div>
    <div class="pub-authors"><strong>Z.&thinsp;Zhang</strong>, J.&thinsp;Chluba</div>
    <div class="pub-links"><a href="https://doi.org/10.1088/1475-7516/2025/03/038" target="_blank">JCAP, 03, 038 (2025)</a>; <a href="https://arxiv.org/abs/2412.03431" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">6 | 2025</span>
    <div class="pub-title">RHINO: A large horn antenna for detecting the 21cm global signal</div>
    <div class="pub-authors">Bull, P. <em>et al.</em> (incl. <strong>Z.&thinsp;Zhang</strong>)</div>
    <div class="pub-links"><a href="https://doi.org/10.1093/rasti/rzaf046" target="_blank">RASTI, 046, 4 (2025)</a>; <a href="https://arxiv.org/abs/2410.00076" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">5 | 2024</span>
    <div class="pub-title">Disentangling the anisotropic radio sky: Fisher forecasts for 21 cm arrays</div>
    <div class="pub-authors"><strong>Z.&thinsp;Zhang</strong>, P.&thinsp;Bull, K.&thinsp;A.&thinsp;Glasscock</div>
    <div class="pub-links"><a href="https://doi.org/10.1093/mnras/stae1070" target="_blank">MNRAS, 530, 3 (2024)</a>; <a href="https://arxiv.org/abs/2403.13768" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">4 | 2022</span>
    <div class="pub-title">Hydrogen Intensity and Real-Time Analysis Experiment: 256-element array status and overview</div>
    <div class="pub-authors">HIRAX Collaboration (incl. <strong>Z.&thinsp;Zhang</strong>)</div>
    <div class="pub-links"><a href="https://doi.org/10.1117/1.JATIS.8.1.011019" target="_blank">JATIS, 8, 1 (2022)</a>; <a href="https://arxiv.org/abs/2109.13755" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">3 | 2021</span>
    <div class="pub-title">A new MWA limit on the 21 cm power spectrum at redshifts~ 13–17</div>
    <div class="pub-authors">MWA Collaboration (incl. <strong>Z.&thinsp;Zhang</strong>)</div>
    <div class="pub-links"><a href="https://doi.org/10.1093/mnras/stab1560" target="_blank">MNRAS, 505, 4 (2021)</a>; <a href="https://arxiv.org/abs/2105.12888" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">2 | 2020</span>
    <div class="pub-title">Deep multiredshift limits on Epoch of Reionization 21 cm power spectra from four seasons of Murchison Widefield Array observations</div>
    <div class="pub-authors">MWA Collaboration (incl. <strong>Z.&thinsp;Zhang</strong>)</div>
    <div class="pub-links"><a href="https://doi.org/10.1093/mnras/staa414" target="_blank">MNRAS, 493, 4 (2020)</a>; <a href="https://arxiv.org/abs/2002.02575" target="_blank">arXiv</a></div>
  </div>
  <div class="pub-card">
    <span class="pub-badge">1 | 2020</span>
    <div class="pub-title">The impact of tandem redundant/sky-based calibration in MWA Phase II data analysis</div>
    <div class="pub-authors"><strong>Z.&thinsp;Zhang</strong>, J.&thinsp;C.&thinsp;Pober, W.&thinsp;Li, B.&thinsp;J.&thinsp;Hazelton, M.&thinsp;F.&thinsp;Morales</div>
    <div class="pub-links"><a href="https://doi.org/10.1017/pasa.2020.37" target="_blank">PASA, 37 (2020)</a>; <a href="https://arxiv.org/abs/2009.09269" target="_blank">arXiv</a></div>
  </div>
</div>
<!-- PUB_SECTION_END -->


## Research Codes

Selected codes I have developed or contributed to, many used in the papers below.

<div class="code-cards">
  <div class="code-card">
    <div class="code-title"><a href="https://github.com/zzhang0123/MomentEmu" target="_blank">MomentEmu</a></div>
    <div class="code-desc">A general polynomial emulator for cosmology via moment projection</div>
    <div class="code-links"><a href="https://arxiv.org/abs/2507.02179" target="_blank">arXiv</a></div>
  </div>
  <div class="code-card">
    <div class="code-title"><a href="https://github.com/zzhang0123/mcpost" target="_blank">MC-post</a></div>
    <div class="code-desc">Tools for global sensitivity analysis and Monte Carlo integration</div>
    <div class="code-links"><a href="https://arxiv.org/abs/2601.06270" target="_blank">arXiv</a></div>
  </div>
  <div class="code-card">
    <div class="code-title"><a href="https://github.com/SpyDust/SpyDust" target="_blank">SpyDust</a></div>
    <div class="code-desc">A python package for modeling spinning dust radiation</div>
    <div class="code-links"><a href="https://arxiv.org/abs/2412.03431" target="_blank">arXiv</a></div>
  </div>
  <div class="code-card">
    <div class="code-title"><a href="https://github.com/zzhang0123/hydra-tod" target="_blank">Hydra-TOD</a></div>
    <div class="code-desc">A Gibbs sampling method for single-dish TOD gain calibration and map-making</div>
  </div>
  <div class="code-card">
    <div class="code-title"><a href="https://github.com/zzhang0123/limTOD" target="_blank">limTOD</a></div>
    <div class="code-desc">A Time-Ordered Data Simulator for Ground-Based Measurements</div>
  </div>
  <div class="code-card">
    <div class="code-title"><a href="https://github.com/zzhang0123/TIBEC" target="_blank">TIBEC</a></div>
    <div class="code-desc">A package for Beam Simulation in Cosmological Coordinates</div>
  </div>
  <div class="code-card">
    <div class="code-title"><a href="https://github.com/zzhang0123/comat" target="_blank">comat</a></div>
    <div class="code-desc">Highly optimized real symmetric covariance matrix operations</div>
  </div>
</div>

## More about me

### Bio
- **Pronouns:** He/Him
- **Title:** PhD in Physics of the Universe (DOCTORAT PHYSIQUE DE L'UNIVERS)
- **Marital Status:** Married
- **Nationality:** Chinese
- **Location:** Manchester, United Kingdom
- **Profile:** Astrophysicist and cosmologist; self-proclaimed "citizen of the Universe."

### Scientific Ancestry

Below is my academic tree, illustrating the lineage from doctoral supervisors to students.

<div class="mermaid-wrap">
<div class="mermaid">
flowchart LR
    PD["Paul Dirac"] --> DS["Dennis W. Sciama"]
    EF["Enrico Fermi"] --> ST["Sam Treiman"]
    JS["John Simpson"] --> ST
    DS --> MR["Martin Rees"]
    ST --> SW["Steven Weinberg"]
    MR --> NK["Nick Kaiser"]
    SW --> JP["John Preskill"]
    JP --> MB["Martin Bucher"]
    NK & MB --> ZZ(["Zheng Zhang"])

    classDef anc fill:#F0F2F5,stroke:#3B82C4,stroke-width:1.5px,color:#1A1F2B
    classDef me fill:#3B82C4,stroke:#2563A0,stroke-width:2.5px,color:#ffffff,font-weight:bold

    class PD,EF,JS,DS,MR,ST,SW,NK,JP,MB anc
    class ZZ me
</div>
</div>

### Students

- Tong Lu (BSc, Manchester, 2025-)
- Pranav Odugoudar (MScR, Manchester, 2024-)

### Biological Ancestry

I can't go back too far. My grandfather was adopted. The man who adopted him, my great-grandfather, was a tofu maker/seller in the village, but unfortunately the craft was not passed on.

### Family

Our little family includes my wife and myself, our Bengal cat, Youzi, along with two cherished baobab trees, Jumbo and Zhuangzhuang, which we brought with us from Paris to Manchester. While living in the US, I raised a loving German Shepherd named Summer, who now enjoys life with my parents in my faraway hometown.

<div class="gallery gallery--grid gallery--portrait" data-columns="3">
	<img src="/images/me/baobab.jpg">
	<img src="/images/me/family.jpg">
	<img src="/images/me/couple.jpg">
	<img src="/images/me/summer1.jpg">
	<!-- <img src="/images/me/summer2.jpg"> -->
	<img src="/images/me/youzi_1.jpeg">
  <img src="/images/me/youzi_2.jpeg">
</div>
