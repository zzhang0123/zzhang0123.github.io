(function () {
  'use strict';

  // Respect reduced motion preference
  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) return;

  // Don't run on Nick Kaiser pages
  if (document.body.classList.contains('nk-archive')) return;

  var canvas = document.createElement('canvas');
  canvas.className = 'cosmic-bg';
  document.body.insertBefore(canvas, document.body.firstChild);

  var ctx = canvas.getContext('2d');
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var width, height;
  var particles = [];
  var attractors = [];
  var PARTICLE_COUNT = 120;
  var CONNECTION_DIST = 140;
  var ATTRACTOR_STRENGTH = 0.0002;
  var animId;
  var lastTime = 0;
  var frameInterval = 1000 / 30;


  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Gravitational attractors — mass concentrations that lens particle paths
    attractors = [
      { x: width * 0.2,  y: height * 0.25, mass: 1.4 },
      { x: width * 0.75, y: height * 0.65, mass: 1.1 },
      { x: width * 0.5,  y: height * 0.5,  mass: 0.6 }
    ];
  }


  function createParticle() {
    // Most particles are faint, a few are bright "stars"
    var isBright = Math.random() < 0.12;
    var baseSize = isBright
      ? Math.random() * 1.5 + 2.0
      : Math.random() * 1.6 + 0.6;

    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.1 + 0.015,
      size: baseSize,
      bright: isBright,
      // Color variety — blue-white spectrum
      hue: 200 + Math.random() * 30,           // 200-230 (blue range)
      sat: isBright ? 40 + Math.random() * 30 : 50 + Math.random() * 40,
      opacity: isBright
        ? 0.5 + Math.random() * 0.35
        : 0.15 + Math.random() * 0.25,
      twinkleSpeed: 0.003 + Math.random() * 0.006,
      twinklePhase: Math.random() * Math.PI * 2
    };
  }


  function init() {
    resize();
    particles = [];
    for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }


  function update() {
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      // Gravitational lensing
      for (var a = 0; a < attractors.length; a++) {
        var att = attractors[a];
        var dx = att.x - p.x;
        var dy = att.y - p.y;
        var distSq = dx * dx + dy * dy;
        var dist = Math.sqrt(distSq);

        if (dist > 20 && dist < 350) {
          var force = att.mass * ATTRACTOR_STRENGTH / (distSq * 0.0008 + 1);
          p.vx += dx / dist * force;
          p.vy += dy / dist * force;
        }
      }

      // Damping
      p.vx *= 0.998;
      p.vy *= 0.998;

      // Clamp
      var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 0.35) {
        p.vx = (p.vx / speed) * 0.35;
        p.vy = (p.vy / speed) * 0.35;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.twinklePhase += p.twinkleSpeed;

      // Wrap
      if (p.x < -60) p.x = width + 60;
      if (p.x > width + 60) p.x = -60;
      if (p.y < -60) p.y = height + 60;
      if (p.y > height + 60) p.y = -60;
    }
  }


  function draw() {
    ctx.clearRect(0, 0, width, height);

    // --- Layer 1: Nebula glow around attractors ---
    for (var a = 0; a < attractors.length; a++) {
      var att = attractors[a];
      var radius = 180 + att.mass * 80;
      var grad = ctx.createRadialGradient(att.x, att.y, 0, att.x, att.y, radius);
      grad.addColorStop(0, 'rgba(59, 130, 196, 0.04)');
      grad.addColorStop(0.4, 'rgba(80, 120, 200, 0.02)');
      grad.addColorStop(1, 'rgba(59, 130, 196, 0)');
      ctx.beginPath();
      ctx.arc(att.x, att.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // --- Layer 2: Cosmic web filaments ---
    ctx.lineWidth = 0.6;
    for (var i = 0; i < particles.length; i++) {
      var pi = particles[i];
      for (var j = i + 1; j < particles.length; j++) {
        var pj = particles[j];
        var dx = pi.x - pj.x;
        var dy = pi.y - pj.y;
        var distSq = dx * dx + dy * dy;

        if (distSq < CONNECTION_DIST * CONNECTION_DIST) {
          var dist = Math.sqrt(distSq);
          var proximity = 1 - dist / CONNECTION_DIST;
          // Brighter connections when both endpoints are bright
          var boost = (pi.bright || pj.bright) ? 1.8 : 1;
          var alpha = proximity * 0.12 * boost;

          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.strokeStyle = 'hsla(215, 55%, 50%, ' + alpha.toFixed(4) + ')';
          ctx.stroke();
        }
      }
    }

    // --- Layer 3: Stars ---
    for (var k = 0; k < particles.length; k++) {
      var p = particles[k];
      var twinkle = 0.65 + 0.35 * Math.sin(p.twinklePhase);
      var alpha = p.opacity * twinkle;
      var color = 'hsla(' + p.hue + ', ' + p.sat + '%, 65%, ';

      // Core dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = color + alpha.toFixed(4) + ')';
      ctx.fill();

      // Glow halo for all particles (stronger for bright ones)
      var glowRadius = p.bright ? p.size * 5 : p.size * 2.5;
      var glowAlpha = p.bright ? alpha * 0.15 : alpha * 0.06;
      var glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
      glow.addColorStop(0, color + glowAlpha.toFixed(4) + ')');
      glow.addColorStop(1, color + '0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Cross-shaped diffraction spike on bright stars
      if (p.bright && alpha > 0.4) {
        var spikeLen = p.size * 8;
        var spikeAlpha = alpha * 0.12;
        ctx.strokeStyle = color + spikeAlpha.toFixed(4) + ')';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p.x - spikeLen, p.y);
        ctx.lineTo(p.x + spikeLen, p.y);
        ctx.moveTo(p.x, p.y - spikeLen);
        ctx.lineTo(p.x, p.y + spikeLen);
        ctx.stroke();
      }
    }
  }


  function loop(timestamp) {
    animId = requestAnimationFrame(loop);
    if (timestamp - lastTime < frameInterval) return;
    lastTime = timestamp;
    update();
    draw();
  }


  // Pause when tab hidden
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      lastTime = performance.now();
      animId = requestAnimationFrame(loop);
    }
  });


  // Debounced resize
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });


  init();
  animId = requestAnimationFrame(loop);

})();
