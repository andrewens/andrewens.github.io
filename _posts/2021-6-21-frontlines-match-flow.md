---
layout: post
title: "FPS User Interface"
tags: ["frontlines"]
thumbnail: https://lh3.google.com/u/0/d/16XIKUV3Q2RP8KpqB1wG2_c0P3gXARr6v
---

# About
These gifs are match flow-related UI elements that I coded for Frontlines. Elements include:

* A leaderboard overlay
* Killfeed
* Capture point progress indicators
* Match score progress + timer
* Map Voting 
* Loading screen

I used Rodux (Roblox equivalent of Redux.js) for managing the state, and I also programmed a UI element to render that at runtime to make debugging easier. 

# Gifs

![DeployScreenPanning.gif](https://lh3.google.com/u/0/d/16XIKUV3Q2RP8KpqB1wG2_c0P3gXARr6v)
![TestingFLWithNick.gif](https://lh3.google.com/u/0/d/1d13oyN09LV7tEQDLpblZAJBc8NecotM1)

*Glock animation bug. I was testing my killfeed and gameplay UI*

![InGameLeaderboard.gif](https://lh3.google.com/u/0/d/1jYmc-6ClQ-x858plMCxGiTNcW5pJqQOg)
![BrowsingReduxStateAtRunTime.gif](https://lh3.google.com/u/0/d/1yqhkwAxFb3kFjqrxu_SH0OatPDCkA___)
![BuggyMapVoting.gif](https://lh3.google.com/u/0/d/1yJGQDMT3BSScYVg1C0iTERCdZG_J6maF)
![InGameLeaderboardOverlay.gif](https://lh3.google.com/u/0/d/1Z4etG_LDlixeGuwMQgCTCsXnK81HfCL3)
![MapVotingOnly.gif](https://lh3.google.com/u/0/d/1odwBbRzgGbvVlUN89aW2T6xuIKv2JNU5)
![MapVotingAndLeaderboard.gif](https://lh3.google.com/u/0/d/1Ker3f_p_gp7BA-g8yKHxnM9d6d0q2Ntk)
![TestingMatchFlow.gif](https://lh3.google.com/u/0/d/1h0KfMVjrh5P3c6OFHRiJY8CHn3I1MU-_)
![TestingBackEndAtRunTime.gif](https://lh3.google.com/u/0/d/1P4txo8PzjlXrEVYSczdpVRcXmD1OZyzI)

# Even more Gifs

![GalleryTest6.gif](https://lh3.google.com/u/0/d/1cJvMbnunrbaMAHXVGbXuR3mZEHxS8w1h)
![GalleryTest5.gif](https://lh3.google.com/u/0/d/1Iri8XQRO-7KjCSwjaS7A9_69-lcQBVLh)
![GalleryTest4.gif](https://lh3.google.com/u/0/d/1XWam7n6NhV2oGpQ65vUKCv7JYTHF5vhv)
![GalleryTest3.gif](https://lh3.google.com/u/0/d/1AIgQ8gOxxHMLj169Le6QASXZelaA0tky)
![GalleryTest2.gif](https://lh3.google.com/u/0/d/1uW9LypljuleVSC1fQ2yP_qf1HnobcDaQ)
![GalleryTest1.gif](https://lh3.google.com/u/0/d/1EusciAeDg2NHBJBb9PVpN4p66VRFg6l1)
![ProgressBarTest3.gif](https://lh3.google.com/u/0/d/1rdU0FoCl6Yqyc1GucjbVLg0XUJN6UPXP)
![ProgressBarTest2.gif](https://lh3.google.com/u/0/d/1gCvgODQ9wppMBVSZ5A9-c_O3p89xvTIh)
![ProgressBarTest1.gif](https://lh3.google.com/u/0/d/18vQzd9nYLGm7qFvhv9qYILite32yDt_6)
![WaitingForPlayers.gif](https://lh3.google.com/u/0/d/1NEIyjzaLybzBKd9NZiH_TFcfpoT-NLbq)
![ButtonClickAnimation.gif](https://lh3.google.com/u/0/d/1CxPRA0p8bbWqR3-cZ73usTcccycJjWv-)
![ButtonHoverAnimation.gif](https://lh3.google.com/u/0/d/11I_A5Ommt5qZKLk56KkyhTqdb1CWDIly)
![BuggyDeployButtonAnimation.gif](https://lh3.google.com/u/0/d/15cwhmFiZV8BrAOlwcSa42J65wOXdt2W0)
![MapLoadingScreen.gif](https://lh3.google.com/u/0/d/1KxndhaeDBGJpM2GgDJEujh9f4mB5J6-b)


# And even more gifs

![DebuggingInGame2.gif](https://lh3.google.com/u/0/d/1Uwi49aM_IrGPhlWMSSHBhgtfBqDG2hrY)

*SO MANY ERRORS... from Nick's code ;^)*

![DebuggingInGame.gif](https://lh3.google.com/u/0/d/1WqbgJHBP4EbA6oejqd1jY28qig17LzQL)

*I think we were looking for a memory leak?*

![FrontlinesMapFlyThrough2.gif](https://lh3.google.com/u/0/d/1NFNc2QexucchI95rtsBc1z0EB5UwVXFj)

*The modelers were so talented*

![FrontlinesMapFlyThrough1.gif](https://lh3.google.com/u/0/d/12jgy3CQp8wM2IVsBEV3tDZ9uIga28Pkb)


<br><br>

# Capture Point Logic

The first thing I made during the ROBLOX 2021 Spring Accelerator (for Frontlines) was capture-point logic. The gifs below show my process for testing both the UI and the model.

In-game there was one circular progress indicator per capture point. The diamond moving along the scale was purely for testing, and demonstrates the underlying mathematical model -- if the other team owns the point, you have to return the point to neutral before you can capture it for your team. (this was per Frontlines' specs). 

Later I had to normalize the capturing power of a teammate such that if every player in the game stood on one point, no one would capture it -- even if there were more people on one team than the other. 

If I remember correctly, the circular progress indicator used a ROBLOX UI feature called Gradients for the transparency, but that required creating two halves for the circle. If you look closely, when the capture point progress is completed, there's still a small gap left before it resets, which I believe was due to there actually being two halves of the circle + clipping.

# Gifs
![CapturePoint14.gif](https://lh3.google.com/u/0/d/1zihoZ43fODMPFHD5Az0YCQNNjV2C3SwR)
![CapturePoint13.gif](https://lh3.google.com/u/0/d/1CF2vkpgBCt-ogJGal-CXz1FB-iGNPuDe)
![SmallCapturePoint.gif](https://lh3.google.com/u/0/d/1TuAhelFw3aYOrQU0GFnRSqbGJVshN_I8)
![CapturePoint12.gif](https://lh3.google.com/u/0/d/1VOfno2scpmM2gHfIYoyS2sP3y4uIaW0r)
![CapturePoint11.gif](https://lh3.google.com/u/0/d/16L9t1bXkBvbOI2pWVx6zCCDEyi4wY9ig)
![CapturePoint10.gif](https://lh3.google.com/u/0/d/16F8Tb7qifSM-3LtnsgjRInpXtl_BQYYa)
![CapturePoint9.gif](https://lh3.google.com/u/0/d/1cbYGMWd_QcIlgAgFsT25Op8GS5SruB41)
![CapturePoint8.gif](https://lh3.google.com/u/0/d/1-4zC_tY4lMyQ99PS2IwQ0NHPb-Eozw4N)
![CapturePoint7.gif](https://lh3.google.com/u/0/d/1xhkZ08UZKe5fMPO0ZhKFkzsg-MGu6gNM)
![CapturePoint6.gif](https://lh3.google.com/u/0/d/1yjybXDG_KutbT1PbUanhGk1ArJUuiT4_)
![CapturePoint5.gif](https://lh3.google.com/u/0/d/17vADy6GvQAyBp0alZon4b44nE6zoa8KS)
![CapturePoint4.gif](https://lh3.google.com/u/0/d/16doLrKALkwoou72MFY4TkQkgn5j9KIjs)
![CapturePoint3.gif](https://lh3.google.com/u/0/d/1FP17-L9FiP4Agjc55zw1l2FjuIPHpIgR)
![CapturePoint2.gif](https://lh3.google.com/u/0/d/11Onknu3ZcKB0tnAFg_8WXS9SoEEGP1Wr)
![CapturePoint1.gif](https://lh3.google.com/u/0/d/1wWOQ0RUzT5P3FPD0f1GDUGkaLkvE55r4)