# Portfolio

Click on a gif to see more about that project.

Or, see all projects listed by [tags.]({% link directory.md %})

<ul class="gallery">
{% for post in site.posts %}
  <a href="{{ post.url }}">
    <img class="gallery-img" src="{{ post.thumbnail }}" alt="{{ post.title }}"/>
  </a>
{% endfor %}
</ul>
