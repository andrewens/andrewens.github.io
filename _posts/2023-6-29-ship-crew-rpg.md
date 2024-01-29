---
layout: post
title: "Ship Crew RPG Proof of Concept"
tags: ["ship crew rpg", "playtested"]
thumbnail: https://storage.googleapis.com/test-bucket-24385982346/Ship%20Crew%20Game/TooMuchBounce.gif
---

## About

_(RPG = Roleplaying Game -- similar to Skyrim or any game with quests )_

I am currently working on this game.

**The concept**: you are a crewmember on a sci-fi spaceship, and you must complete missions.

(The long-term goal is for the universe to be filled with political factions like governments, criminals, industrial guilds, aliens, and so on, so players will have to choose who to serve when they take missions.)

**Where I'm at**: I've successfully tested the gameplay, and people really liked it! It seems that no one has ever made a team-based sandbox/RPG game quite like this one before.

I have a [roadmap](https://github.com/users/andrewens/projects/4/views/1) on github and am working toward the first milestone, which is controlling a character that can interact with the world.

The majority of research projects on this site are for this game. I originally imagined building Ship Crew RPG in 3D, but I decided to commit to 2D after building [Tunnel Wars.]({% post_url 2023-1-2-tunnel-wars-v1 %})

## Gifs

Unforuntately, the only gameplay footage I recorded was the bugs :(

(sometimes, in the proof of concept, you jump too high)

![TooMuchBounce.gif](https://storage.googleapis.com/test-bucket-24385982346/Ship%20Crew%20Game/TooMuchBounce.gif)

(and the rendering breaks if someone dies inside of the ship)

![RenderingBroke.gif](https://storage.googleapis.com/test-bucket-24385982346/Ship%20Crew%20Game/RenderingBroke.gif)

All of the remaining gifs are from development, in ROBLOX Studio.

![TakeOffSequence.gif](https://storage.googleapis.com/test-bucket-24385982346/Ship%20Crew%20Game/TakeOffSequence.gif)
![ShootingZombie.gif](https://storage.googleapis.com/test-bucket-24385982346/Ship%20Crew%20Game/ShootingZombie.gif)
![MissionVoting.gif](https://storage.googleapis.com/test-bucket-24385982346/Ship%20Crew%20Game/MissionVoting.gif)
![FlyingToMars.gif](https://storage.googleapis.com/test-bucket-24385982346/Ship%20Crew%20Game/FlyingToMars.gif)
![DroppingCrateInZone.gif](https://storage.googleapis.com/test-bucket-24385982346/Ship%20Crew%20Game/DroppingCrateInZone.gif)




## Pixel-perfect round tilemaps using Python

The most important feedback I got on [Tunnel Wars]({% post_url 2023-1-2-tunnel-wars-v1 %}) was from my sister. She said to me... "what IS the game?"

And I felt that.

I had gotten tired of doing research, which is why I threw together [Tunnel Wars V1]({% post_url 2023-1-2-tunnel-wars-v1 %}) in just two weeks. And I iterated on it again, but it still lacked *soul*. It was so *generic* -- which my sister pointed out in her comment.

It took me several months to find that soul.

What hadn't occurred to me while I was developing Tunnel Wars was that *[Ship Crew RPG]({% post_url 2023-6-29-ship-crew-rpg %}) could be in 2D*. I had always assumed that it would have to be in three dimensions, which is what made the research complicated. Once I committed to making it in 2D, everything started to come together.

The demo below is only a small part of that journey. I wanted to figure out how I could construct a 2D tilemap for a round planet that still looked something like Terraria or Starbound.

There are a few choices you can make in this domain regarding tilemap design:

The most important is whether you choose to align all of the pixels on the same grid, or if you rotate the images themselves so that the pixels rotate. Obviously if you are stitching rotated, low resolution pixel-art together, it will look ugly at the edges because pixels will be rotated at different angles. (Since this project I've moved forward with that choice because I learned how technically complicated it is to make a pixel-perfect grid on ROBLOX)

This demo is about generating pixel-perfect tilemaps, such that the planet is round but the tiles line up perfectly AND the pixels are all oriented the same way. 

I used Python to generate PNG tilemaps, and then imported it into ROBLOX studio and wrote a file serializer/deserializer system that worked with JSON. 

You can also see some early attempts at a character controller with very rudimentary collision.

## Gifs

![WorldSerialization.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/WorldSerialization.gif)
![WhoopsTooFastLol.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/WhoopsTooFastLol.gif)
![PixelPerfectFramesGif.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/PixelPerfectFramesGif.gif)
![OverlapTestsAreEasy.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/OverlapTestsAreEasy.gif)
![LookMom1DCollisions!.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/LookMom1DCollisions!.gif)
![GiantBouncyBeachBall.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/GiantBouncyBeachBall.gif)
![DynamicScreenSize.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/DynamicScreenSize.gif)
![CollisionsAreSoHard.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/CollisionsAreSoHard.gif)
![BouncyPlanet.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/BouncyPlanet.gif)
![BouncyBeachBall.gif](https://storage.googleapis.com/test-bucket-24385982346/Pixel%20Perfect%20Tiles/BouncyBeachBall.gif)
