## Featured projects

Check these out! (the other project posts aren't complete yet)

[Quad trees for optimized gravity simulation]({% post_url 2022-10-26-quad-tree %})
[Optimizing n-body gravity simulation]({% post_url 2022-10-27-barnes-hut-algorithm %})
[2D Character collisions in Polar Coordinates]({% post_url 2023-4-7-2d-polar-collisions %})

## All Projects (ordered by date)

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
