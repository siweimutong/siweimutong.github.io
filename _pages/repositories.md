---
layout: page
permalink: /projects/
title: Projects
title_zh: 项目
icon: '<i class="fa-solid fa-code"></i>'
description: My open-source projects.
description_zh: 我的开源项目
nav: true
nav_order: 3
---

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
