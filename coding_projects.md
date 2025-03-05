---
layout: ms_page
title: Code
permalink: /code/
---
<!-- We reverse so higher numbers appear first. -->
{% assign sorted_projects = site.coding_projects | sort: "sort_order" | reverse %}
{% for project in sorted_projects %}
# {{ project.title }}

{{ project.content }}
{% endfor %}
