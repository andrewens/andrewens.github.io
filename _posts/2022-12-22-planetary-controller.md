---
layout: post
title: "walk on a round 3D planet with gravity"
tags: ["ship crew rpg", "technical"]
thumbnail: https://storage.googleapis.com/test-bucket-24385982346/PlanetaryController/FreeCharacterRotation.gif
---

## About

This is research for [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}).

Before I made [Tunnel Wars]({% post_url 2023-1-2-tunnel-wars-v1 %}), I originally wanted to make Ship Crew RPG in 3 dimensions. (I decided on 2D to simplify the controls for the player and make development simpler).

This demo is a character controller for a round planet with gravity, like Super Mario World. I accidentally invented a piece of math called _parallel transporting a vector_ to make this, which I later learned is an important concept in Einstein's general relativity and coordinate geometry with manifolds -- measuring the curvature of space and all that.

The controller works by rotating the character's coordinate space so the minimum amount such that it is always tangent to the sphere where the character is standing.

Then, the character's movement and orientation are defined in terms of that tangential coordinate frame.

## Gifs

![FreeCharacterRotation.gif](https://storage.googleapis.com/test-bucket-24385982346/PlanetaryController/FreeCharacterRotation.gif)

_Final iteration._

![MouseLock.gif](https://storage.googleapis.com/test-bucket-24385982346/PlanetaryController/MouseLock.gif)
_A mouselock variant_

![NoCharacterTurning.gif](https://storage.googleapis.com/test-bucket-24385982346/PlanetaryController/NoCharacterTurning.gif)

_I had to manually make the character face in the direction of the camera. This is what it looked like before I did that._

![FailedAttemptNo2.gif](https://storage.googleapis.com/test-bucket-24385982346/PlanetaryController/FailedAttemptNo2.gif)

_My first few attempts were completely nonsensical lol_

![FailedAttemptNo1.gif](https://storage.googleapis.com/test-bucket-24385982346/PlanetaryController/FailedAttemptNo1.gif)

_This is what my first attempt looked like_

<br><br>

## Experimenting with a spaceship controller

A big problem I anticipate in [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}) is that controlling a spaceship in realistic gravitational fields may be unintuive. So I've worked on developing intuitive spaceship controls, so that flying a spaceship is closer to feeling like Star Wars than Apollo 13. Even in realistic gravity.

I've done more work since this demo [here.]({% post_url 2023-5-7-2d-physics-engine %})

## Gifs

![FastAndUnstable.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/FastAndUnstable.gif)
![MirrorCollision.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/MirrorCollision.gif)
![SecondPersonCrash.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/SecondPersonCrash.gif)
![SatisfyingCompleteCircle.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/SatisfyingCompleteCircle.gif)
![UmWhat.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/UmWhat.gif)
![OrbitalSpaghetti.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/OrbitalSpaghetti.gif)
![SlowAndControlled.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/SlowAndControlled.gif)
![ThirdPersonCrash.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/ThirdPersonCrash.gif)
