## Featured projects

These are my favorite posts:

* [Quad trees for optimized gravity simulation]({% post_url 2022-10-26-quad-tree %})
* [Optimizing n-body gravity simulation]({% post_url 2022-10-27-barnes-hut-algorithm %})
* [2D Character collisions in Polar Coordinates]({% post_url 2023-4-7-2d-polar-collisions %})

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
