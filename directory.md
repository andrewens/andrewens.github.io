# Project Directory

Projects are organized by tags (posts are sometimes duplicated). See [Portfolio]({% link index.md %}) for project thumbnail gifs.

{% for tag in site.tags %}
{% assign t = tag | first %}
{% assign posts = tag | last %}

{{ t | downcase }}

<ul>
{% for post in posts %}
  {% if post.tags contains t %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
  </li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}

[Mystery link]({% link test.md %})
