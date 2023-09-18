---
layout: post
title: "walk on a round 3D planet with gravity"
tags: ["ship crew rpg", "technical"]
thumbnail: https://drive.google.com/uc?id=1akeX-oG1AH83jLLMTeteLgSYASfd3qSw&export=download
---

## About

This is research for [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}).

Before I made [Tunnel Wars]({% post_url 2023-1-2-tunnel-wars-v1 %}), I originally wanted to make Ship Crew RPG in 3 dimensions. (I decided on 2D to simplify the controls for the player and make development simpler).

This demo is a character controller for a round planet with gravity, like Super Mario World. I accidentally invented a piece of math called _parallel transporting a vector_ to make this, which I later learned is an important concept in Einstein's general relativity and coordinate geometry with manifolds -- measuring the curvature of space and all that.

The controller works by rotating the character's coordinate space so the minimum amount such that it is always tangent to the sphere where the character is standing.

Then, the character's movement and orientation are defined in terms of that tangential coordinate frame.

## Gifs

![FreeCharacterRotation.gif](https://drive.google.com/uc?id=1akeX-oG1AH83jLLMTeteLgSYASfd3qSw&export=download)

_Final iteration._

![MouseLock.gif](https://drive.google.com/uc?id=1-Wr2Mp6EcNM8XJOpZJIikkzmdUKpPEFi&export=download)
_A mouselock variant_

![NoCharacterTurning.gif](https://drive.google.com/uc?id=1fZReXyNJWfFbwKg4Hn2qfR_UVRPzTo3M&export=download)

_I had to manually make the character face in the direction of the camera. This is what it looked like before I did that._

![FailedAttemptNo2.gif](https://drive.google.com/uc?id=1eCVGx5luA16dqj2OQyK4IYQPavVy1M4w&export=download)

_My first few attempts were completely nonsensical lol_

![FailedAttemptNo1.gif](https://drive.google.com/uc?id=1SyYxegAbwPDq8uIu273ni1WpMzT3RpRH&export=download)

_This is what my first attempt looked like_


<br><br>

## Experimenting with a spaceship controller

A big problem I anticipate in [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}) is that controlling a spaceship in realistic gravitational fields may be unintuive. So I've worked on developing intuitive spaceship controls, so that flying a spaceship is closer to feeling like Star Wars than Apollo 13. Even in realistic gravity.

I've done more work since this demo [here.]({% post_url 2023-5-7-2d-physics-engine %})

## Gifs

![FastAndUnstable.gif](https://drive.google.com/uc?id=1qo3hpMMxLUeSAf2H0c4kXeIGSEdYj9Er&export=download)
![MirrorCollision.gif](https://drive.google.com/uc?id=1EDct366aKZvuwLHATpe_bZ7v1NYSROF8&export=download)
![SecondPersonCrash.gif](https://drive.google.com/uc?id=1FpD9jhyDlRcLabEcQ7yT1O80MaWQefmG&export=download)
![SatisfyingCompleteCircle.gif](https://drive.google.com/uc?id=1tYHLSL8dFjVDwXxZQ_g1Nri9_Fkg5i07&export=download)
![UmWhat.gif](https://drive.google.com/uc?id=1K9GUD7em6yE27Smy_6eQr_K0VdbNLfec&export=download)
![OrbitalSpaghetti.gif](https://drive.google.com/uc?id=1bGDn5qfPbJjYBCS6Gk0xbfDXmlbAjIGj&export=download)
![SlowAndControlled.gif](https://drive.google.com/uc?id=185Q34gyfJ_cwflDTzPRYBU9vUDNBsTH7&export=download)
![ThirdPersonCrash.gif](https://drive.google.com/uc?id=1U1XwaMTIcBjZBs4bLHMBquxSR5KXUgoe&export=download)