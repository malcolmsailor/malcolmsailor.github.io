---
layout: page
title: Code
permalink: /code/
---
{% for project in site.coding_projects %}
# [{{ project.title }}]({{ project.external_url }})

{{ project.content }}
{% endfor %}
