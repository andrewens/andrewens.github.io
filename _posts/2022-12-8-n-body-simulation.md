---
layout: post
title: "n-body gravity simulation"
tags: ["ship crew rpg", "technical"]
thumbnail: https://drive.google.com/uc?id=1WRy6BjQrOEoVzm9Z-AZ5e3T8lS9qKMea&export=download
---

## About

After implementing the [Barnes-Hut algorithm]({% post_url 2022-10-27-barnes-hut-algorithm %}) for [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}), I realized that I could gain an even simpler, yet more aggressive optimization: stop simulating tiny objects' gravitational mass.

This allowed me to simulate several thousands of stars in ROBLOX. That won't sound very impressive to a C developer, but for Lua it's pretty good!

> _This post is still a work in progress! I'll add more soon :)_

## Gifs

I <3 gravity

![n-body-sim-2.gif](https://drive.google.com/uc?id=1l3WazT1wBeXtzqT7U7fz5zdolPq2Nxvd&export=download)
![n-body-sim-3.gif](https://drive.google.com/uc?id=1WRy6BjQrOEoVzm9Z-AZ5e3T8lS9qKMea&export=download)
![n-body-sim-1.gif](https://drive.google.com/uc?id=1neThe98FvFmVj2onkheD-EwuD8Rbf9i9&export=download)
![n-body-sim-4.gif](https://drive.google.com/uc?id=12CZeH9ab3sqa8Th82On4q5qYajUuQh6J&export=download)

These are actually naive n-body simulations (every star has gravitaitonal mass) but they're really cool so I wanted to include them

![three-concentric-rings.gif](https://drive.google.com/uc?id=1BgmXlxUttBqOrPrMu-f-53EYw7Sd1wQs&export=download)
![sick-n-body-rings.gif](https://drive.google.com/uc?id=12_sbIqHWFPhQHFmc4o2gwMYCavk76Cjr&export=download)
