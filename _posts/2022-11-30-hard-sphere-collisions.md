---
layout: post
title: "(Bad) Hard Particle Collisions"
tags: ["ship crew rpg", "technical"]
thumbnail: https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/(Bad)%20Particle%20Collisions/BilliardsBreak.gif
---

## About

While researching physics for my [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}) project, I explored collision mechanics for hard spheres. This was months before I properly implemented [2d character collisions]({% post_url 2023-4-7-2d-polar-collisions %}), so I lacked a lot of context for how to implement collisions. The result was pretty buggy and looked more like a simulation of molecular particle interactions. I decided that other things like gravity simulation were more important, so I moved on.

## Gifs

This model is dated 11/30...
![sphere-collisions-3.gif](https://storage.googleapis.com/test-bucket-24385982346/SphereCollisions/sphere-collisions-3.gif)
![how-to-fix-a-bug.gif](https://storage.googleapis.com/test-bucket-24385982346/SphereCollisions/how-to-fix-a-bug.gif)
![sphere-collisions-2.gif](https://storage.googleapis.com/test-bucket-24385982346/SphereCollisions/sphere-collisions-2.gif)
![sphere-collisions-1.gif](https://storage.googleapis.com/test-bucket-24385982346/SphereCollisions/sphere-collisions-1.gif)

But this demo is dated 10/28. I don't think this demo uses the collision model up above. They're related though so I'm keeping them in the same post.

![Deterioration.gif](<https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/(Bad)%20Particle%20Collisions/Deterioration.gif>)
![BuggyCollision.gif](<https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/(Bad)%20Particle%20Collisions/BuggyCollision.gif>)
![WhenParticlesAreInsideEachOther.gif](<https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/(Bad)%20Particle%20Collisions/WhenParticlesAreInsideEachOther.gif>)
![BilliardsBreak.gif](<https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/(Bad)%20Particle%20Collisions/BilliardsBreak.gif>)
![FewParticles.gif](<https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/(Bad)%20Particle%20Collisions/FewParticles.gif>)
![LotsOfParticles.gif](<https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/(Bad)%20Particle%20Collisions/LotsOfParticles.gif>)
