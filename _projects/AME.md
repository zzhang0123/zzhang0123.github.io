---
title: 'Anomalous Microwave Emission'
subtitle: 'Advanced Modeling of Spinning Dust Radiation'
status: active
highlight: true
card_image: /images/projects/AME/grain_and_L_basis.jpg
custom_hero: true
---

<!-- KaTeX for math rendering -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" crossorigin="anonymous"
  onload="renderMathInElement(document.body, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]});"></script>

<style>
/* ── Hero ── */
.ame-hero {
  position: relative;
  text-align: center;
  padding: 5.5rem 2rem 4.5rem;
  margin: 0 0 2.5rem 0;
  background: linear-gradient(135deg, rgba(18,24,44,0.92) 0%, rgba(20,40,72,0.90) 50%, rgba(15,52,96,0.85) 100%),
              url('/images/projects/AME/obs_vs_ensemble_model.png') center/cover no-repeat;
  color: white;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
}
.ame-hero::after {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 30% 60%, rgba(59,130,196,0.18) 0%, transparent 60%);
  pointer-events: none;
}
.ame-hero h2 {
  position: relative; z-index: 1;
  color: white; font-size: 2.6rem; font-weight: 700;
  margin-bottom: 0.4rem; border: none;
  letter-spacing: -0.02em;
}
.ame-hero .ame-tagline {
  position: relative; z-index: 1;
  color: rgba(255,255,255,0.88); font-size: 1.15rem;
  font-style: italic; margin: 0 0 0.4rem 0;
}
.ame-hero .ame-tagline-sm {
  position: relative; z-index: 1;
  color: rgba(255,255,255,0.55); font-size: 0.92rem;
  margin: 0;
}
.ame-badges {
  position: relative; z-index: 1;
  margin-top: 1.4rem;
  display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap;
}
.ame-badges a { display: inline-block; transition: transform 0.15s; }
.ame-badges a:hover { transform: translateY(-1px); }

