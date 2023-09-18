# Andrew's html sandbox

Currently testing making galleries that have text.

{% assign beatles = "John, Paul, George, Ringo" | split: ", " %}

<ul class="gallery">
{% for member in beatles %}
  <p class="gallery-img">{{ member }}</p>
{% endfor %}
</ul>
