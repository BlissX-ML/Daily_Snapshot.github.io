---
layout: default
title: Git_notes
permalink: /git_related/
---
<h1>Git Related Notes</h1>
<ul>
{% for post in site.git_related %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
