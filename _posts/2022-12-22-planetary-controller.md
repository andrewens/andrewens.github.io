---
layout: post
title: "walk on a round 3D planet with gravity"
---

## About

This is research for [Ship Crew RPG](./2023-6-29-ship-crew-rpg.md).

Before I made [Tunnel Wars](./2023-1-2-tunnel-wars-v1.md), I originally wanted to make Ship Crew RPG in 3 dimensions. (I decided on 2D to simplify the controls for the player and make development simpler).

This demo is a character controller for a round planet with gravity, like Super Mario World. I accidentally invented a piece of math called _parallel transporting a vector_ to make this, which I later learned is an important concept in Einstein's general relativity and coordinate geometry with manifolds -- measuring the curvature of space and all that.

The controller works by rotating the character's coordinate space so the minimum amount such that it is always tangent to the sphere where the character is standing.

Then, the character's movement and orientation are defined in terms of that tangential coordinate frame.

This controller system may have greater application for creating [intuitive spaceship controls in 3d space.](./2022-12-12-orbital-controller.md)

> _This post is still a work in progress! I'll add more soon :)_

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
