---
layout: page
title: Students
title_zh: 学生
icon: '<i class="fa-solid fa-user-graduate"></i>'
permalink: /projects/
description: From the Institute of Architecture, Beijing University of Technology
description_zh: 北京工业大学体系结构研究所
nav: true
nav_order: 3
display_categories: [Current, Alumni]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">
      {% if category == 'Current' %}<span class="lang-en">{{ category }}</span><span class="lang-zh">在读学生</span>
      {% elsif category == 'Alumni' %}<span class="lang-en">{{ category }}</span><span class="lang-zh">毕业生</span>
      {% else %}<span class="lang-en">{{ category }}</span><span class="lang-zh">{{ category }}</span>{% endif %}
    </h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
