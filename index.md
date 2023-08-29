## Featured projects

Check these out! (the other project posts aren't complete yet)

{% post_url 2022-10-26-quad-tree.md %}
{% post_url 2022-10-27-barnes-hut-algorithm.md %}
{% post_url 2023-4-7-2d-polar-collisions.md %}

## All Projects (ordered by date)

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
