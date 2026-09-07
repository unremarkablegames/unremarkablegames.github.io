---
title: "Notes"
---

# Notes

<div markdown="0">
{% assign sorted_notes = site.notes | sort: "date" | reverse %}
{% for note in sorted_notes %}
<div class="game-card list-card">
{% if note.thumbnail %}<img class="note-img" src="{{ note.thumbnail }}" width="160" height="90" loading="lazy" alt="{{ note.title }}">{% endif %}
<div>
<h2><a href="{{ note.url }}" class="stretched-link">{{ note.title }}</a></h2>
<small>{{ note.date | date: "%B %-d, %Y" }}</small>
{% if note.description %}<p class="note-description">{{ note.description }}</p>{% endif %}
</div>
</div>
{% endfor %}
</div>
