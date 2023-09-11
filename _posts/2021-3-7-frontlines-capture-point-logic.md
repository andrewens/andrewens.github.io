---
layout: post
title: "FPS Capture Point logic for Frontlines"
tags: ["frontlines"]
thumbnail: https://drive.google.com/uc?id=1zihoZ43fODMPFHD5Az0YCQNNjV2C3SwR&export=download
---

# About

The first thing I made during the ROBLOX 2021 Spring Accelerator (for Frontlines) was capture-point logic. The gifs below show my process for testing both the UI and the model.

In-game there was one circular progress indicator per capture point. The diamond moving along the scale was purely for testing, and demonstrates the underlying mathematical model -- if the other team owns the point, you have to return the point to neutral before you can capture it for your team. (this was per Frontlines' specs). 

Later I had to normalize the capturing power of a teammate such that if every player in the game stood on one point, no one would capture it -- even if there were more people on one team than the other. 

If I remember correctly, the circular progress indicator used a ROBLOX UI feature called Gradients for the transparency, but that required creating two halves for the circle. If you look closely, when the capture point progress is completed, there's still a small gap left before it resets, which I believe was due to there actually being two halves of the circle + clipping.

# Gifs
![CapturePoint14.gif](https://drive.google.com/uc?id=1zihoZ43fODMPFHD5Az0YCQNNjV2C3SwR&export=download)
![CapturePoint13.gif](https://drive.google.com/uc?id=1CF2vkpgBCt-ogJGal-CXz1FB-iGNPuDe&export=download)
![SmallCapturePoint.gif](https://drive.google.com/uc?id=1TuAhelFw3aYOrQU0GFnRSqbGJVshN_I8&export=download)
![CapturePoint12.gif](https://drive.google.com/uc?id=1VOfno2scpmM2gHfIYoyS2sP3y4uIaW0r&export=download)
![CapturePoint11.gif](https://drive.google.com/uc?id=16L9t1bXkBvbOI2pWVx6zCCDEyi4wY9ig&export=download)
![CapturePoint10.gif](https://drive.google.com/uc?id=16F8Tb7qifSM-3LtnsgjRInpXtl_BQYYa&export=download)
![CapturePoint9.gif](https://drive.google.com/uc?id=1cbYGMWd_QcIlgAgFsT25Op8GS5SruB41&export=download)
![CapturePoint8.gif](https://drive.google.com/uc?id=1-4zC_tY4lMyQ99PS2IwQ0NHPb-Eozw4N&export=download)
![CapturePoint7.gif](https://drive.google.com/uc?id=1xhkZ08UZKe5fMPO0ZhKFkzsg-MGu6gNM&export=download)
![CapturePoint6.gif](https://drive.google.com/uc?id=1yjybXDG_KutbT1PbUanhGk1ArJUuiT4_&export=download)
![CapturePoint5.gif](https://drive.google.com/uc?id=17vADy6GvQAyBp0alZon4b44nE6zoa8KS&export=download)
![CapturePoint4.gif](https://drive.google.com/uc?id=16doLrKALkwoou72MFY4TkQkgn5j9KIjs&export=download)
![CapturePoint3.gif](https://drive.google.com/uc?id=1FP17-L9FiP4Agjc55zw1l2FjuIPHpIgR&export=download)
![CapturePoint2.gif](https://drive.google.com/uc?id=11Onknu3ZcKB0tnAFg_8WXS9SoEEGP1Wr&export=download)
![CapturePoint1.gif](https://drive.google.com/uc?id=1wWOQ0RUzT5P3FPD0f1GDUGkaLkvE55r4&export=download)
