---
title: 文章
icon: fas fa-newspaper
order: 3
---

<p class="orinda-page-intro">记录技术实践、行业观察与学术研究。文章按发布日期排列，可通过分类、标签与归档继续浏览。</p>

<div class="orinda-post-list">
{% for post in site.posts %}
  <a class="orinda-post" href="{{ post.url | relative_url }}">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y.%m.%d' }}</time>
    <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 120 }}</p>
    </div>
    <span class="orinda-post-arrow" aria-hidden="true">↗</span>
  </a>
{% else %}
  <p>文章正在整理中。</p>
{% endfor %}
</div>

<p><a href="{{ '/categories/' | relative_url }}">按分类浏览</a> · <a href="{{ '/tags/' | relative_url }}">按标签浏览</a> · <a href="{{ '/archives/' | relative_url }}">按时间归档</a></p>

