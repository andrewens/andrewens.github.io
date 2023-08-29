---
layout: post
title: "(Bad) Hard Particle Collisions"
---

## About

While researching physics for my [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}) project, I explored collision mechanics for hard spheres. This was months before I properly implemented [2d character collisions]({% post_url 2023-4-7-2d-polar-collisions %}), so I lacked a lot of context for how to implement collisions. The result was pretty buggy and looked more like a simulation of molecular particle interactions. I decided that other things like gravity simulation were more important, so I moved on.

> *This post is still a work in progress! I'll add more soon :)*

## Gifs

This model is dated 11/30...
![sphere-collisions-3.gif](https://drive.google.com/uc?id=1yAQmYNCaUNJr8X738jCMMXYyF2ElGKwL&export=download)
![how-to-fix-a-bug.gif](https://drive.google.com/uc?id=1hgJCZxGzqbfxE3wYpXTP9gpAOSnb1y3Q&export=download)
![sphere-collisions-2.gif](https://drive.google.com/uc?id=1RaqL74H1PZxtlNpMczLzZXRQYfdvRooZ&export=download)
![sphere-collisions-1.gif](https://drive.google.com/uc?id=1E8bYsJIQE7YXonDl5YSQrHT7LjgD9hLU&export=download)

But this demo is dated 10/28. I don't think this demo uses the collision model up above. They're related though so I'm keeping them in the same post.

![Deterioration.gif](https://drive.google.com/uc?id=1TPfGdLy55uD_avAqoyS4GsFO6F4_FJi8&export=download)
![BuggyCollision.gif](https://drive.google.com/uc?id=1m-Sr6d7NpO4RnKUzffYq0k65lIRZc5OE&export=download)
![WhenParticlesAreInsideEachOther.gif](https://drive.google.com/uc?id=1M1X3J6PLC4a9ABcCJG-w1WRhn9FHvUxu&export=download)
![BilliardsBreak.gif](https://drive.google.com/uc?id=1Z6DsWk8sIqpu1cTBVuqLhk0qrtYIn9rF&export=download)
![FewParticles.gif](https://drive.google.com/uc?id=1fjDquq_oKJLYTRXBMaPSpS2nB7LYtxW5&export=download)
![LotsOfParticles.gif](https://drive.google.com/uc?id=1pldUGYKGIxHfWkf3Sbfv8jI64XIGIhOJ&export=download)
