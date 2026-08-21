---
layout: page
permalink: /publications/
title: Publications
title_zh: 论文
icon: '<i class="fa-solid fa-book"></i>'
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<!-- {% bibliography -T {{reference}} %} -->
{% bibliography -T bib_simple %}

</div>
