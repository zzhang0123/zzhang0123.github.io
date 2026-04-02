---
title: 'Software for Radio Cosmology'
subtitle: 'Open-source Python projects for 21cm intensity mapping — beam modelling, data simulation, Bayesian calibration, and power spectrum estimation'
status: active
highlight: true
card_image: /images/demo/meerkat.jpg
mermaid: true
custom_hero: true
---

<style>
.rc-hero {
  position: relative;
  text-align: center;
  padding: 5rem 2rem;
  margin: 0 0 2.5rem 0;
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
              url('/images/projects/RadioCosmology/all_sky_maps.png') center/cover no-repeat;
  color: white;
  border-radius: 0 0 8px 8px;
}
.rc-hero h2 { color: white; font-size: 2.4rem; margin-bottom: 0.5rem; border: none; }
.rc-hero p { color: rgba(255,255,255,0.9); font-size: 1.1rem; font-style: italic; margin: 0; }
.rc-section-row {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1.5rem;
}
.rc-section-row.reverse { flex-direction: row-reverse; }
.rc-section-row .rc-img-col { flex: 1; min-width: 0; }
.rc-section-row .rc-text-col { flex: 1; min-width: 0; }
.rc-section-row.img-wide .rc-img-col { flex: 3; }
.rc-section-row.img-wide .rc-text-col { flex: 2; }
.rc-section-row.text-wide .rc-img-col { flex: 2; }
.rc-section-row.text-wide .rc-text-col { flex: 3; }
.rc-section-row img { width: 100%; height: auto; border-radius: 4px; }
@media (max-width: 768px) {
  .rc-section-row, .rc-section-row.reverse { flex-direction: column; }
  .rc-section-row .rc-img-col, .rc-section-row .rc-text-col { flex: 1 1 100%; }
}
/* Gibbs sampler flow */
.gibbs-flow {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  overflow-x: auto;
  padding: 1rem 0;
}
.gibbs-step {
  border-radius: 6px;
  padding: 0.6rem 0.8rem;
  text-align: center;
  font-size: 0.85rem;
  min-width: 110px;
}
.gibbs-init { background: #e8e8e8; border: 1px solid #999; }
.gibbs-proc { background: #dce8f5; border: 1px solid #4a86c8; }
.gibbs-sync { background: #fde8dc; border: 1px solid #e8744f; }
.gibbs-decision { background: #fef9e7; border: 1px solid #d4ac0d; border-radius: 50%; min-width: 90px; padding: 1rem 0.6rem; }
.step-label { font-weight: 700; font-size: 0.75rem; color: #555; margin-bottom: 0.2rem; }
.step-body { line-height: 1.4; }
.gibbs-arrow { font-size: 1.4rem; color: #666; flex-shrink: 0; text-align: center; }
.gibbs-arrow-down { font-size: 1.1rem; color: #4a86c8; text-align: center; }
.sync-label { font-size: 0.7rem; color: #999; display: block; }
.yes-no { font-size: 0.75rem; color: #666; }
.gibbs-group {
  border: 2px dashed #aaa;
  border-radius: 8px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}
.per-tod { background: rgba(74,134,200,0.05); border-color: rgba(74,134,200,0.4); }
.global-sync { background: rgba(232,116,79,0.05); border-color: rgba(232,116,79,0.4); }
.group-label { font-size: 0.7rem; color: #777; font-style: italic; margin-bottom: 0.3rem; }
@media (max-width: 768px) {
  .gibbs-flow { flex-direction: column; }
  .gibbs-arrow { transform: rotate(90deg); }
}
.rc-summary {
  background: #f0f7ff;
  border-left: 4px solid #3B82C4;
  border-radius: 4px;
  padding: 1.2rem 1.5rem;
  margin-top: 1rem;
}
.rc-summary h4 { margin-top: 0; color: #3B82C4; }
</style>

<div class="rc-hero">
  <h2>Software for Radio Cosmology</h2>
  <p>Open-source Python projects for 21cm intensity mapping — beam modelling, data simulation, Bayesian calibration, and power spectrum estimation</p>
</div>

### The 21cm Challenge

<div class="rc-section-row img-wide">
  <div class="rc-img-col">
    <img src="/images/projects/RadioCosmology/global_history.png"
         alt="Cosmic 21cm signal history across redshift">
  </div>
  <div class="rc-text-col">
    <p>Detecting the cosmological 21cm signal from neutral hydrogen is one of the great
    observational challenges in modern astrophysics. The signal is buried beneath
    astrophysical foregrounds four to five orders of magnitude brighter, corrupted by
    instrumental systematics — beam chromaticity, gain drifts, correlated 1/f noise —
    and contaminated by radio frequency interference. Every stage of the data
    pipeline must be handled with care — motivating the projects presented here.</p>
  </div>
</div>

---

### Projects at a Glance

Over the past several years I have developed a collection of Python packages that address different aspects of single-dish radio cosmology — from characterizing antenna beams to estimating power spectra. Each project is self-contained, though they naturally complement one another.

<div class="mermaid-wrap">
<pre class="mermaid">
block-beta
  columns 4
  TIBEC["TIBEC\nBeam Transforms"]:1
  limTOD["limTOD\nTOD Simulator"]:1
  hydra["hydra-tod\nBayesian Calibration"]:1
  comat["comat\nFast Toeplitz Ops"]:1
  QPSE["weighted QPSE\nPower Spectrum"]:1
  MERS["MERS\nForeground Modelling"]:1
  G21["Global21cm\nSignal Emulation"]:1
  space:1

  style TIBEC fill:#4a86c8,color:#fff
  style limTOD fill:#4a86c8,color:#fff
  style hydra fill:#e8744f,color:#fff
  style comat fill:#7ab648,color:#fff
  style QPSE fill:#9b59b6,color:#fff
  style MERS fill:#f1c40f,color:#333
  style G21 fill:#95a5a6,color:#fff
</pre>
</div>

---

### Full Stokes Beam Integration — TIBEC

<div class="rc-section-row img-wide">
  <div class="rc-img-col">
    <img src="/images/projects/RadioCosmology/antenna_Stokes_beams.png"
         alt="Full Stokes antenna beam patterns (I, Q, U, V)">
  </div>
  <div class="rc-text-col">
    <p><strong>TIBEC</strong> (Time Integrated Beam pattern in Equatorial Coordinates) transforms
    antenna far-field E-field patterns into full Stokes (I, Q, U, V) beam
    matrices in equatorial coordinates, with support for time integration over
    Local Sidereal Time.</p>
    <ul>
      <li>Reads FEKO/CST E-field data formats</li>
      <li>Computes Stokes beams via Pauli matrix algebra</li>
      <li>Two APIs: <code>E_field</code> (LST-based, multi-frequency) and <code>EFieldBeamAngle</code> (beam-angle-based, HEALPix)</li>
    </ul>
  </div>
</div>

---

### TOD Simulation — limTOD

<div class="rc-section-row reverse text-wide">
  <div class="rc-img-col">
    <img src="/images/projects/RadioCosmology/coord_sys_diagram.png"
         alt="Coordinate system transformations for beam pointing">
  </div>
  <div class="rc-text-col">
    <p><strong>limTOD</strong> simulates realistic time-ordered data for single-dish intensity
    mapping experiments such as MeerKAT/MeerKLASS. It handles asymmetric beam
    rotation in spherical harmonic space, sky convolution via HEALPix, and
    correlated 1/f gain noise generation.</p>
    <ul>
      <li>Full Stokes (I, Q, U, V) beam convolution</li>
      <li>Coordinate transforms: telescope (az/el) to equatorial via ZYZYZ Euler decomposition</li>
      <li>Built-in high-pass + Wiener filter map-making (<code>HPW_mapmaking</code>)</li>
      <li>MPI parallelization over frequencies</li>
    </ul>
  </div>
</div>

---

### Bayesian Calibration — hydra-tod

<div class="rc-section-row reverse text-wide">
  <div class="rc-img-col">
    <img src="/images/projects/RadioCosmology/combined_maps.jpg"
         alt="Reconstructed sky maps from Bayesian Gibbs sampling">
  </div>
  <div class="rc-text-col">
    <p><strong>hydra-tod</strong> performs joint Bayesian inference of sky temperature maps,
    instrument gains, and correlated noise parameters from radio telescope
    time-ordered data. Using Gibbs sampling with MPI parallelization, it
    alternates between sampling sky, gain, and noise conditional distributions.</p>
    <ul>
      <li>Data model: TOD = T<sub>sys</sub> &times; (1 + noise) &times; gain</li>
      <li>Three gain parameterizations: linear, log-linear, factorized</li>
      <li>Flicker noise (1/f<sup>&alpha;</sup>) covariance via incomplete gamma functions</li>
      <li>Polynomial emulators for ~1700&times; speedup of covariance evaluation</li>
      <li>Published in RAS Techniques and Instruments (<a href="https://arxiv.org/abs/2509.10992">arXiv:2509.10992</a>)</li>
    </ul>
  </div>
</div>

#### Gibbs sampling for calibration, map-making, and noise estimation

The Gibbs sampler alternates between four conditional updates per iteration.
Steps (a)–(c) run independently per TOD on each MPI rank; step (d) synchronises
the shared sky parameters across all ranks.

<div class="gibbs-flow">
  <div class="gibbs-step gibbs-init">
    <div class="step-label">Init</div>
    <div class="step-body">
      <strong>Initialise</strong><br/>
      <em>p</em><sub>sky</sub><sup>(0)</sup>,
      {<em>p</em><sub>loc,<em>j</em></sub><sup>(0)</sup>},
      {<em>p</em><sub><em>g,j</em></sub><sup>(0)</sup>},
      {<em>p</em><sub><em>n,j</em></sub><sup>(0)</sup>}
    </div>
  </div>
  <div class="gibbs-arrow">&#x2192;</div>
  <div class="gibbs-group per-tod">
    <div class="group-label">Per TOD <em>j</em> &nbsp;(parallel over MPI ranks)</div>
    <div class="gibbs-step gibbs-proc">
      <div class="step-label">(a)</div>
      <div class="step-body">Sample gains <em>p</em><sub><em>g,j</em></sub><sup>(<em>i</em>)</sup></div>
    </div>
    <div class="gibbs-arrow-down">&#x2193;</div>
    <div class="gibbs-step gibbs-proc">
      <div class="step-label">(b)</div>
      <div class="step-body">Sample local temp <em>p</em><sub>loc,<em>j</em></sub><sup>(<em>i</em>)</sup></div>
    </div>
    <div class="gibbs-arrow-down">&#x2193;</div>
    <div class="gibbs-step gibbs-proc">
      <div class="step-label">(c)</div>
      <div class="step-body">Sample noise <em>p</em><sub><em>n,j</em></sub><sup>(<em>i</em>)</sup></div>
    </div>
  </div>
  <div class="gibbs-arrow">&#x2192;<br/><span class="sync-label">sync</span></div>
  <div class="gibbs-group global-sync">
    <div class="group-label">Global &nbsp;(MPI allreduce)</div>
    <div class="gibbs-step gibbs-sync">
      <div class="step-label">(d)</div>
      <div class="step-body">Sample sky temp <em>p</em><sub>sky</sub><sup>(<em>i</em>)</sup></div>
    </div>
  </div>
  <div class="gibbs-arrow">&#x2192;</div>
  <div class="gibbs-step gibbs-decision">
    <div class="step-body">
      <em>i</em> &lt; <em>N</em><sub>samp</sub> ?<br/>
      <span class="yes-no">Yes &#x21BB; &nbsp; No &#x2193;</span>
    </div>
  </div>
</div>

---

### Fast Toeplitz Operations — comat

<p>The flicker noise covariance matrices in hydra-tod are Toeplitz-structured.
<strong>comat</strong> provides a Cython + OpenMP implementation of the Levinson-Durbin
algorithm for O(N<sup>2</sup>) computation of:</p>

<ul>
  <li><strong>Log-determinant</strong>: log|C| for the noise covariance matrix</li>
  <li><strong>Quadratic form</strong>: x<sup>T</sup> C<sup>−1</sup> x for likelihood evaluation</li>
</ul>

<p>These two quantities are the computational bottleneck of the noise parameter
sampler. By exploiting Toeplitz structure, comat avoids the O(N<sup>3</sup>) cost of
general matrix factorization, making the Gibbs sampler tractable for long
time streams.</p>

---

### Power Spectrum Estimation — weighted QPSE

<div class="rc-section-row reverse text-wide">
  <div class="rc-img-col">
    <img src="/images/projects/RadioCosmology/mode_selection.png"
         alt="Power spectrum mode selection and k-space coverage">
  </div>
  <div class="rc-text-col">
    <p>The <strong>weighted Quadratic Power Spectrum Estimator</strong> extracts cosmological
    21cm power spectra from interferometric visibility data, with principled
    handling of non-uniform frequency weighting caused by RFI flagging.</p>
    <ul>
      <li>Half-cosine apodization around flagged channels to minimize spectral leakage</li>
      <li>Comprehensive window function analysis</li>
      <li>Automatic noise bias correction</li>
      <li>Both theoretical (Gaussian) and Monte Carlo covariance estimation</li>
    </ul>
  </div>
</div>

---

### Foreground Modelling — MERS

<div class="rc-section-row img-wide">
  <div class="rc-img-col">
    <img src="/images/projects/RadioCosmology/synchrotron_diag.png"
         alt="Synchrotron emission mechanism — the dominant radio foreground">
  </div>
  <div class="rc-text-col">
    <p><strong>MERS</strong> (Moment Expanded Radio Sky) characterizes radio foregrounds using a
    power-law ensemble moment expansion formalism. It enables systematic comparison
    of sky models (CNN-PL vs GSM), quantifies the impact of beam chromaticity and
    point sources on foreground subtraction, and provides foreground mitigation
    strategies for both global 21cm and interferometric experiments.</p>
    <p>Companion emulators in <strong>Global21cm</strong> (21cmVAE, Poly21cm) provide fast
    neural-network-based predictions of the 21cm signal for use in forecasting
    and analysis pipelines.</p>
  </div>
</div>

---

<div class="rc-summary">
  <h4>Key Takeaways</h4>
  <ul>
    <li><strong>Broad coverage</strong>: Python packages addressing key challenges in single-dish 21cm intensity mapping — beam transforms, TOD simulation, Bayesian calibration, map-making, power spectrum estimation, and foreground modelling.</li>
    <li><strong>Full Stokes support</strong>: Beam integration, TOD simulation, and map-making all handle the full polarization state (I, Q, U, V).</li>
    <li><strong>Production-ready</strong>: MPI-parallelized solvers, Cython/OpenMP routines (comat), and polynomial emulators for computationally intensive operations.</li>
    <li><strong>Open-source</strong>: All packages available as installable Python libraries with Jupyter notebook examples and comprehensive documentation.</li>
    <li><strong>Actively developed</strong>: Ongoing work on MeerKLASS and RHINO telescope applications.</li>
  </ul>
</div>
