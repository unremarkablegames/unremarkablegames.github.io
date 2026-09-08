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
</section>

<div class="studio-promise"><span>No ads.</span><span>No in-app purchases.</span><span>Just play.</span><span class="promise-decoration" aria-hidden="true">✦ &nbsp; ✦ &nbsp; ✦</span></div>

<section class="home-section" aria-labelledby="released-games">
  <div class="section-heading"><div><p class="eyebrow">Pick something up</p><h2 id="released-games">On the game shelf</h2></div><a href="/games">All games <span aria-hidden="true">↗</span></a></div>
  {% include game-shelf.html %}
</section>

<section class="studio-note" aria-labelledby="about-karl">
  <span class="section-index" aria-hidden="true">OFF<br>SCREEN</span>
  <div>
    <p class="eyebrow">Behind the games</p>
    <h2 id="about-karl">Hi. I'm Karl.</h2>
    <p>I'm the unremarkable part. I run the studio in Minnesota, with help from my daughter Roslyn.</p>
    <p>I'm a Christian. That's inseparable from how I see the world and what I make.</p>
    <p>Alongside the arcade games, I'm working on <a href="/games/cybertank2k">CyberTank2K</a>, my first game with a story running through it.</p>
    <a href="/crew">More about the studio <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section latest-note"><div class="section-heading"><div><p class="eyebrow">From the workbench</p><h2>Latest note</h2></div><a href="/notes">All notes ↗</a></div>{% assign latest = site.notes | sort: "date" | reverse | first %}{% if latest %}<a class="note-feature" href="{{ latest.url }}"><span>{{ latest.date | date: "%b %d, %Y" }}</span><h3>{{ latest.title }}</h3><span aria-hidden="true">↗</span></a>{% endif %}</section>

{% include signup.html %}
