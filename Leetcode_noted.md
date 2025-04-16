---
layout: default
title: Leetcode_noted
permalink: /leetcode-75/
---

<fieldset class="specialbox">
  <legend>LeetCode 75</legend>

  <script>
    const leetcodePosts = [
      {% for post in site.leetcode_seventy_five %}
        { title: "{{ post.title }}", url: "{{ post.url | relative_url }}" }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ];
  </script>

  <ul></ul>

  <div class="controlButtons">
    <button onclick="prevPage()" class="leftArrows"><i class="fa-solid fa-arrow-left"></i></button>
    <div class="pagesDisplay">
      Pages: <span class="startPages"></span> / <span class="endPages"></span>
    </div>
    <button onclick="nextPage()" class="rightArrows"><i class="fa-solid fa-arrow-right"></i></button>
  </div>
</fieldset>

<script src="{{ '/assets/js/leetcode-pagination.js' | relative_url }}"></script>


