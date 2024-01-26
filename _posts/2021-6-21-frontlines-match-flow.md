---
layout: post
title: "FPS User Interface"
tags: ["frontlines"]
thumbnail: https://storage.googleapis.com/test-bucket-24385982346/TempFrontlinesNeedsReorganization/DeployScreenPanning.gif
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

![DeployScreenPanning.gif](https://storage.googleapis.com/test-bucket-24385982346/TempFrontlinesNeedsReorganization/DeployScreenPanning.gif)
![TestingFLWithNick.gif](https://storage.googleapis.com/test-bucket-24385982346/MiscFrontlines/TestingFLWithNick.gif)

*Glock animation bug. I was testing my killfeed and gameplay UI*

![InGameLeaderboard.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesMatchFlow/InGameLeaderboard.gif)
![BrowsingReduxStateAtRunTime.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesMatchFlow/BrowsingReduxStateAtRunTime.gif)
![BuggyMapVoting.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesMatchFlow/BuggyMapVoting.gif)
![InGameLeaderboardOverlay.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesMatchFlow/InGameLeaderboard.gif)
![MapVotingOnly.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesMatchFlow/MapVotingOnly.gif)
![MapVotingAndLeaderboard.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesMatchFlow/MapVotingAndLeaderboard.gif)
![TestingMatchFlow.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesMatchFlow/TestingMatchFlow.gif)
![TestingBackEndAtRunTime.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesMatchFlow/TestingBackEndAtRunTime.gif)

# Even more Gifs

![GalleryTest6.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/GalleryTest6.gif)
![GalleryTest5.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/GalleryTest5.gif)
![GalleryTest4.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/GalleryTest4.gif)
![GalleryTest3.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/GalleryTest3.gif)
![GalleryTest2.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/GalleryTest2.gif)
![GalleryTest1.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/GalleryTest1.gif)
![ProgressBarTest3.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/ProgressBarTest3.gif)
![ProgressBarTest2.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/ProgressBarTest2.gif)
![ProgressBarTest1.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/ProgressBarTest1.gif)
![WaitingForPlayers.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/WaitingForPlayers.gif)
![ButtonClickAnimation.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/ButtonClickAnimation.gif)
![ButtonHoverAnimation.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/ButtonHoverAnimation.gif)
![BuggyDeployButtonAnimation.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/BuggyDeployButtonAnimation.gif)
![MapLoadingScreen.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesFrontend/MapLoadingScreen.gif)


# And even more gifs

![DebuggingInGame2.gif](https://storage.googleapis.com/test-bucket-24385982346/MiscFrontlines/DebuggingInGame2.gif)

*SO MANY ERRORS... from Nick's code ;^)*

![DebuggingInGame.gif](https://storage.googleapis.com/test-bucket-24385982346/MiscFrontlines/DebuggingInGame.gif)

*I think we were looking for a memory leak?*

![FrontlinesMapFlyThrough2.gif](https://storage.googleapis.com/test-bucket-24385982346/MiscFrontlines/FrontlinesMapFlyThrough2.gif)

*The modelers were so talented*

![FrontlinesMapFlyThrough1.gif](https://storage.googleapis.com/test-bucket-24385982346/MiscFrontlines/FrontlinesMapFlyThrough1.gif)


<br><br>

# Capture Point Logic

The first thing I made during the ROBLOX 2021 Spring Accelerator (for Frontlines) was capture-point logic. The gifs below show my process for testing both the UI and the model.

In-game there was one circular progress indicator per capture point. The diamond moving along the scale was purely for testing, and demonstrates the underlying mathematical model -- if the other team owns the point, you have to return the point to neutral before you can capture it for your team. (this was per Frontlines' specs). 

Later I had to normalize the capturing power of a teammate such that if every player in the game stood on one point, no one would capture it -- even if there were more people on one team than the other. 

If I remember correctly, the circular progress indicator used a ROBLOX UI feature called Gradients for the transparency, but that required creating two halves for the circle. If you look closely, when the capture point progress is completed, there's still a small gap left before it resets, which I believe was due to there actually being two halves of the circle + clipping.

# Gifs
![CapturePoint14.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint14.gif)
![CapturePoint13.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint13.gif)
![SmallCapturePoint.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/SmallCapturePoint.gif)
![CapturePoint12.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint12.gif)
![CapturePoint11.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint11.gif)
![CapturePoint10.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint10.gif)
![CapturePoint9.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint9.gif)
![CapturePoint8.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint8.gif)
![CapturePoint7.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint7.gif)
![CapturePoint6.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint6.gif)
![CapturePoint5.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint5.gif)
![CapturePoint4.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint4.gif)
![CapturePoint3.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint3.gif)
![CapturePoint2.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint2.gif)
![CapturePoint1.gif](https://storage.googleapis.com/test-bucket-24385982346/CapturePointLogic/CapturePoint1.gif)
