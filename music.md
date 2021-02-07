---
layout: page
title: Music
permalink: /music/
---

<div class="trigger">
  {% for genre in site.music_genres %}
    {% assign genre_id = genre.title | downcase | replace: " ", "-" %}
    <a class="page-link" href="#{{ genre_id }}">{{ genre.title }}</a>
  {% endfor %}
</div>

Some text goes here.

{% for genre in site.music_genres %}
# {{ genre.title }}

{{ genre.content }}

  {% for work in site.music_works %}
    {% if work.genre == genre.title %}

#### {{ work.title }}

{{ work.content }}

{% if work.bandcamp %}
  <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/{% if work.bandcamp.album_num %}album={{ work.bandcamp.album_num }}{% else %}track={{ work.bandcamp.track_num }}{% endif %}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>
    <a href="{{ work.bandcamp.url }}">
      {{work.bandcamp.title}}
    </a>
  </iframe>
{% endif %}
{% if work.youtube %}
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/{{ work.youtube }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{% endif %}

    {% endif %}
  {% endfor %}
{% endfor %}
