---
layout: post
title: "Pixel-perfect tile atlas for round world in 2D"
tags: ["ship crew rpg"]
---

## About

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

> _This post is still a work in progress! I'll add more soon :)_

## Gifs

![WorldSerialization.gif](https://drive.google.com/uc?id=1XFUlkxPZ69JTIuDE6WVZMuYjNl5l-okh&export=download)
![WhoopsTooFastLol.gif](https://drive.google.com/uc?id=1E5t3ib6xavmeWuJgvOb9oz3KsOcFK256&export=download)
![PixelPerfectFramesGif.gif](https://drive.google.com/uc?id=17Pej9uQh5ykwWsnPq6dbdIHpICIwOx8P&export=download)
![OverlapTestsAreEasy.gif](https://drive.google.com/uc?id=1cew6lW27gMrPR1A7gPT0CF59iMYx7bD-&export=download)
![LookMom1DCollisions!.gif](https://drive.google.com/uc?id=1WXlfN26wby-wWQIc6Z93lJyWsQPi79G1&export=download)
![GiantBouncyBeachBall.gif](https://drive.google.com/uc?id=1g4qO9rNlHAhcC1JACJ008YCDSov7073t&export=download)
![DynamicScreenSize.gif](https://drive.google.com/uc?id=1POaG-GYYWpq7ykUIF_psX8fst6ut6btw&export=download)
![CollisionsAreSoHard.gif](https://drive.google.com/uc?id=1590_KJOER-5ENJoZ31egH5W6ZJKd2OEV&export=download)
![BouncyPlanet.gif](https://drive.google.com/uc?id=1t-gUjJDkhYTdkOzhFZtg9t7efapWnaB2&export=download)
![BouncyBeachBall.gif](https://drive.google.com/uc?id=11hVcrMu1A8rOI8gCM-EaS49W4wrFidCT&export=download)
