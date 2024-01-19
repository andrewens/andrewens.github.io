---
layout: post
title: "Modular gun customization for Frontlines"
tags: ["frontlines"]
thumbnail: https://lh3.google.com/u/0/d/1yFpAxmmUnesMmyVXmByl5ZbEMNkuJx6-
---

# About

This is what my final version of weapon customization looked like for Frontlines. Features included:

- Loadouts can be randomized, renamed, and reset
- Select a gun of different types -- assault rifle, SMG, LMG, etc (I only used an MP5 for testing purposes here)
- You can swap out every module/attachment on a gun.
  - Modules have varying compatibility with other modules; for example, a 9mm upper receiver can only accept magazines for 9mm ammo.
  - You can edit an attachment slot by clicking one of the blue (+)'s or clicking the arrow selector at the bottom.
- You can rotate the gun around to admire your creation, and the overlaid (+)'s move with it

This was pretty complicated to make because the gun modules with their compatibility lists created a complex, multi-layered graph (for example, some suppressors weren't compatible with some barrels. If you swapped the barrel, sometimes the suppressor also had to change). The specs I was given said the UI had to traverse things linearly. The arrow selector, for example, had to allow you to look at every attachment slot in the gun. However, some attachments would create/remove attachment slots! Plus, the gun is already a graph -- I had to collapse the graph into an array every time the user swapped a module.

Roact/Rodux were extremely helpful for making this happen.

# Gifs

![SwappingReceivers2.gif](https://lh3.google.com/u/0/d/17EpbA2o2o05WmKJyXwudoHUSW8AkYLBZ)
![SwappingReceivers.gif](https://lh3.google.com/u/0/d/1eVHA1xLTl-MBDapMk3Y9F-H9qVMG6QCP)
![PickingLoadout.gif](https://lh3.google.com/u/0/d/1SjbYeNm39laBgXUwB-Xd0foUVvIypKVx)
![RandomizeLoadout2.gif](https://lh3.google.com/u/0/d/1JV0lvX2YyM5hLQYBJeTjSyxTsK92t7U_)
![SelectingDifferentGuns.gif](https://lh3.google.com/u/0/d/196efZPJZRIXQR6ZBrCXljrDHxIExcap0)
![RandomizeLoadout.gif](https://lh3.google.com/u/0/d/1z_9HaJWEKqx5mM_H2hDyPZ7akGCBvqR6)
![CustomizingMultipleModules2.gif](https://lh3.google.com/u/0/d/1zZxafxk3k0lBsXjadnMP9Lxleb6DncKo)
![CustomizingMultipleModules.gif](https://lh3.google.com/u/0/d/1yFpAxmmUnesMmyVXmByl5ZbEMNkuJx6-)
![RotatingGun.gif](https://lh3.google.com/u/0/d/1L6ABB6OOR43nOoYORsp61HrAacyTqIUk)
![EditingHelicopter.gif](https://lh3.google.com/u/0/d/1Z_likIQMNrH3gFvbb-JTfda_2TM89N35)

The following gifs are previous iterations of the system shown above.

# Gifs (prototyping with Roact, after accelerator)

![GraphTraversal.gif](https://lh3.google.com/u/0/d/138XiGw0rScDvEJp35h5Sf9Oa3ZytlNJV)
![ILoveRoact.gif](https://lh3.google.com/u/0/d/1kNzDQhheGrCrY1dU2FEaHn4ZacFxmDZ0)
![NonClippedPrototypeUI.gif](https://lh3.google.com/u/0/d/1QwHkQdVJc-I7z8_B6ZH4jBWeDNCv38sK)
![PrototypeUI2.gif](https://lh3.google.com/u/0/d/142-xrUtnD0la6_v0H7wBUmRw73e-zVvE)
![PrototypeUI.gif](https://lh3.google.com/u/0/d/11wirQuGlCtlMjY3b1_MqyHxgFVdbN93B)
![WeaponStatsGraph.gif](https://lh3.google.com/u/0/d/19IhOH0wxkRAh_gxwu9a8sNjhu3E19vXj)
![PrototypeCustomizationEquipping.gif](https://lh3.google.com/u/0/d/1lIWowxYTGwKru1DBaGOwF87Xr9XHZwWH)
![PrototypeCustomization4.gif](https://lh3.google.com/u/0/d/1WEAZQ6GcLOLR-ZiiL-h1NuRhAhM5Opck)
![PrototypeCustomization3.gif](https://lh3.google.com/u/0/d/1hCyPm9_ZCqEgAi73R6zRgyxZQTGuKLMC)
![PrototypeCustomization2.gif](https://lh3.google.com/u/0/d/1WvvJwOPhTO9nUhNjNDxY4L2QYVIMTjgI)
![PrototypeCustomization.gif](https://lh3.google.com/u/0/d/1_lIEFq_ARV61myf4FQMhVap5XB9YjnRR)

# Gifs (from during accelerator)

![SelectMeleeWeapon.gif](https://lh3.google.com/u/0/d/1bYC_AkeWIK2Lm3R0SZNT63w9YtdspT5A)
![PrototypeLoadouts.gif](https://lh3.google.com/u/0/d/1wK0ZsU6WM2SuzvYKs0InHZ-X1Qscz9dI)
![PrototypeCustomization4.gif](https://lh3.google.com/u/0/d/1ys6DXArzroELLeVG8NdSVVO4hlF5tErW)
![PrototypeCustomization3.gif](https://lh3.google.com/u/0/d/16DxJ6H-w-LZgamQzFZSaPGO1KIGD1tcH)
![PrototypeCustomization2.gif](https://lh3.google.com/u/0/d/1m6UQTOIhAnOIEIuU5jlo6TA75cQj8BVZ)
![PrototypeCustomization.gif](https://lh3.google.com/u/0/d/1eS95h8UlXuuL6Vg1jCm2emO0lIxrb-_b)
![PrototypeModularCustomization.gif](https://lh3.google.com/u/0/d/19-iyzwbUpFyRyCYbZwLDKp7oleOtYqX3)



<br><br>
# A plugin to manage weapon data configuration

While I was programming the gun customization system for Frontlines, I also designed a system to allow gun modelers / non-programmers to input weapon data themselves. This was a bit involved because each weapon attachment had an arbitrary set of compatible attachments, often per multiple attachment slots, and we had to keep the gun enums constant for the database, and from what I remember, the weapon modelers didn't name the component parts consistently or configure the attachment connections between modules. 

Also each attachment modified the overall stats of the gun, which meant that the weapon itself had to sum all of the module data. I also remember needing to implement a life cycle hook for a small percentage of the modules.

My system involved a plugin that helped generate boilerplate code in the style of Roact elements (for the compatibility of attachments + the lifecycle hooks + stats), verify that you weren't redefining enums (which would literally change which guns a player owns b/c the database stores guns/modules by integer enums), and upload everything to ROBLOX.

I don't think this system had to be so complicated. If I were to do it again, I would probably just stick to JSON and take a look at the code using the data and modify it to match a simpler data input system. Also I would probably just suck it up and input the weapon data myself untless we reached a certain scale where that was untenable. 

I was really proud of the plugin UI, though. The toggle buttons are SO SATISFYING.

(although I did learn later that you're not supposed to make columns of round buttons like that because it makes it really difficult for our eyes to parse which buttons are where)

# Gifs

![SpammingNickWithDesignChoices.gif](https://lh3.google.com/u/0/d/1eF4AGKPkKbBBVDQsVhesd72ChuqUw6yF)

I care a lot about getting software right, which is evident from this gif of me writing essays about design decisions to Nick, the main developer for Frontlines. 

In retrospect, having to write that much about design decisions was a red flag that we didn't have a good development process set up. If we had been able to decide on a unified style & process for writing, testing, and evaluating code, then we wouldn't need to think that hard about design decisions and maybe work in smaller increments.

![GeneratingBoilerPlate.gif](https://lh3.google.com/u/0/d/12o41i6uojujevUD54-F93-W0exhlTEho)
![ConvertingFoldersToModels.gif](https://lh3.google.com/u/0/d/12O4oxDgxtEEegnLGqTj4QOaGu8R0Qr6F)
![UploadCycleMessages.gif](https://lh3.google.com/u/0/d/101yzwumNVOi0iVvwoFt21t_INkvCNy-H)
![UploadCycleBadDependencies.gif](https://lh3.google.com/u/0/d/1Z783d0xiKkj3QEhZ4CwjLIESQ0M31zzS)
![UploadCycleFormattedIncorrectly.gif](https://lh3.google.com/u/0/d/1ZYecv_dE99SoWa3JzryUZvnZGapeuehP)
![UploadCycleWithEnums3.gif](https://lh3.google.com/u/0/d/1ZA9ZsnlE492joYHWJBwU193V4BQPjCWy)
![UploadCycleWithEnums2.gif](https://lh3.google.com/u/0/d/1TAvX23Ri0FLRbdkXvJ95Q6bZRb9xKiRA)
![UploadCycleWithEnums.gif](https://lh3.google.com/u/0/d/1M126qnBkstOe1m2M6GSJGy60LSLQ4b_a)
![UploadCycle.gif](https://lh3.google.com/u/0/d/1R8knfGJ2gAoARzo7GgMKrEWGbcAqAVr3)
