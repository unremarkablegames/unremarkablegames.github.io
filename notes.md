---
title: "Notes"
---

## Notes

<div markdown="0">
{% assign sorted_notes = site.notes | sort: "date" | reverse %}
{% for note in sorted_notes %}
<div class="game-card d-flex flex-row align-items-center gap-3 p-3 mb-3 rounded-3 position-relative">
{% if note.thumbnail %}<img class="note-img" src="{{ note.thumbnail }}" alt="{{ note.title }}">{% endif %}
<div>
<h3><a href="{{ note.url }}" class="stretched-link">{{ note.title }}</a></h3>
<small>{{ note.date | date: "%B %-d, %Y" }}</small>
{% if note.description %}<p class="mt-2 mb-0">{{ note.description }}</p>{% endif %}
</div>
</div>
{% endfor %}
</div>
