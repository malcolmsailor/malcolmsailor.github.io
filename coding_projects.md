---
layout: ms_page
title: Code
permalink: /code/
---
{% for project in site.coding_projects %}
# {{ project.title }}

{{ project.content }}
{% endfor %}
