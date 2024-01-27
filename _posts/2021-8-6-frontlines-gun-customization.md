---
layout: post
title: "Modular gun customization for Frontlines"
tags: ["frontlines"]
thumbnail: https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/CustomizingMultipleModules.gif
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

![SwappingReceivers2.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/SwappingReceivers2.gif)
![SwappingReceivers.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/SwappingReceivers.gif)
![PickingLoadout.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/PickingLoadout.gif)
![RandomizeLoadout2.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/RandomizeLoadout2.gif)
![SelectingDifferentGuns.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/SelectingDifferentGuns.gif)
![RandomizeLoadout.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/RandomizeLoadout.gif)
![CustomizingMultipleModules2.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/CustomizingMultipleModules2.gif)
![CustomizingMultipleModules.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/CustomizingMultipleModules.gif)
![RotatingGun.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomization/RotatingGun.gif)
![EditingHelicopter.gif](https://storage.googleapis.com/test-bucket-24385982346/TempFrontlinesNeedsReorganization/EditingHelicopter.gif)

The following gifs are previous iterations of the system shown above.

# Gifs (prototyping with Roact, after accelerator)

![GraphTraversal.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/GraphTraversal.gif)
![ILoveRoact.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/ILoveRoact.gif)
![NonClippedPrototypeUI.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/NonClippedPrototypeUI.gif)
![PrototypeUI2.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/PrototypeUI2.gif)
![PrototypeUI.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/PrototypeUI.gif)
![WeaponStatsGraph.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/WeaponStatsGraph.gif)
![PrototypeCustomizationEquipping.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/PrototypeCustomizationEquipping.gif)
![PrototypeCustomization4.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/PrototypeCustomization4.gif)
![PrototypeCustomization3.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/PrototypeCustomization3.gif)
![PrototypeCustomization2.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/PrototypeCustomization2.gif)
![PrototypeCustomization.gif](https://storage.googleapis.com/test-bucket-24385982346/PrototypeCustomizationWithRoact/PrototypeCustomization.gif)

# Gifs (from during accelerator)

![SelectMeleeWeapon.gif](https://storage.googleapis.com/test-bucket-24385982346/TempFrontlinesNeedsReorganization/SelectMeleeWeapon.gif)
![PrototypeLoadouts.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesAcceleratorCustomization/PrototypeLoadouts.gif)
![PrototypeCustomization4.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesAcceleratorCustomization/PrototypeCustomization4.gif)
![PrototypeCustomization3.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesAcceleratorCustomization/PrototypeCustomization3.gif)
![PrototypeCustomization2.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesAcceleratorCustomization/PrototypeCustomization2.gif)
![PrototypeCustomization.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesAcceleratorCustomization/PrototypeCustomization.gif)
![PrototypeModularCustomization.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesAcceleratorCustomization/PrototypeModularCustomization.gif)



<br><br>
# A plugin to manage weapon data configuration

While I was programming the gun customization system for Frontlines, I also designed a system to allow gun modelers / non-programmers to input weapon data themselves. This was a bit involved because each weapon attachment had an arbitrary set of compatible attachments, often per multiple attachment slots, and we had to keep the gun enums constant for the database, and from what I remember, the weapon modelers didn't name the component parts consistently or configure the attachment connections between modules. 

Also each attachment modified the overall stats of the gun, which meant that the weapon itself had to sum all of the module data. I also remember needing to implement a life cycle hook for a small percentage of the modules.

My system involved a plugin that helped generate boilerplate code in the style of Roact elements (for the compatibility of attachments + the lifecycle hooks + stats), verify that you weren't redefining enums (which would literally change which guns a player owns b/c the database stores guns/modules by integer enums), and upload everything to ROBLOX.

I don't think this system had to be so complicated. If I were to do it again, I would probably just stick to JSON and take a look at the code using the data and modify it to match a simpler data input system. Also I would probably just suck it up and input the weapon data myself untless we reached a certain scale where that was untenable. 

I was really proud of the plugin UI, though. The toggle buttons are SO SATISFYING.

(although I did learn later that you're not supposed to make columns of round buttons like that because it makes it really difficult for our eyes to parse which buttons are where)

# Gifs

![SpammingNickWithDesignChoices.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/SpammingNickWithDesignChoices.gif)

I care a lot about getting software right, which is evident from this gif of me writing essays about design decisions to Nick, the main developer for Frontlines. 

In retrospect, having to write that much about design decisions was a red flag that we didn't have a good development process set up. If we had been able to decide on a unified style & process for writing, testing, and evaluating code, then we wouldn't need to think that hard about design decisions and maybe work in smaller increments.

![GeneratingBoilerPlate.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/GeneratingBoilerPlate.gif)
![ConvertingFoldersToModels.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/ConvertingFoldersToModels.gif)
![UploadCycleMessages.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/Plugin/UploadCycleMessages.gif)
![UploadCycleBadDependencies.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/Plugin/UploadCycleBadDependencies.gif)
![UploadCycleFormattedIncorrectly.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/Plugin/UploadCycleFormattedIncorrectly.gif)
![UploadCycleWithEnums3.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/Plugin/UploadCycleWithEnums3.gif)
![UploadCycleWithEnums2.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/Plugin/UploadCycleWithEnums2.gif)
![UploadCycleWithEnums.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/Plugin/UploadCycleWithEnums.gif)
![UploadCycle.gif](https://storage.googleapis.com/test-bucket-24385982346/FrontlinesCustomizationPlugin/Plugin/UploadCycle.gif)
