---
layout: post
title: "ECS-style 2D Physics / Rendering Engine in ROBLOX"
tags: ["ship crew rpg", "technical"]
thumbnail: https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/RedOrbit.gif
---

## About

I thought it might be more elegant if I developed my own physics engine for [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}), so I experimented with gravitational physics and collision mechanics using an Entity-Component-System framework. I was able to build gameplay features much faster using ROBLOX's physics and constraints system, so I have stopped working on my own engine. 

## Gifs

Using Separating Axis Theorem to detect overlap between 2D rectangles

![SATOverlapDetection.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/SATOverlapDetection.gif)

I never found a good source on how to resolve these collisions, so I developed it myself. As it stands, there is a common edge case where the colliding body gets pushed too far. I stopped working on the engine before I could resolve that bug.

![BetterSATCollisionResolution.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/BuggySATCollisionResolution.gif)
![BuggySATCollisionResolution.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/BuggySATCollisionResolution.gif)

This is what bad collision mechanics look like :)

![CollisionsAndGravity.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/CollisionsAndGravity.gif)
![BuggyCollisionsAndGravity.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/BuggyCollisionsAndGravity.gif)


The ships in these gifs are applying forces to stay at the same gravitational potential. It's analogous to using rockets to never fall to the ground, but more generalized.

![RedOrbit.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/RedOrbit.gif)
![OrbitalSurfing.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/OrbitalSurfing.gif)
![FlyingShipAroundPlanets.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/FlyingShipAroundPlanets.gif)
![FlyBetweenCollidingPlanets.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/FlyBetweenCollidingPlanets.gif)

I don't have a good gif of the transition, but the inside of a planet is a separate environment than the solar system, and objects can enter/exit the planet. The white background meant you were "inside" the planet.

![GravityInsidePlanet.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/GravityInsidePlanet.gif)

Camera controls can be decoupled from your spaceship

![CameraControls.gif](https://storage.googleapis.com/test-bucket-24385982346/2d%20Physics%20Engine/CameraControls.gif)

