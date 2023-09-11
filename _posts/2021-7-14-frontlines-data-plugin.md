---
layout: post
title: "Weapons configuration plugin for Frontlines"
tags: ["frontlines"]
thumbnail: https://drive.google.com/uc?id=12o41i6uojujevUD54-F93-W0exhlTEho&export=download
---

# About

While I was programming the gun customization system for Frontlines, I also designed a system to allow gun modelers / non-programmers to input weapon data themselves. This was a bit involved because each weapon attachment had an arbitrary set of compatible attachments, often per multiple attachment slots, and we had to keep the gun enums constant for the database, and from what I remember, the weapon modelers didn't name the component parts consistently or configure the attachment connections between modules. 

Also each attachment modified the overall stats of the gun, which meant that the weapon itself had to sum all of the module data. I also remember needing to implement a life cycle hook for a small percentage of the modules.

My system involved a plugin that helped generate boilerplate code in the style of Roact elements (for the compatibility of attachments + the lifecycle hooks + stats), verify that you weren't redefining enums (which would literally change which guns a player owns b/c the database stores guns/modules by integer enums), and upload everything to ROBLOX.

I don't think this system had to be so complicated. If I were to do it again, I would probably just stick to JSON and take a look at the code using the data and modify it to match a simpler data input system. Also I would probably just suck it up and input the weapon data myself untless we reached a certain scale where that was untenable. 

I was really proud of the plugin UI, though. The toggle buttons are SO SATISFYING.

(although I did learn later that you're not supposed to make columns of round buttons like that because it makes it really difficult for our eyes to parse which buttons are where)

# Gifs

![SpammingNickWithDesignChoices.gif](https://drive.google.com/uc?id=1eF4AGKPkKbBBVDQsVhesd72ChuqUw6yF&export=download)

I care a lot about getting software right, which is evident from this gif of me writing essays about design decisions to Nick, the main developer for Frontlines. 

In retrospect, having to write that much about design decisions was a red flag that we didn't have a good development process set up. If we had been able to decide on a unified style & process for writing, testing, and evaluating code, then we wouldn't need to think that hard about design decisions and maybe work in smaller increments.

![GeneratingBoilerPlate.gif](https://drive.google.com/uc?id=12o41i6uojujevUD54-F93-W0exhlTEho&export=download)
![ConvertingFoldersToModels.gif](https://drive.google.com/uc?id=12O4oxDgxtEEegnLGqTj4QOaGu8R0Qr6F&export=download)
![UploadCycleMessages.gif](https://drive.google.com/uc?id=101yzwumNVOi0iVvwoFt21t_INkvCNy-H&export=download)
![UploadCycleBadDependencies.gif](https://drive.google.com/uc?id=1Z783d0xiKkj3QEhZ4CwjLIESQ0M31zzS&export=download)
![UploadCycleFormattedIncorrectly.gif](https://drive.google.com/uc?id=1ZYecv_dE99SoWa3JzryUZvnZGapeuehP&export=download)
![UploadCycleWithEnums3.gif](https://drive.google.com/uc?id=1ZA9ZsnlE492joYHWJBwU193V4BQPjCWy&export=download)
![UploadCycleWithEnums2.gif](https://drive.google.com/uc?id=1TAvX23Ri0FLRbdkXvJ95Q6bZRb9xKiRA&export=download)
![UploadCycleWithEnums.gif](https://drive.google.com/uc?id=1M126qnBkstOe1m2M6GSJGy60LSLQ4b_a&export=download)
![UploadCycle.gif](https://drive.google.com/uc?id=1R8knfGJ2gAoARzo7GgMKrEWGbcAqAVr3&export=download)
