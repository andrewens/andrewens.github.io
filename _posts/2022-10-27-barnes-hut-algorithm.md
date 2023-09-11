---
layout: post
title: "Barnes-Hut optimized n-body gravity simulation"
tags: ["ship crew rpg", "technical", "favorite posts"]
thumbnail: https://drive.google.com/uc?id=1Zm8hZwfWqMbZEaDSjfoGB-FbkJ1Lb9vX&export=download
---

## About

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

![moving-solar-system.gif](https://drive.google.com/uc?id=1Zm8hZwfWqMbZEaDSjfoGB-FbkJ1Lb9vX&export=download)

_The green boxes are the cells of the octree, the spatial partioning structure that makes this work_

Of course, if you're too close to the cluster of objects like in this gif, then you would just calculate gravity between every pair of objects normally.

![flinging-stars.gif](https://drive.google.com/uc?id=1AT6pdArDxMrSjl0W_Y5tNQC7DbsVakaZ&export=download)

_(there are no collision implemented in this demo)_

![feeding-a-star.gif](https://drive.google.com/uc?id=13tWDzzfiA5VIKT21NNPMzKq6uuFXY4OM&export=download)

_Octrees are finite in size -- the grey parts outline the edge of the octree._

I don't have a gif showing it, but the stair-stepped, colored blocks change the distance at which the algorithm switches from high-precision calculations to approximating large swathes of points. The shorter the distance you start approximating at, the more efficient the algorithm is-- but the less precise it becomes.

![building-asteroid-belt-1.gif](https://drive.google.com/uc?id=1xHjHjQGtKs6LgDasx6LqAYZV_tfCTJTa&export=download)

_The purple block sets approximation at the highest distance threshold, which is least efficient but most precise._

Barnes-Hut works well because, when simulating gravity between galaxies, it is very common for spread-out clusters of stars to exist, which is the condition Barnes-Hut exploits.

![building-asteroid-belt-2.gif](https://drive.google.com/uc?id=1XA3GxcTgnJT2thrMOUvubFZPN-2AwSXg&export=download)
_There's a "sweet spot" distance from a gravitational center where bodies can orbit in a circular path_

![building-asteroid-belt-3.gif](https://drive.google.com/uc?id=18kujD9jzTBfkTDS2cWb2H_m7CNb7hX1V&export=download)
*Great success*

## More gifs

I'm not gonna lie, it was really fun to play around with this tech demo.

![planets-and-asteroids-orbiting-black-hole.gif](https://drive.google.com/uc?id=1AWdKbQbDHJpQ55XLCB7znbqd2_KDuYG7&export=download)

*I think I hit the rendering limit lol*

![spamming-stars.gif](https://drive.google.com/uc?id=1lUBZbuzpYYLth3p48ysoV2sKA_rex-6D&export=download)

*If you throw stars at a black hole you can fling it into outer space*

![sucking-asteroids-into-gravity-well.gif](https://drive.google.com/uc?id=1N644WXq994yK0ocZiwNpslvXaVfPVPT6&export=download)

*I made an asteroid machine gun and then sucked them all into a star*

![shooting-asteroids-into-gravity-well.gif](https://drive.google.com/uc?id=1ubKJpTMJL-tfUVVE_ydUYQua_0yULKIY&export=download)

*And then if you shoot the asteroids at the star, they get flung really far*


10/10 tech demo. Would build again.