/* ── Section rows ── */
.ame-row {
  display: flex; gap: 2.2rem; align-items: center; margin: 1.8rem 0;
}
.ame-row.reverse { flex-direction: row-reverse; }
.ame-row .ame-img { flex: 1; min-width: 0; }
.ame-row .ame-txt { flex: 1; min-width: 0; }
.ame-row.img-wide .ame-img { flex: 3; }
.ame-row.img-wide .ame-txt { flex: 2; }
.ame-row.text-wide .ame-img { flex: 2; }
.ame-row.text-wide .ame-txt { flex: 3; }
.ame-row img {
  width: 100%; height: auto; border-radius: 6px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
@media (max-width: 768px) {
  .ame-row, .ame-row.reverse { flex-direction: column; }
  .ame-row .ame-img, .ame-row .ame-txt { flex: 1 1 100%; }
}

/* ── Feature cards ── */
.ame-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem; margin: 2rem 0;
}
.ame-card {
  background: #f8f9fb; border-radius: 10px;
  padding: 1.3rem 1.5rem;
  border-left: 4px solid #3B82C4;
  transition: box-shadow 0.2s, transform 0.2s;
}
.ame-card:hover {
  box-shadow: 0 4px 16px rgba(59,130,196,0.12);
  transform: translateY(-2px);
}
.ame-card h4 { margin: 0 0 0.5rem 0; color: #1a3a5c; font-size: 1.05rem; }
.ame-card p { margin: 0; font-size: 0.92rem; color: #4a5568; line-height: 1.55; }

/* ── Pipeline ── */
.ame-pipeline {
  background: linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%);
  border-radius: 12px; padding: 1.8rem 2rem; margin: 1.8rem 0;
}
.ame-step {
  display: flex; align-items: flex-start;
  padding: 0.75rem 1.1rem; margin-bottom: 0.6rem;
  background: white; border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  transition: box-shadow 0.15s;
}
.ame-step:hover { box-shadow: 0 2px 8px rgba(59,130,196,0.12); }
.ame-step-num {
  background: linear-gradient(135deg, #2563a0, #3B82C4);
  color: white; border-radius: 50%;
  width: 1.9rem; height: 1.9rem;
  display: flex; align-items: center; justify-content: center;
  margin-right: 1rem; flex-shrink: 0;
  font-weight: 700; font-size: 0.85rem;
}
.ame-step-body strong { color: #1a3a5c; }
.ame-step-body .ame-detail { color: #4a5568; font-size: 0.9rem; line-height: 1.5; }
.ame-step-body code { background: #edf2f7; padding: 0.1em 0.35em; border-radius: 3px; font-size: 0.82rem; color: #2d3748; }
.ame-arrow { text-align: center; color: #3B82C4; font-size: 1rem; margin: 0.15rem 0; opacity: 0.6; }

/* ── Gallery ── */
.ame-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.3rem; margin: 1.5rem 0;
}
.ame-fig {
  border: 1px solid #e2e6ec; border-radius: 10px;
  overflow: hidden; background: white;
  transition: box-shadow 0.2s;
}
.ame-fig:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
.ame-fig img { width: 100%; display: block; }
.ame-fig figcaption {
  padding: 0.7rem 1rem; font-size: 0.85rem;
  color: #4a5568; background: #fafbfc; line-height: 1.45;
}

/* ── Image pair ── */
.ame-pair {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 1.5rem; margin: 1.5rem 0;
}
.ame-pair img {
  width: 100%; height: auto; border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
}
@media (max-width: 600px) {
  .ame-pair { grid-template-columns: 1fr; }
}

/* ── Summary callout ── */
.ame-summary {
  background: linear-gradient(135deg, #edf4f9 0%, #f0ecf8 100%);
  border-radius: 12px; padding: 1.8rem 2rem; margin: 2.5rem 0;
  border-left: 5px solid #3B82C4;
}
.ame-summary h4 { margin: 0 0 0.8rem 0; color: #2563a0; font-size: 1.15rem; }
.ame-summary li { margin-bottom: 0.4rem; line-height: 1.55; }

/* ── Install box ── */
.ame-install {
  background: #1a2332; color: #e2e8f0;
  border-radius: 10px; padding: 1.4rem 1.6rem; margin: 1.2rem 0;
  font-family: "JetBrains Mono", monospace; font-size: 0.88rem;
  line-height: 1.7;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}
.ame-install code { color: #f1f5f9; font-size: 0.9rem; background: none; padding: 0; }
.ame-install .ame-cmd-label { color: #7dd3fc; font-weight: 600; font-family: "Inter", sans-serif; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.04em; display: block; margin-bottom: 0.2rem; }
.ame-install .ame-cmd-label + code { display: block; }
.ame-install .ame-cmd-sep { height: 0.8rem; }

/* ── Publication list ── */
.ame-pubs { list-style: none; padding: 0; margin: 0.8rem 0; }
.ame-pubs li {
  position: relative; padding-left: 1.4rem;
  margin-bottom: 0.7rem; line-height: 1.55;
}
.ame-pubs li::before {
  content: ''; position: absolute; left: 0; top: 0.55rem;
  width: 8px; height: 8px; border-radius: 50%;
  background: #3B82C4;
}

/* ── Link pills ── */
.ame-links { display: flex; gap: 0.6rem; flex-wrap: wrap; margin: 1rem 0; }
.ame-links a {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.4rem 1rem; border-radius: 20px;
  background: #f0f4f8; color: #2563a0;
  font-size: 0.88rem; font-weight: 500;
  text-decoration: none; transition: all 0.15s;
  border: 1px solid #e2e6ec;
}
.ame-links a:hover { background: #3B82C4; color: white; border-color: #3B82C4; }

/* ── Divider ── */
.ame-divider {
  border: none; height: 1px; margin: 2.5rem 0;
  background: linear-gradient(to right, transparent, #d0d7e0, transparent);
}

/* ── Math typography ── */
.katex { font-size: 1.05em; }
</style>

<div class="ame-hero">
  <h2>SpyDust</h2>
  <p class="ame-tagline">An improved and extended implementation for modeling spinning dust radiation</p>
  <p class="ame-tagline-sm">Comprehensive grain shape modeling &bull; Updated physical processes &bull; MPI parallelisation</p>
  <div class="ame-badges">
    <a href="https://pypi.org/project/SpyDust/"><img src="https://img.shields.io/pypi/v/SpyDust?style=flat-square&color=blue" alt="PyPI"></a>
    <a href="https://arxiv.org/abs/2412.03431"><img src="https://img.shields.io/badge/arXiv-2412.03431-b31b1b?style=flat-square" alt="arXiv"></a>
    <a href="https://github.com/zzhang0123/SpyDust"><img src="https://img.shields.io/badge/GitHub-SpyDust-333?style=flat-square&logo=github" alt="GitHub"></a>
  </div>
</div>

### Overview

<div class="ame-row text-wide">
  <div class="ame-txt">
    <p><strong>SpyDust</strong> is a Python package for modeling anomalous microwave emission (AME) from spinning dust grains in astrophysical environments. Building on the original IDL <a href="https://cosmo.nyu.edu/yacine/spdust/spdust.html">SPDUST</a> code, SpyDust introduces comprehensive grain shape modeling, corrected physics for electric dipole radiation back-reaction and plasma drag, and new tools for spectral analysis and fitting.</p>
    <p>The package is described in <a href="https://arxiv.org/abs/2412.03431">Zhang &amp; Chluba (2024)</a>. The accompanying spectral signatures paper &mdash; covering global sensitivity analysis, moment expansion, and SED fitting &mdash; is published in <a href="https://doi.org/10.1093/mnras/stag509">MNRAS (2025)</a>.</p>
  </div>
  <div class="ame-img">
    <img src="/images/projects/AME/beta_SED_comparison.png"
         alt="SED comparison for different grain shape parameters &beta;">
  </div>
</div>

<div class="ame-features">
  <div class="ame-card">
    <h4>Grain Shape Modeling</h4>
    <p>Cylindrical and ellipsoidal grain geometries via the shape parameter $\beta$, with full directional radiation fields and angular momentum transport.</p>
  </div>
  <div class="ame-card">
    <h4>Updated Physics</h4>
    <p>Corrected expressions for electric dipole radiation back-reaction, plasma drag dissipation, and infrared excitation/damping rates.</p>
  </div>
  <div class="ame-card">
    <h4>Spectral Analysis</h4>
    <p>Log-normal SED fitting, moment expansion perturbation method, full Stokes parameter calculations, and global sensitivity analysis tools.</p>
  </div>
  <div class="ame-card">
    <h4>MPI Parallelisation</h4>
    <p>Computations parallelised via <code>mpi4py</code> for efficient evaluation across grain size distributions and ISM environments.</p>
  </div>
</div>

<hr class="ame-divider">

### Computational Pipeline

SpyDust computes the spinning dust emissivity through a modular physics pipeline. For each grain size in the distribution, the code solves for the charge state, excitation/damping rates, and the resulting angular momentum distribution $f(\omega)$, before integrating to obtain the SED.

<div class="ame-pipeline">
  <div class="ame-step">
    <div class="ame-step-num">1</div>
    <div class="ame-step-body">
      <strong>Environment &amp; Grain Properties</strong><br>
      <span class="ame-detail">ISM parameters ($n_\mathrm{H}$, $T$, $\chi$, $x_\mathrm{h}$, $x_\mathrm{C}$, $y$, $\gamma$, $\beta$, $\mu$). Grain geometry, moments of inertia, and atom counts ($N_\mathrm{C}$, $N_\mathrm{H}$) computed via <code>Grain.py</code>.</span>
    </div>
  </div>
  <div class="ame-arrow">&#x25BC;</div>
  <div class="ame-step">
    <div class="ame-step-num">2</div>
    <div class="ame-step-body">
      <strong>Charge Distribution</strong><br>
      <span class="ame-detail">Equilibrium charge state from photoemission/collision balance (<code>charge_dist.py</code>), following Weingartner &amp; Draine (2001b) and Draine &amp; Sutin (1987).</span>
    </div>
  </div>
  <div class="ame-arrow">&#x25BC;</div>
  <div class="ame-step">
    <div class="ame-step-num">3</div>
    <div class="ame-step-body">
      <strong>Excitation &amp; Damping Rates</strong><br>
      <span class="ame-detail">IR emission (<code>infrared.py</code>), neutral/ion collisions (<code>collisions.py</code>), plasma drag (<code>plasmadrag.py</code>), and H<sub>2</sub> formation contribute to angular momentum exchange.</span>
    </div>
  </div>
  <div class="ame-arrow">&#x25BC;</div>
  <div class="ame-step">
    <div class="ame-step-num">4</div>
    <div class="ame-step-body">
      <strong>Angular Momentum Distribution</strong><br>
      <span class="ame-detail">The rotation rate distribution $f(\omega)$ is solved from the Fokker&ndash;Planck equation in <code>AngMomDist.py</code>, accounting for all excitation and damping.</span>
    </div>
  </div>
  <div class="ame-arrow">&#x25BC;</div>
  <div class="ame-step">
    <div class="ame-step-num">5</div>
    <div class="ame-step-body">
      <strong>Emissivity Spectrum</strong><br>
      <span class="ame-detail">The SED is integrated over grain sizes and shapes in <code>SED.py</code>, yielding the spinning dust emissivity $j_\nu$ as a function of frequency.</span>
    </div>
  </div>
</div>

<hr class="ame-divider">

### Grain Shape Effects

A key innovation in SpyDust is the treatment of non-spherical grain shapes. The shape parameter $\beta$ controls the aspect ratio: small grains ($a < a_2 = 6 \times 10^{-8}$ cm) are modeled as cylinders, while larger grains are ellipsoidal.

<div class="ame-pair">
  <img src="/images/projects/AME/ellipsoid_diagram.png"
       alt="Ellipsoidal grain geometry and angular momentum basis">
  <img src="/images/projects/AME/cylinder_diagram.png"
       alt="Cylindrical grain geometry for small dust particles">
</div>

<hr class="ame-divider">

### Validation: SpyDust vs. SPDUST

<div class="ame-row img-wide">
  <div class="ame-img">
    <img src="/images/projects/AME/spdust_comparison.png"
         alt="SpyDust vs. original SPDUST comparison across ISM environments">
  </div>
  <div class="ame-txt">
    <p><strong>Key corrections in SpyDust:</strong></p>
    <ul>
      <li>Updated electric dipole radiation back-reaction damping rate</li>
      <li>Corrected plasma drag formulation for charged grains</li>
      <li>Extended IR excitation with proper vibrational mode treatment</li>
      <li>Full non-spherical grain geometry (cylinders + ellipsoids)</li>
    </ul>
    <p>These corrections matter most for small, highly charged grains in strong radiation fields.</p>
  </div>
</div>

<hr class="ame-divider">

### Spectral Features & Sensitivity Analysis

The spinning dust SED is well-described by a log-normal model characterised by its peak frequency $\nu_\mathrm{peak}$ and spectral width $\sigma$:

$$j_\nu \;\propto\; \exp\!\left[-\,\frac{1}{2}\left(\frac{\ln\nu - \ln\nu_\mathrm{peak}}{\sigma}\right)^{\!2}\right]$$

Using global sensitivity analysis (GSA) and the moment expansion method, we quantify how each environment and grain parameter influences these spectral features &mdash; and identify fundamental degeneracies.

<div class="ame-gallery">
  <figure class="ame-fig">
    <img src="/images/projects/AME/SED_fit_example.png" alt="SED fitting example">
    <figcaption>Log-normal fit to a spinning dust SED, capturing $\nu_\mathrm{peak}$ and $\sigma$.</figcaption>
  </figure>
  <figure class="ame-fig">
    <img src="/images/projects/AME/Fit_SED_CNM.png" alt="SED fit for CNM">
    <figcaption>SED fitting for a Cold Neutral Medium (CNM) environment.</figcaption>
  </figure>
</div>

<div class="ame-pair">
  <img src="/images/projects/AME/mom_exp.png"
       alt="Moment expansion analysis: derivatives of spectral features">
  <img src="/images/projects/AME/SED_multipanel_size_shape.png"
       alt="SED variations across grain size and shape parameters">
</div>

<div class="ame-row text-wide reverse" style="margin-top: 1.5rem;">
  <div class="ame-txt">
    <p>Large ensembles of spinning dust models generated across realistic ISM conditions. Comparing these ensembles with observed AME sources reveals which parameter combinations are consistent with the data and which degeneracies remain.</p>
  </div>
  <div class="ame-img">
    <img src="/images/projects/AME/obs_vs_ensemble_model.png"
         alt="Observed AME sources vs. model ensemble predictions">
  </div>
</div>

<hr class="ame-divider">

### Getting Started

<div class="ame-install">
  <span class="ame-cmd-label">Install from PyPI</span>
  <code>pip install SpyDust --no-deps</code>
  <div class="ame-cmd-sep"></div>
  <span class="ame-cmd-label">Or install from source</span>
  <code>git clone https://github.com/zzhang0123/SpyDust.git</code><br>
  <code>cd SpyDust</code><br>
  <code>pip install -e . --no-deps</code>
</div>

**Dependencies:** `numpy` (<2.4), `scipy`, `mpi4py` (required); `pandas` (optional, for free-free emission).

<hr class="ame-divider">

<div class="ame-summary">
  <h4>Key Takeaways</h4>
  <ul>
    <li><strong>SpyDust</strong> is an improved Python reimplementation of the IDL SPDUST code for modeling anomalous microwave emission from spinning dust grains.</li>
    <li>It introduces <strong>comprehensive grain shape modeling</strong> (cylindrical + ellipsoidal), corrected physics, and MPI parallelisation.</li>
    <li>New tools for <strong>spectral feature analysis</strong> &mdash; log-normal SED fitting, moment expansion derivatives, and global sensitivity analysis &mdash; reveal parameter degeneracies and guide observational strategies.</li>
    <li>The package is <strong>open source</strong>, published on PyPI, and actively maintained.</li>
  </ul>
</div>

### Publications

<ul class="ame-pubs">
  <li>Z. Zhang &amp; J. Chluba, <a href="https://arxiv.org/abs/2412.03431">SpyDust: an improved and extended implementation for modeling spinning dust radiation</a>, JCAP, 03, 038 (2025)</li>
  <li>Z. Zhang, J. Chluba, R. Cepeda-Arroita &amp; J. A. Rubi&ntilde;o-Mart&iacute;n, <a href="https://doi.org/10.1093/mnras/stag509">Spectral signatures of spinning dust from grain ensembles in diverse environments</a>, MNRAS (2025)</li>
</ul>

<div class="ame-links">
  <a href="https://github.com/zzhang0123/SpyDust"><i class="fab fa-github"></i> GitHub</a>
  <a href="https://pypi.org/project/SpyDust/"><i class="fab fa-python"></i> PyPI</a>
  <a href="https://cosmo.nyu.edu/yacine/spdust/spdust.html"><i class="fas fa-globe"></i> Original SPDUST</a>
</div>
