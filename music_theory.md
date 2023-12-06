---
layout: ms_page
title: Research
permalink: /research/
---

I'm currently a PhD candidate in music theory at Yale University. My dissertation-in-progress involves the application of deep learning to music theory. I train masked language models for tasks in the analysis of harmony and dissonance treatment. I then use these models to perform a corpus study of a wide swath of Classical music.

I have many other theoretical and musical interests as well. You will find a selection of my publications, conference papers, and other work below.

{% include hide_and_show_header.html %}
{% assign years = site.music_theory | group_by: "year" %}

{% assign other_categories = site.music_theory | group_by: "research_category" %}
{% assign research_categories = other_categories | concat: years %}
{% for research_category in research_categories reversed %}
  {% unless research_category.name == "" %}

  <div class="research-category-wrapper">
    <p class="research-category">{{ research_category.name }}</p>
    {% for work in research_category.items %}
      {% assign work_id = work.title | slugify %}
      {% capture item_content %} 
        {% for download in work.downloads %}
          <a href="/assets/{{ download.path }}"
            >Download{% if download.text %} {{ download.text }}{% endif %}</a
          ><br />
        {% endfor %} 
        {% if work.external_link %}
          <a href="{{ work.external_link.url }}">{{ work.external_link.text }}</a> <br/>
        {% endif %}
        {{ work.content }} 
        {% if work.abstract %}
          <div class="abstract">
            <p><span class="item_title">Abstract</span>: {{ work.abstract }}</p>
          </div>
        {% endif %}
        {% include references.html id=work_id title=work.title %}
        {% if work.has_imgs %}
          <div class="selected-figures-wrapper">
            <div class="selected-figures-content">
              <h4 class="selected-figures-header">
                Selected figure{% if work.has_imgs.size > 1 %}s{% endif %}
              </h4>
              {% for image in work.has_imgs %}
              <img src="/assets/images/{{ image }}" alt="{{ work.title }} image" class="research_image" />
              {% endfor %}
            </div>
          </div>
        {% endif %} 
      {% endcapture %} 
      {% include hide_and_show_item.html title=work.title
      subheading=work.subheading content=item_content item_id=work_id content_class="research_content"
      %} 
    {% endfor %}
  </div>
  {% endunless %} 
{% endfor %}
