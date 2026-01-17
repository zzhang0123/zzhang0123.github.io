---
title: Zheng Zhang
subtitle: I do physics and cosmology (and ask a lot of questions about the Universe) 
description: A few more words about me.
featured_image: /images/me/zzhang1.jpg
tags: [Mermaid]
mermaid: true
permalink: /
---
<!-- 
![](/images/Manchester.jpg)
-->

<div class="gallery" data-columns="3">
	<img src="/images/demo/Lovell.jpg">
	<img src="/images/demo/cosmology.jpg">
	<img src="/images/demo/meerkat.jpg">
</div>
---

## What I'm doing now


My expertise is in physics and cosmology, with a side interest (and ongoing learning) in applying advanced tools and methods to these fields.
My passion is to push the boundaries of how physics explains the Universe, and when I'm not getting lost in equations or codes, my mind is out here wandering through the cosmos, trying to make sense of its grand mess. 

**Research interests:**

My current research covers both observational and theoretical cosmology, with particular focus on:
  - Line intensity mapping
  - The cosmic history and large-scale structure revealed by the HI hyperfine transition
  - Cosmic Microwave Background (CMB) anisotropy
  - Gravitational effects as cosmological probes 

Whether as secondary effects in cosmological surveys or as phenomena of intrinsic scientific interest, my work also includes formalising detailed astrophysical processes and systematically accounting for a wide range of observational effects -- spanning instrumental, dynamical, radiative transfer, relativistic, and topological factors -- in cosmological data. This includes:
  - Low-frequency foreground science
    - Diffuse synchrotron emission (spectral structure, Faraday rotation, RSB/ARCADE excess, etc.)
    - Spinning dust emission and Anomalous Microwave Emission (AME)
  - Non-equilibrium and quasi-equilibrium astrophysical systems
  - Stochastic instrumental processes (e.g., 1/f noise in autocorrelation measurements)
  - Higher-order corrections in the radiative transfer of cosmological signals

I also develop methods and tools for the field, such as:
  - Ultra-high-dimensional Bayesian inference using Gibbs sampling + Gaussian Constrained Realisation
  - Perturbative statistical analysis
    - Marginalising and abstracting out ignorance or environmental factors
    - Using moment and cumulant expansions
  - Machine learning
    - MomentEmu (a generic approach to smooth cosmological observable representation)
    - Deep learning
    - Physics-driven methods (e.g., PDE-net)
  - Methods for stochastic processes: Fokker-Planck equations analytical diffusion systems, Langevin equations and stochastic differential equations
  - Optimal statistical measurements: power spectrum, bispectrum, etc.


In addition to these areas, I maintain active research interests in general physics topics, notably topological defect transitions and the quantum-to-classical transition of fields.

<style>
.publications-section, .codes-section {
  width: 90%;
  margin: 0 auto 2.5rem auto;
}
.pub-cards, .code-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.pub-card, .code-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.2rem 1.5rem 1.2rem 1.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
}
.pub-card:hover, .code-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.13);
  transform: translateY(-3px) scale(1.02);
}
.pub-title, .code-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #1a237e;
}
.pub-authors, .code-desc {
  color: #444;
  font-size: 0.98rem;
  margin-bottom: 0.4rem;
}
.pub-links, .code-links {
  margin-top: 0.2rem;
}
.pub-links a, .code-links a {
  color: #1976d2;
  text-decoration: none;
  margin-right: 0.7em;
  font-size: 1.05em;
  transition: color 0.15s;
}
.pub-links a:hover, .code-links a:hover {
  color: #d32f2f;
  text-decoration: underline;
}
.pub-badge {
  display: inline-block;
  background: #e3f2fd;
  color: #1976d2;
  font-size: 0.92em;
  border-radius: 6px;
  padding: 0.1em 0.6em;
  margin-right: 0.5em;
  margin-bottom: 0.2em;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  margin-top: 2.5rem;
  margin-bottom: 0.7rem;
  letter-spacing: 0.01em;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.2em;
}
@media (max-width: 600px) {
  .pub-cards, .code-cards {
    grid-template-columns: 1fr;
  }
  .publications-section, .codes-section {
    width: 100%;
    padding: 0 0.2em;
  }
}
</style>

