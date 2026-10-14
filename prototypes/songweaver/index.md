---
title: Songweaver prototypes
permalink: /prototypes/songweaver/
---

<p><a href="/prototypes/">← All projects</a></p>
<h1>Songweaver prototypes</h1>
<p class="page-intro">Individual experiments for Songweaver. These test specific ideas; they aren't a demo of the game.</p>

{% for prototype in site.data.songweaver_prototypes %}
<article class="prototype prototype-songweaver">
  <a class="prototype-preview" href="{{ prototype.url }}" tabindex="-1" aria-hidden="true"><img src="{{ prototype.image }}" width="600" height="400" alt="" loading="lazy"></a>
  <div><p class="eyebrow">{{ prototype.type }}</p><h2><a href="{{ prototype.url }}">{{ prototype.title }} →</a></h2><p>{{ prototype.description }}</p><a class="btn btn-light" href="{{ prototype.url }}">{{ prototype.link_label | default: 'Open visual prototype' }} →</a><p class="platform">{{ prototype.controls | default: 'Browser · Click or tap to walk' }}</p></div>
</article>
{% endfor %}
