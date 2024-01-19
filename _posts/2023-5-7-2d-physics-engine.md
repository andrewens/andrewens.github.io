---
layout: post
title: "ECS-style 2D Physics / Rendering Engine in ROBLOX"
tags: ["ship crew rpg", "technical"]
thumbnail: https://lh3.google.com/u/0/d/13xvpHDxZ-yRQPHQMF1DmwA6b-gIclKpj
---

## About

I thought it might be more elegant if I developed my own physics engine for [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}), so I experimented with gravitational physics and collision mechanics using an Entity-Component-System framework. I was able to build gameplay features much faster using ROBLOX's physics and constraints system, so I have stopped working on my own engine. 

## Gifs

Using Separating Axis Theorem to detect overlap between 2D rectangles

![SATOverlapDetection.gif](https://lh3.google.com/u/0/d/13Qm86_EdjqT5HnuUXP4iKBflJRewZZS8)

I never found a good source on how to resolve these collisions, so I developed it myself. As it stands, there is a common edge case where the colliding body gets pushed too far. I stopped working on the engine before I could resolve that bug.

![BetterSATCollisionResolution.gif](https://lh3.google.com/u/0/d/1vGuZ4VRhFGYcKtnEcmW2AoNmieqcIsD5)
![BuggySATCollisionResolution.gif](https://lh3.google.com/u/0/d/1H6KUj0dww7kqlRIrjx7YEuLWfDyVV8mQ)

This is what bad collision mechanics look like :)

![CollisionsAndGravity.gif](https://lh3.google.com/u/0/d/1odEvqUhK58ksvWFtdRcK4mER5_TJX0aV)
![BuggyCollisionsAndGravity.gif](https://lh3.google.com/u/0/d/1AYMZiF9DuihqKxWh3XcEHzYfX_1Ap2NF)


The ships in these gifs are applying forces to stay at the same gravitational potential. It's analogous to using rockets to never fall to the ground, but more generalized.

![RedOrbit.gif](https://lh3.google.com/u/0/d/13xvpHDxZ-yRQPHQMF1DmwA6b-gIclKpj)
![OrbitalSurfing.gif](https://lh3.google.com/u/0/d/1nyOEOW1k8hX8_G_4VPsNzIjZNqP4_ntd)
![FlyingShipAroundPlanets.gif](https://lh3.google.com/u/0/d/1sUO7xc8nNUKbo_P9Y8rSJi4ES_PsWSnN)
![FlyBetweenCollidingPlanets.gif](https://lh3.google.com/u/0/d/17XZtU35i1i5aVw1hssILzBGb7nVi4iWM)

I don't have a good gif of the transition, but the inside of a planet is a separate environment than the solar system, and objects can enter/exit the planet. The white background meant you were "inside" the planet.

![GravityInsidePlanet.gif](https://lh3.google.com/u/0/d/1FDJcdC9JBt7mC_Fqv0ZkDd58MdTZBseF)

Camera controls can be decoupled from your spaceship

![CameraControls.gif](https://lh3.google.com/u/0/d/1fR9KH6bteAqNdxJQnYle42JvshLjYo2I)

