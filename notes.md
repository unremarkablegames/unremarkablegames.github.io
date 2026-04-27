---
title: "Notes"
---

## Notes

{% assign sorted_notes = site.notes | sort: "date" | reverse %}
{% for note in sorted_notes %}
- [{{ note.title }}]({{ note.url }}) <small>{{ note.date | date: "%B %-d, %Y" }}</small>
{% endfor %}
