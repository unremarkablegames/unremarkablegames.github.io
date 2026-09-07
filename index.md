---
title: "Home"
description: "A couple of people in Minnesota making games we want to play. Meet Brinebound, Neon Labyrinth, and Scot's Adventure Racing."
---

<section class="home-hero">
  <div class="hero-text">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Independent. Minnesota-made.</p>
    <h1>Small studio.<br>Long nights.<br><span>Good games.</span></h1>
    <p class="hero-copy">We're a couple of people making games we want to play. A little strange, a little nostalgic, and made with care.</p>
    <a href="/games" class="btn btn-light">Find your next game <span aria-hidden="true">→</span></a>
  </div>
  <figure class="hero-scene"><img src="/assets/img/midnight-studio.svg" width="480" height="400" alt="Pixel art of a quiet studio at night: a glowing monitor, a mug, and a purple city skyline outside the window."><figcaption><span aria-hidden="true">●</span> Somewhere in Minnesota, after dark.</figcaption></figure>
</section>

<div class="studio-promise"><span>No ads.</span><span>No in-app purchases.</span><span>Just play.</span><span class="promise-decoration" aria-hidden="true">✦ &nbsp; ✦ &nbsp; ✦</span></div>

<section class="home-section" aria-labelledby="released-games">
  <div class="section-heading"><div><p class="eyebrow">Pick something up</p><h2 id="released-games">On the game shelf</h2></div><a href="/games">All games <span aria-hidden="true">↗</span></a></div>
  {% include game-shelf.html %}
</section>

<section class="studio-note"><span class="section-index" aria-hidden="true">PLAYER 1<br>PLAYER 2</span><div><p class="eyebrow">Hi. We're Karl and Roslyn.</p><h2>Unremarkable name.<br>Personal projects.</h2><p>We make the games, fix the bugs, and read the emails. This is our studio, and these are the things we like making.</p><a href="/crew">Meet the crew <span aria-hidden="true">↗</span></a></div></section>

<section class="home-section latest-note"><div class="section-heading"><div><p class="eyebrow">From the workbench</p><h2>A few notes</h2></div><a href="/notes">All notes ↗</a></div>{% assign latest = site.notes | sort: "date" | reverse | first %}{% if latest %}<a class="note-feature" href="{{ latest.url }}"><span>{{ latest.date | date: "%b %d, %Y" }}</span><h3>{{ latest.title }}</h3><span aria-hidden="true">↗</span></a>{% endif %}</section>

{% include signup.html %}
