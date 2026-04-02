---
title: 'Advanced Methods'
subtitle: 'Computational Tools for Cosmology and Applied Mathematics'
status: active
highlight: false
card_image: /images/projects/AdvancedMethods/MomentEmu_workflow.png
custom_hero: true
---

<style>
.am-hero {
  position: relative;
  text-align: center;
  padding: 5rem 2rem;
  margin: 0 0 2.5rem 0;
  background: linear-gradient(135deg, #1a5276 0%, #2e86c1 60%, #e67e22 100%);
  color: white;
  border-radius: 8px;
}
.am-hero h2 { color: white; font-size: 2.4rem; margin-bottom: 0.5rem; border: none; }
.am-hero p { color: rgba(255,255,255,0.9); font-size: 1.05rem; font-style: italic; margin: 0; max-width: 750px; margin-left: auto; margin-right: auto; line-height: 1.7; }

.am-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.2s;
}
.am-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
.am-card h3 { color: #1a5276; margin-top: 0; }
.am-badge {
  display: inline-block;
  background: #2e86c1;
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}
.am-card a.am-repo {
  display: inline-block;
  margin-top: 0.5rem;
  color: #2e86c1;
  font-weight: 600;
  text-decoration: none;
}
.am-card a.am-repo:hover { text-decoration: underline; }

.am-figure-row {
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}
.am-figure-row figure {
  flex: 1;
  min-width: 280px;
  margin: 0;
  text-align: center;
}
.am-figure-row img { max-width: 100%; border-radius: 4px; }
.am-figure-row figcaption { font-size: 0.85rem; color: #666; margin-top: 0.4rem; }

.am-summary {
  background: #f0f7ff;
  border-left: 4px solid #3B82C4;
  border-radius: 4px;
  padding: 1.2rem 1.5rem;
  margin-top: 1.5rem;
}
.am-summary h4 { margin-top: 0; color: #3B82C4; }

@media (max-width: 768px) {
  .am-figure-row { flex-direction: column; }
  .am-figure-row figure { min-width: 0; }
}
</style>

<div class="am-hero">
  <h2>Advanced Methods</h2>
  <p>Open-source computational tools spanning polynomial emulation, Monte Carlo post-analysis, and stochastic dynamics &mdash; bridging modern numerical methods with cosmological and mathematical applications.</p>
</div>

## Overview

This workspace brings together four independent but complementary Python packages,
each addressing a different facet of computational science. From building fast,
interpretable emulators for cosmological observables to performing global sensitivity
analysis on Monte Carlo chains and solving Fokker-Planck equations, these tools share
a common philosophy: make advanced numerical methods accessible, efficient, and
scientifically transparent.

## Projects

<div class="am-card">
  <span class="am-badge">Emulation</span>
  <h3>MomentEmu</h3>
  <p>
    A general-purpose polynomial emulator based on <strong>moment projection</strong>,
    introduced in
    <a href="https://arxiv.org/abs/2507.02179">Zhang (2025)</a>.
    Given simulation data
    {(&theta;<sup>(i)</sup>, y<sup>(i)</sup>)}, MomentEmu constructs a moment matrix
    <em>M</em><sub>&alpha;&beta;</sub> and moment vector
    <em>&nu;</em><sub>&alpha;</sub>, then solves the linear system
    <em>M c</em> = <em>&nu;</em> to obtain closed-form polynomial coefficients &mdash;
    no iterative optimisation needed.
  </p>
  <p>
    <strong>Key properties:</strong>
    millisecond-level evaluation,
    negligible training cost (seconds, not hours),
    fully symbolic &amp; differentiable output,
    forward (<em>&theta; &rarr; y</em>) and inverse (<em>y &rarr; &theta;</em>) modes,
    auto-differentiation via JAX, PyTorch, and SymPy.
  </p>
  <img src="/images/projects/AdvancedMethods/MomentEmu_workflow.png"
       alt="MomentEmu workflow: data standardisation, moment matrix assembly, polynomial fitting, and model selection"
       style="max-width:100%; border-radius:4px; margin-top:0.75rem;">
  <p style="font-size:0.85rem; color:#666; margin-top:0.3rem;">
    The MomentEmu workflow: standardise data, assemble moment matrices, solve for polynomial
    coefficients, and select the optimal degree via validation RMSE.
  </p>
  <a class="am-repo" href="https://github.com/zzhang0123/MomentEmu">
    View on GitHub &rarr;
  </a>
</div>

<div class="am-card">
  <span class="am-badge">Cosmology</span>
  <h3>PolyCAMB &mdash; CMB Emulation with MomentEmu</h3>
  <p>
    Proof-of-concept application of MomentEmu to cosmological parameter estimation using
    <a href="https://camb.info">CAMB</a>.
    Two emulators are provided:
  </p>
  <ul>
    <li><strong>PolyCAMB-D&#8467;</strong> &mdash; maps six &Lambda;CDM parameters
        to the CMB power spectra (TT, EE, BB, TE) at sub-percent accuracy over
        &#8467; &le; 4050. Training on ~47k simulations takes ~9 s; a full spectrum
        evaluation takes ~1.5 ms.</li>
    <li><strong>PolyCAMB-peak</strong> &mdash; bidirectional mapping between cosmological
        parameters and acoustic peak features (locations &amp; amplitudes of the first
        five peaks). The resulting symbolic expressions recover the known analytic
        dependences of peak-height ratios on &Omega;<sub>b</sub>h&sup2;,
        &Omega;<sub>c</sub>h&sup2;, and n<sub>s</sub>.</li>
  </ul>
</div>

<div class="am-figure-row">
  <figure>
    <img src="/images/projects/AdvancedMethods/poly_camb.png"
         alt="PolyCAMB validation: emulated vs CAMB power spectrum and fractional residuals below 0.02%">
    <figcaption>PolyCAMB-D&#8467; validation: emulated spectrum (orange) vs CAMB (dashed),
    with residuals &lt; 0.02%. Stars mark acoustic peaks predicted by PolyCAMB-peak.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/AdvancedMethods/polycamb_performance.png"
         alt="Training performance: RMSE and training time vs polynomial degree">
    <figcaption>Training performance vs polynomial degree. A degree-5 fit achieves
    ~0.05% RMSE in ~9 seconds.</figcaption>
  </figure>
</div>

<div class="am-figure-row">
  <figure>
    <img src="/images/projects/AdvancedMethods/corner_compare_pol.png"
         alt="Corner plot: MCMC posteriors from PolyCAMB vs raw CAMB are nearly identical">
    <figcaption>MCMC posteriors (Planck TT/TE/EE+lowE+lowT): PolyCAMB (orange) vs CAMB (blue).
    Best-fit shifts &le; 0.01&sigma;; ~140&times; speed-up.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/AdvancedMethods/H2_H3.png"
         alt="Symbolic peak-height ratios H2 and H3: PolyCAMB vs Hu & Sugiyama analytic approximations">
    <figcaption>Symbolic peak-height ratios H<sub>2</sub>, H<sub>3</sub>: PolyCAMB-peak (orange)
    recovers known analytic dependences (blue) at ~0.04% accuracy vs CAMB (gray).</figcaption>
  </figure>
</div>

<div class="am-card" style="margin-top:1.5rem;">
  <a class="am-repo" href="https://github.com/MomentEmu/MomentEmu-PolyCAMB-examples">
    PolyCAMB Examples on GitHub &rarr;
  </a>
</div>

<div class="am-card">
  <span class="am-badge">Statistics</span>
  <h3>MCPost</h3>
  <p>
    Comprehensive Monte Carlo post-analysis package. Provides <strong>global sensitivity
    analysis</strong> (mutual information, distance correlation, permutation importance,
    GP surrogates with ARD, Sobol&rsquo; indices) and <strong>Monte Carlo / quasi-Monte Carlo
    integration</strong> with importance sampling. Modular, typed, and extensible via
    a registry-based plugin system.
  </p>
  <a class="am-repo" href="https://github.com/zzhang0123/mcpost">
    View on GitHub &rarr;
  </a>
</div>

<div class="am-card">
  <span class="am-badge">Stochastic Processes</span>
  <h3>KME</h3>
  <p>
    Numerical solver for the <strong>Fokker-Planck equation</strong> using the
    Kramers-Moyal expansion. Tracks the time evolution of probability density functions
    for stochastic processes, with built-in visualisation of PDF evolution at different
    time slices. Supports user-defined drift and diffusion coefficients.
  </p>
  <a class="am-repo" href="https://github.com/zzhang0123/KME">
    View on GitHub &rarr;
  </a>
</div>

---

## Get Started

<div class="am-summary">
  <h4>Key Takeaway</h4>
  <p>
    These four packages demonstrate the breadth of modern computational methods in cosmology
    and applied mathematics &mdash; from <strong>polynomial emulation</strong> with symbolic transparency
    to <strong>sensitivity analysis</strong> of Monte Carlo chains and <strong>stochastic process modelling</strong>.
    Each is pip-installable, documented with Jupyter notebooks, and designed for scientific
    transparency.
  </p>
</div>

All packages are available on GitHub:

- **MomentEmu**: `pip install git+https://github.com/zzhang0123/MomentEmu.git`
- **MCPost**: `pip install MC-post`
- **PolyCAMB examples**: `git clone https://github.com/MomentEmu/MomentEmu-PolyCAMB-examples.git`
