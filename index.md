## All projects

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

## Projects, by thumbnail

Click on a GIF to view that project.

<ul class="gallery">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">
      <img class="gallery-img" src="{{ post.thumbnail }}" alt="{{ post.title }}"/>
    </a>
  </li>
{% endfor %}
</ul>
