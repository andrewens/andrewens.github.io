---
layout: post
title: "n-body gravity simulation"
tags: ["ship crew rpg", "technical"]
thumbnail: https://lh3.google.com/u/0/d/1WRy6BjQrOEoVzm9Z-AZ5e3T8lS9qKMea
---

## About

After implementing the Barnes-Hut algorithm for [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}), I realized that I could gain an even simpler, yet more aggressive optimization: stop simulating tiny objects' gravitational mass.

This allowed me to simulate several thousands of stars in ROBLOX. That won't sound very impressive to a C developer, but for Lua it's pretty good!

## Gifs

I <3 gravity

![n-body-sim-2.gif](https://lh3.google.com/u/0/d/1l3WazT1wBeXtzqT7U7fz5zdolPq2Nxvd)
![n-body-sim-3.gif](https://lh3.google.com/u/0/d/1WRy6BjQrOEoVzm9Z-AZ5e3T8lS9qKMea)
![n-body-sim-1.gif](https://lh3.google.com/u/0/d/1neThe98FvFmVj2onkheD-EwuD8Rbf9i9)
![n-body-sim-4.gif](https://lh3.google.com/u/0/d/12CZeH9ab3sqa8Th82On4q5qYajUuQh6J)

These are actually naive n-body simulations (every star has gravitaitonal mass) but they're really cool so I wanted to include them

![three-concentric-rings.gif](https://lh3.google.com/u/0/d/1BgmXlxUttBqOrPrMu-f-53EYw7Sd1wQs)
![sick-n-body-rings.gif](https://lh3.google.com/u/0/d/12_sbIqHWFPhQHFmc4o2gwMYCavk76Cjr)


<br><br>

## Optimizing n-body simulations with Barnes-Hut algorithm

> You can play/edit this demo on ROBLOX [here.](https://www.roblox.com/games/11391815266/Barnes-Hut-Gravity-Simulation)

The premise of my [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}) game is that the universe is at least one galaxy, built out of star systems, where planets orbit stars and moons orbit planets and so on. _All of the gravity is actually simulated._

I want to have a big galaxy, which means a lot of physics computations -- so I decided to research an optimized gravity algorithm called the [Barnes-Hut algorithm](https://jheer.github.io/barnes-hut/).

Before I dive into that, I have a couple of quick side notes:

#### #1 Physics simulation is broken up into sub-environments

I want to be clear that in Ship Crew RPG, _it's not just one big physics environment_. A really important design goal is that characters are able to walk around "inside" big, moving structures like ships and planets and moons.

To achieve that, the "interior" environments of ships and planets are actually kept separate and stationary, and I explicitly write code for transitioning between the environments. I made a tech demo for this [here]({% post_url 2022-11-7-ship-relativity-render %}), and it's also evident in the proof of concept for [Ship Crew RPG.]({% post_url 2023-6-29-ship-crew-rpg %})

#### #2 The biggest optimization is just doing less gravity.

Barnes-Hut is _great_ -- but I discovered an even more powerful optimization: don't simulate the gravity of small objects.

For example, if you're simulating a galaxy, then you don't need to calculate how much the stars pull on the black hole/center of mass of the galaxy because _it doesn't matter_.

If you only have a handful of massive objects, this effectively reduces time complexity from O(n^2) to _O(n)_.

We can get away with this for Ship Crew RPG because of point #1 -- a galaxy-level environment is literally only concerned with the gravity of stars (tiny) and black holes / galaxy mass centers (massive).

I have a demo of this [here.]({% post_url 2022-12-8-n-body-simulation %})

### And now, for Barnes-Hut

With all that being said, it was really fun to implement the Barnes-Hut algorithm and the experience was definitely worth it. Let me show you what I made.

If you want to understand how the algorithm works, I highly recommend [these](https://jheer.github.io/barnes-hut/) two [sources.](http://arborjs.org/docs/barnes-hut)

The gist of the algorithm is that clusters of bodies can be approximated as a single point when you're far enough away from the group. For example, this moving system could be approximated as a single body:

> You can play/edit this demo on ROBLOX [here.](https://www.roblox.com/games/11391815266/Barnes-Hut-Gravity-Simulation)

![moving-solar-system.gif](https://lh3.google.com/u/0/d/1Zm8hZwfWqMbZEaDSjfoGB-FbkJ1Lb9vX)

_The green boxes are the cells of the octree, the spatial partioning structure that makes this work_

Of course, if you're too close to the cluster of objects like in this gif, then you would just calculate gravity between every pair of objects normally.

![flinging-stars.gif](https://lh3.google.com/u/0/d/1AT6pdArDxMrSjl0W_Y5tNQC7DbsVakaZ)

_(there are no collision implemented in this demo)_

![feeding-a-star.gif](https://lh3.google.com/u/0/d/13tWDzzfiA5VIKT21NNPMzKq6uuFXY4OM)

_Octrees are finite in size -- the grey parts outline the edge of the octree._

I don't have a gif showing it, but the stair-stepped, colored blocks change the distance at which the algorithm switches from high-precision calculations to approximating large swathes of points. The shorter the distance you start approximating at, the more efficient the algorithm is-- but the less precise it becomes.

![building-asteroid-belt-1.gif](https://lh3.google.com/u/0/d/1xHjHjQGtKs6LgDasx6LqAYZV_tfCTJTa)

_The purple block sets approximation at the highest distance threshold, which is least efficient but most precise._

Barnes-Hut works well because, when simulating gravity between galaxies, it is very common for spread-out clusters of stars to exist, which is the condition Barnes-Hut exploits.

![building-asteroid-belt-2.gif](https://lh3.google.com/u/0/d/1XA3GxcTgnJT2thrMOUvubFZPN-2AwSXg)
_There's a "sweet spot" distance from a gravitational center where bodies can orbit in a circular path_

![building-asteroid-belt-3.gif](https://lh3.google.com/u/0/d/18kujD9jzTBfkTDS2cWb2H_m7CNb7hX1V)
*Great success*

## More gifs

I'm not gonna lie, it was really fun to play around with this tech demo.

![planets-and-asteroids-orbiting-black-hole.gif](https://lh3.google.com/u/0/d/1AWdKbQbDHJpQ55XLCB7znbqd2_KDuYG7)

*I think I hit the rendering limit lol*

![spamming-stars.gif](https://lh3.google.com/u/0/d/1lUBZbuzpYYLth3p48ysoV2sKA_rex-6D)

*If you throw stars at a black hole you can fling it into outer space*

![sucking-asteroids-into-gravity-well.gif](https://lh3.google.com/u/0/d/1N644WXq994yK0ocZiwNpslvXaVfPVPT6)

*I made an asteroid machine gun and then sucked them all into a star*

![shooting-asteroids-into-gravity-well.gif](https://lh3.google.com/u/0/d/1ubKJpTMJL-tfUVVE_ydUYQua_0yULKIY)

*And then if you shoot the asteroids at the star, they get flung really far*


10/10 tech demo. Would build again.



<br><br>

### Quadtrees

While researching the optimized n-body gravity simulations for my [Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}) game, I had to implement a quadtree / octree data structure so that I could implement the Barnes Hut algorithm.

A quadtree (2 dimensional) or octree (3 dimensional) is a spatial partioning data structure that allows you to quickly retrieve a set of points that are in a given region of space.

In the context of the Barnes-Hut algorithm, a quadtree or octree allows us to easily approximate a set of far-away points as just one gravitational mass, which reduces time complexity from O(n^2) to O(n log n).

### Here's a demo ROBLOX place

> You can play/edit this demo on ROBLOX [here.](https://www.roblox.com/games/11326654961/Quadtree)

![polished-quad-tree-1.gif](https://lh3.google.com/u/0/d/1oS3hc3Sscgsc0WTOp4wx6sWxU-liUHvI)

_Each ball gets its own cell, generally speaking. Smaller cells are children of bigger cells._

![polished-quad-tree-2.gif](https://lh3.google.com/u/0/d/1m7lxf_LtdKK7QlzxMbB5XZ96AHEDZY1P)

_The purple crystal erases the board_

![polished-quad-tree-coincident-points.gif](https://lh3.google.com/u/0/d/1qzQyMY4pz4aDPHfNEj2N9_QLle42QN5z)

_Cell size has a minimum limit to avoid infinite recursion (and stack overflow) when coincident points are introduced._

### Unpolished quadtrees

This is an earlier version of the quadtree:

(The points are randomly added)

![slow-random-quad-tree-1.gif](https://lh3.google.com/u/0/d/1SBft1Ua-q9rJ31YMSNszjd0YgaKKgq0O)
![slow-random-quad-tree.gif](https://lh3.google.com/u/0/d/1g2rDD6OpXD2Tc_fukNrqqbMIT2bZ5uWy)

I experimented with implementing the quadtree as an array (similar to how one can implement a binary tree as an array). This gif visualizes where nodes are stored in the array:

![quad-tree-as-an-array.gif](https://lh3.google.com/u/0/d/16VGHTndYTQJ5uOYaIvPzrcHeyTrbBBLr)

And these are 3D Octrees, so-called because they have eight octants instead of four quadrants.

![random-oct-tree-1.gif](https://lh3.google.com/u/0/d/1IvPgBdtABHF2Rqet3Fsil7D6pnFcsPLN)

_Slow_

![random-oct-tree-2.gif](https://lh3.google.com/u/0/d/1FBlE47uFKVKpIg7mN3GvJVLhY-lkh_UW)

_Speedy_


<br><br>

## Orbital path predictor

While playing with n-body gravity simulations, I found it difficult to construct stable orbits -- so I prototyped a quick orbit calculator. It works by simply running 100 or so iterations into the future to predict the orbital path. It doesn't account for the movement of the large gravitational mass. The mathematics can also be applied to construct stable orbits automatically.


## Gifs

![Bad.gif](https://lh3.google.com/u/0/d/1o3EE13ulGgg9FzSRhTJuSzBR7RIHP9V1)
![Good.gif](https://lh3.google.com/u/0/d/1KwLXQFg0E7CUUQbeTkjS9qxRP8wvs8kC)