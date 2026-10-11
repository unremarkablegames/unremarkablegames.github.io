---
title: "Home"
description: "Independent games from Karl McClendon in Minnesota. Play Brinebound, Neon Labyrinth, and Scot's Adventure Racing, or see what's in development."
---

<section class="home-hero">
  <div class="hero-text">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Independent. Minnesota-made.</p>
    <h1>Small Studio.<br>Big Pixels.<br><span>Good Games.</span></h1>
    <p class="hero-copy">I make games I want to play. A little strange, a little nostalgic, and made with care.</p>
    <a href="/games" class="btn btn-light">Find your next game <span aria-hidden="true">→</span></a>
  </div>
  <figure class="hero-scene">
    <img src="/assets/img/home-hero-studio-v2.png" width="200" height="240" alt="Pixel art view of Karl's studio desk, with dual monitors, laptop, controller, and blue nighttime lighting.">
  </figure>
</section>

<div class="studio-promise"><span>No ads.</span><span>No in-app purchases.</span><span>Just play.</span><span class="promise-decoration" aria-hidden="true">✦ &nbsp; ✦ &nbsp; ✦</span></div>

<section class="home-section" aria-labelledby="released-games">
  <div class="section-heading"><div><p class="eyebrow">Pick something up</p><h2 id="released-games">On the game shelf</h2></div><a href="/games">All games <span aria-hidden="true">↗</span></a></div>
  {% include game-shelf.html %}
</section>

<section class="home-section" aria-labelledby="prototypes">
  <div class="section-heading"><div><p class="eyebrow">On the workbench</p><h2 id="prototypes">Prototypes</h2></div></div>
  <article class="prototype prototype-songweaver">
    <a class="prototype-preview" href="/prototypes/songweaver/" tabindex="-1" aria-hidden="true"><img src="/assets/img/songweaver-preview.jpg" width="144" height="96" alt="" loading="lazy"></a>
    <div><h3><a href="/prototypes/songweaver/">Songweaver <span aria-hidden="true">↗</span></a></h3><p>Walk through an oil-pastel village. An experiment in painted environments, lighting, and animated 3D characters.</p><a class="btn btn-light" href="/prototypes/songweaver/">Open prototype →</a><p class="platform">Browser · Visual prototype · Click or tap to walk</p></div>
  </article>
  <article class="prototype">
    <img src="/assets/img/voidstone_icon.webp" width="96" height="96" alt="" loading="lazy">
    <div><h3><a href="/games/voidstone">Voidstone <span aria-hidden="true">↗</span></a></h3><p>A prototype for an RPG rendered entirely in text.</p><span class="platform">Past prototype</span></div>
  </article>
</section>

<section class="studio-note" aria-labelledby="about-karl">
  <span class="section-index" aria-hidden="true">OFF<br>SCREEN</span>
  <div>
    <p class="eyebrow">Behind the games</p>
    <h2 id="about-karl">Hi. I'm Karl.</h2>
    <p>I'm the unremarkable part. I run the studio in Minnesota, with help from my daughter Roslyn.</p>
    <p>Alongside the arcade games, I'm working on <a href="/games/cybertank2k">CyberTank2K</a>, my first game with a story running through it.</p>
    <a href="/crew">More about the studio <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section latest-note"><div class="section-heading"><div><p class="eyebrow">From the workbench</p><h2>Latest note</h2></div><a href="/notes">All notes ↗</a></div>{% assign latest = site.notes | sort: "date" | reverse | first %}{% if latest %}<a class="note-feature" href="{{ latest.url }}"><span>{{ latest.date | date: "%b %d, %Y" }}</span><h3>{{ latest.title }}</h3><span aria-hidden="true">↗</span></a>{% endif %}</section>

{% include signup.html %}
