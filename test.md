# Andrew's html sandbox

Currently testing making galleries that have text.

{% assign beatles = "John, Paul, George, Ringo" | split: ", " %}

<ul class="gallery">
{% for member in beatles %}
  <p class="gallery-img">{{ member }}</p>
{% endfor %}
</ul>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris cursus, fermentum nunc in, convallis metus. Donec in varius arcu, cursus vehicula urna. Fusce nec porttitor leo, id efficitur nibh. Sed accumsan arcu ac nunc cursus sagittis. Etiam semper in urna vel ultrices. Donec odio orci, ultrices non tempus eu, egestas eget mauris. Sed porta nunc in pretium dictum. Nam dictum dignissim convallis. Proin lobortis id metus nec convallis. Etiam porta tellus libero, a tincidunt libero malesuada nec.

Aliquam interdum, ligula eu cursus tincidunt, turpis arcu volutpat neque, sed porta mi libero eu turpis. Sed placerat feugiat velit, vel lacinia lacus rutrum id. Pellentesque sed venenatis neque. Morbi a pellentesque sem. Pellentesque aliquet velit eu ullamcorper convallis. Donec non interdum libero. Sed eleifend magna justo, eu tincidunt risus ullamcorper quis. Quisque a mi a lorem commodo vulputate. Aliquam scelerisque massa vel vestibulum condimentum. Cras condimentum sed sapien eget dictum. In lorem est, lobortis quis pharetra nec, bibendum nec libero. Aenean rutrum sodales leo, iaculis fermentum tellus bibendum ac. Pellentesque fringilla urna lectus.

Duis venenatis ex maximus, mollis sem ut, faucibus nunc. Pellentesque auctor ut nunc sit amet fringilla. Nullam eget sagittis nulla. Pellentesque varius ex nibh, et elementum sem mattis non. Praesent et lorem at ex sodales placerat tempus vel orci. Vivamus pharetra tortor ut nibh sollicitudin, quis molestie nisl dictum. Cras eu laoreet dui. Nullam laoreet blandit ultricies.

Aenean in ex vestibulum, pretium libero a, convallis lectus. Maecenas efficitur facilisis eros in molestie. Nullam sed neque consectetur, vehicula dolor sit amet, scelerisque nisi. Mauris molestie nunc eget diam gravida, non convallis sapien tincidunt. Fusce quis sagittis nisl, vel efficitur nisi. Praesent sed nunc justo. Donec maximus fringilla erat, quis posuere nibh ultricies nec. Mauris sollicitudin rhoncus quam vitae luctus. Nullam at finibus ligula, vel fringilla est. Morbi vel nisl molestie, pharetra nisl id, rhoncus ligula. Etiam leo erat, pharetra sed venenatis vel, auctor id odio. Quisque in finibus neque. Curabitur eleifend nulla eget nisi vulputate, et iaculis urna viverra. Sed cursus, orci quis eleifend efficitur, felis libero ullamcorper elit, eget hendrerit purus risus in ex. Proin lobortis at dui nec volutpat. Pellentesque consectetur, est a sollicitudin commodo, dolor dui vehicula magna, id iaculis arcu mi quis tortor.

Suspendisse potenti. Sed molestie purus et leo accumsan, sed viverra eros maximus. Sed bibendum diam ut sodales auctor. Duis eu gravida ligula. Donec pharetra mauris augue, vel congue tellus dictum quis. Aenean scelerisque mi ut diam placerat, mollis euismod odio mattis. Proin in tristique sem. Sed id leo eu arcu dictum elementum. Vestibulum sagittis odio urna, quis pretium arcu scelerisque nec. In bibendum fringilla erat, nec rutrum odio accumsan ac. Mauris ut efficitur massa. Donec dictum vitae justo a accumsan. Nam condimentum ac nibh ac semper.
