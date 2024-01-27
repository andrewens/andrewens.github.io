---
layout: post
title: "Ship relativity render"
tags: ["ship crew rpg", "technical"]
thumbnail: https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/Ship%20Relativity%20Render/FlyingFromInterior.gif
---

## About

My [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}) game is built out of physics sub-environments. This demo shows how you can simulate the movement of arbitrarily complex structures (like planets or ships) by using simple minimodels, and then seamlessly blending the interior and exterior environments together.

Whenever my character is inside the spaceship, the spaceship is not actually moving because all of the parts are anchored. Instead, I cloned the environment and moved it relative to the ship. This is known in physics as "Galilean relativity" and produces an illusion indistinguishable from reality.

## Gifs

![FlyingFromInterior.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/Ship%20Relativity%20Render/FlyingFromInterior.gif)

_The ship isn't moving -- the environment is._

![WalkingAroundInterior.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/Ship%20Relativity%20Render/WalkingAroundInterior.gif)

_You can walk around the inside without any centripetal acceleration or bugginess, even though you're "moving"._

![SwitchingViews.gif](https://storage.googleapis.com/test-bucket-24385982346/OrbitalController/Ship%20Relativity%20Render/SwitchingViews.gif)

_Seamlessly swapping between interior & exterior (minimodel) environments. The minimodel is actually 10x smaller than the full-scale ship interior, and is also at a different position/orientation. Camera magic._