<div class="publications-section">
  <div class="section-title">Publications</div>
  <div style="margin-bottom:0.7em; font-size:1.05em;">
    Here is a list of my published and submitted papers to date. Also see my profiles on
    <a href="https://scholar.google.com/citations?user=TemNJQ0AAAAJ&hl=en&oi=sra" target="_blank">Google Scholar</a>,
    <a href="https://arxiv.org/a/zhang_z_28.html" target="_blank">arXiv</a>, and
    <a href="https://orcid.org/0000-0002-9154-2803" target="_blank">ORCID</a>.
  </div>

  <div class="pub-cards">
    <div class="pub-card">
      <span class="pub-badge">12 | 2026</span>
      <div class="pub-title">Bayesian component separation and power spectrum estimation for 21cm intensity mapping data cubes</div>
      <div class="pub-authors"> G Murphy, P Bull, M Santos, <strong>Z Zhang</strong>, S Cunnington</div>
      <div class="pub-links">
        <a href=" " target="_blank">Under collaboration review.</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">11 | 2026</span>
      <div class="pub-title">Spectral Signatures of Spinning Dust from Grain Ensembles in Diverse Environments: A Combined Theoretical and Observational Study</div>
      <div class="pub-authors"> <strong>Zheng Zhang</strong>, Jens Chluba, Roke Cepeda-Arroita, Jose Alberto Rubino-Martin</div>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2601.06270" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">10 | 2025</span>
      <div class="pub-title">Spectral Properties of Anomalous Microwave Emission in 144 Galactic Clouds</div>
      <div class="pub-authors"> R. Cepeda-Arroita et al (incl. <strong>Z Zhang</strong>).</div>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2510.05067" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">9 | 2025</span>
      <div class="pub-title">Joint Bayesian calibration and map-making for intensity mapping experiments</div>
      <div class="pub-authors"><strong>Z Zhang</strong>, P Bull, M Santos, A Nasirudin</div>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2509.10992" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">8 | 2025</span>
      <div class="pub-title">A general polynomial emulator for cosmology via moment projection</div>
      <div class="pub-authors"><strong>Z Zhang</strong></div>
      <div class="pub-links">
        <a href="https://doi.org/10.1093/mnras/staf2039" target="_blank">MNRAS</a>
        <a href="https://arxiv.org/abs/2507.02179" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">7 | 2025</span>
      <div class="pub-title">SpyDust: an improved and extended implementation for modeling spinning dust radiation</div>
      <div class="pub-authors"><strong>Z Zhang</strong>, J Chluba</div>
      <div class="pub-links">
        <a href="https://iopscience.iop.org/article/10.1088/1475-7516/2025/03/038/meta" target="_blank">JCAP</a>
        <a href="https://arxiv.org/abs/2412.03431" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">6 | 2024</span>
      <div class="pub-title">RHINO: A large horn antenna for detecting the 21cm global signal</div>
      <div class="pub-authors">P Bull, A El-Makadema et al (incl. <strong>Z Zhang</strong>).</div>
      <div class="pub-links">
        <a href="https://doi.org/10.1093/rasti/rzaf046">RASTI</a>
        <a href="https://arxiv.org/abs/2410.00076" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">5 | 2024</span>
      <div class="pub-title">Disentangling the anisotropic radio sky: Fisher forecasts for 21 cm arrays</div>
      <div class="pub-authors"><strong>Z Zhang</strong>, P Bull, K A Glasscock</div>
      <div class="pub-links">
        <a href="https://doi.org/10.1093/mnras/stae1070" target="_blank">MNRAS</a>
        <a href="https://arxiv.org/abs/2403.13768" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">4 | 2022</span>
      <div class="pub-title">Hydrogen Intensity and Real-Time Analysis Experiment: 256-element array status and overview</div>
      <div class="pub-authors">HIRAX collaboration (incl. <strong>Z Zhang</strong>) </div>
      <div class="pub-links">
        <a href="https://doi.org/10.1117/1.JATIS.8.1.011019" target="_blank">JATIS</a>
        <a href="https://arxiv.org/abs/2109.13755" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">3 | 2021</span>
      <div class="pub-title">A new MWA limit on the 21 cm power spectrum at redshifts∼ 13–17</div>
      <div class="pub-authors">MWA collaboration (incl. <strong>Z Zhang</strong>)</div>
      <div class="pub-links">
        <a href="https://doi.org/10.1093/mnras/stab1560" target="_blank">MNRAS</a>
        <a href="https://arxiv.org/abs/2105.12888" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">2 | 2020</span>
      <div class="pub-title">Deep multiredshift limits on Epoch of Reionization 21 cm power spectra from four seasons of Murchison Widefield Array observations</div>
      <div class="pub-authors">MWA collaboration (incl. <strong>Z Zhang</strong>)</div>
      <div class="pub-links">
        <a href="https://doi.org/10.1093/mnras/staa414" target="_blank">MNRAS</a>
        <a href="https://arxiv.org/abs/2002.02575" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="pub-card">
      <span class="pub-badge">1 | 2020</span>
      <div class="pub-title">The impact of tandem redundant/sky-based calibration in MWA Phase II data analysis</div>
      <div class="pub-authors"><strong>Z Zhang</strong>, JC Pober, W Li, BJ Hazelton, MF Morales et al.</div>
      <div class="pub-links">
        <a href="https://doi.org/10.1017/pasa.2020.37" target="_blank">PASA</a>
        <a href="https://arxiv.org/abs/2009.09269" target="_blank">arXiv</a>
      </div>
    </div>
  </div>
