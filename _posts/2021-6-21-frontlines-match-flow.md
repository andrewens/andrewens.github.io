---
layout: post
title: "FPS User Interface"
tags: ["frontlines"]
thumbnail: https://drive.google.com/uc?id=16XIKUV3Q2RP8KpqB1wG2_c0P3gXARr6v&export=download
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

![DeployScreenPanning.gif](https://drive.google.com/uc?id=16XIKUV3Q2RP8KpqB1wG2_c0P3gXARr6v&export=download)
![TestingFLWithNick.gif](https://drive.google.com/uc?id=1d13oyN09LV7tEQDLpblZAJBc8NecotM1&export=download)

*Glock animation bug. I was testing my killfeed and gameplay UI*

![InGameLeaderboard.gif](https://drive.google.com/uc?id=1jYmc-6ClQ-x858plMCxGiTNcW5pJqQOg&export=download)
![BrowsingReduxStateAtRunTime.gif](https://drive.google.com/uc?id=1yqhkwAxFb3kFjqrxu_SH0OatPDCkA___&export=download)
![BuggyMapVoting.gif](https://drive.google.com/uc?id=1yJGQDMT3BSScYVg1C0iTERCdZG_J6maF&export=download)
![InGameLeaderboardOverlay.gif](https://drive.google.com/uc?id=1Z4etG_LDlixeGuwMQgCTCsXnK81HfCL3&export=download)
![MapVotingOnly.gif](https://drive.google.com/uc?id=1odwBbRzgGbvVlUN89aW2T6xuIKv2JNU5&export=download)
![MapVotingAndLeaderboard.gif](https://drive.google.com/uc?id=1Ker3f_p_gp7BA-g8yKHxnM9d6d0q2Ntk&export=download)
![TestingMatchFlow.gif](https://drive.google.com/uc?id=1h0KfMVjrh5P3c6OFHRiJY8CHn3I1MU-_&export=download)
![TestingBackEndAtRunTime.gif](https://drive.google.com/uc?id=1P4txo8PzjlXrEVYSczdpVRcXmD1OZyzI&export=download)

# Even more Gifs

![GalleryTest6.gif](https://drive.google.com/uc?id=1cJvMbnunrbaMAHXVGbXuR3mZEHxS8w1h&export=download)
![GalleryTest5.gif](https://drive.google.com/uc?id=1Iri8XQRO-7KjCSwjaS7A9_69-lcQBVLh&export=download)
![GalleryTest4.gif](https://drive.google.com/uc?id=1XWam7n6NhV2oGpQ65vUKCv7JYTHF5vhv&export=download)
![GalleryTest3.gif](https://drive.google.com/uc?id=1AIgQ8gOxxHMLj169Le6QASXZelaA0tky&export=download)
![GalleryTest2.gif](https://drive.google.com/uc?id=1uW9LypljuleVSC1fQ2yP_qf1HnobcDaQ&export=download)
![GalleryTest1.gif](https://drive.google.com/uc?id=1EusciAeDg2NHBJBb9PVpN4p66VRFg6l1&export=download)
![ProgressBarTest3.gif](https://drive.google.com/uc?id=1rdU0FoCl6Yqyc1GucjbVLg0XUJN6UPXP&export=download)
![ProgressBarTest2.gif](https://drive.google.com/uc?id=1gCvgODQ9wppMBVSZ5A9-c_O3p89xvTIh&export=download)
![ProgressBarTest1.gif](https://drive.google.com/uc?id=18vQzd9nYLGm7qFvhv9qYILite32yDt_6&export=download)
![WaitingForPlayers.gif](https://drive.google.com/uc?id=1NEIyjzaLybzBKd9NZiH_TFcfpoT-NLbq&export=download)
![ButtonClickAnimation.gif](https://drive.google.com/uc?id=1CxPRA0p8bbWqR3-cZ73usTcccycJjWv-&export=download)
![ButtonHoverAnimation.gif](https://drive.google.com/uc?id=11I_A5Ommt5qZKLk56KkyhTqdb1CWDIly&export=download)
![BuggyDeployButtonAnimation.gif](https://drive.google.com/uc?id=15cwhmFiZV8BrAOlwcSa42J65wOXdt2W0&export=download)
![MapLoadingScreen.gif](https://drive.google.com/uc?id=1KxndhaeDBGJpM2GgDJEujh9f4mB5J6-b&export=download)


# And even more gifs

![DebuggingInGame2.gif](https://drive.google.com/uc?id=1Uwi49aM_IrGPhlWMSSHBhgtfBqDG2hrY&export=download)

*SO MANY ERRORS... from Nick's code ;^)*

![DebuggingInGame.gif](https://drive.google.com/uc?id=1WqbgJHBP4EbA6oejqd1jY28qig17LzQL&export=download)

*I think we were looking for a memory leak?*

![FrontlinesMapFlyThrough2.gif](https://drive.google.com/uc?id=1NFNc2QexucchI95rtsBc1z0EB5UwVXFj&export=download)

*The modelers were so talented*

![FrontlinesMapFlyThrough1.gif](https://drive.google.com/uc?id=12jgy3CQp8wM2IVsBEV3tDZ9uIga28Pkb&export=download)


<br><br>

# Capture Point Logic

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