</div>

<div class="codes-section">
  <div class="section-title">Codes
  </div>
  <div style="margin-bottom:0.7em; font-size:1.05em;">
    Here are a few selected codes I have developed or contributed to, many of which are used in my research papers.
  </div>
  <div class="code-cards">
    <div class="code-card">
      <div class="code-title"><a href="https://github.com/zzhang0123/MomentEmu" target="_blank">MomentEmu</a>
      </div>
      <div class="code-desc">A general polynomial emulator for cosmology via moment projection
      </div>
      <div class="code-links">
        <a href="https://arxiv.org/abs/2507.02179" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="code-card">
      <div class="code-title"><a href="https://github.com/zzhang0123/mcpost" target="_blank">MC-post</a>
      </div>
      <div class="code-desc">Tools for global sensitivity analysis (GSA) and Monte Carlo integration with modern packaging standards and extensive documentation.
      </div>
      <div class="code-links">
        <a href="https://arxiv.org/abs/2601.06270" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="code-card">
      <div class="code-title"><a href="https://github.com/zzhang0123/limTOD" target="_blank">limTOD</a></div>
      <div class="code-desc">A Time-Ordered Data Simulator for Ground-Based Measurements</div>
    </div>
    <div class="code-card">
      <div class="code-title"><a href="https://github.com/SpyDust/SpyDust" target="_blank">SpyDust</a></div>
      <div class="code-desc">A python package for modeling spinning dust radiation</div>
      <div class="code-links">
        <a href="https://arxiv.org/abs/2412.03431" target="_blank">arXiv</a>
      </div>
    </div>
    <div class="code-card">
      <div class="code-title"><a href="https://github.com/zzhang0123/hydra-tod" target="_blank">Hydra-TOD</a></div>
      <div class="code-desc">A Gibbs sampling method for single-dish TOD gain calibration and map-making</div>
    </div>
    <div class="code-card">
      <div class="code-title"><a href="https://github.com/zzhang0123/TIBEC" target="_blank">TIBEC</a></div>
      <div class="code-desc">A package for Beam Simulation in Cosmological Coordinates</div>
    </div>
    <div class="code-card">
      <div class="code-title"><a href="https://github.com/zzhang0123/comat" target="_blank">comat</a></div>
      <div class="code-desc">A highly optimized implementation of real symmetric covariance matrix (comat) operations.</div>
    </div>
  </div>
</div>

---

## More about me

### Bio
- **Pronouns:** He/Him  
- **Title:** PhD in Physics of the Universe (DOCTORAT PHYSIQUE DE L'UNIVERS)  
- **Marital Status:** Married  
- **Nationality:** Chinese  
- **Location:** Manchester, United Kingdom  
- **Profile:** Astrophysicist and cosmologist; self-proclaimed “citizen of the Universe.”

### Life and Education Journey
I am currently (**Nov 2023 -**) a Postdoctoral Researcher at the University of **Manchester**, working with Phil Bull and Jens Chluba. Previously, I completed my PhD in Physics of the Universe at the Astroparticle and Cosmology (APC) Laboratory, Université Paris Cité, jointly with the École Normale Supérieure (ENS, Paris), from **November 2020 to October 2023** in **Paris, France**.

Before that, I earned an MSc in Physics from Brown University (**2018–2020, Rhode Island, US**) and a BSc in Applied Physics from Shanghai University (**2014–2018, Shanghai, China**). My earlier education includes high school in **Hai’an** and primary school in Sunzhuang village (**2002–2014**). I was born in 1996.

### Scientific Ancestry 

Below is my academic tree, illustrating the lineage from doctoral supervisors to students.

<div class="gallery" data-columns="1">
	<img src="/images/demo/academic_tree.png">
</div>

### Students

- Pranav Odugoudar (MScR, Manchester, 2024-)
- Tong Lu (BSc, Manchester, 2025-)

### Biological Ancestry

I can't go back too far. My grandfather was adopted. The man who adopted him, my great-grandfather, was a tofu maker/seller in the village, but unfortunately the craft was not passed on.

###  The Home Team

Our little family includes my wife and myself, our Bengal cat, Youzi, along with two cherished baobab trees, Jumbo and Zhuangzhuang, which we brought with us from Paris to Manchester. While living in the US, I raised a loving German Shepherd named Summer, who now enjoys life with my parents in my faraway hometown.

<div class="gallery" data-columns="3">
	<img src="/images/me/baobab.jpg">
	<img src="/images/me/family.jpg">
	<img src="/images/me/couple.jpg">
	<img src="/images/me/summer1.jpg">
	<img src="/images/me/summer2.jpg">
	<img src="/images/me/youzi_1.jpeg">
  <img src="/images/me/youzi_2.jpeg">
</div>









