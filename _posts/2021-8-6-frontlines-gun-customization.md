---
layout: post
title: "Modular gun customization for Frontlines"
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

![SwappingReceivers2.gif](https://drive.google.com/uc?id=17EpbA2o2o05WmKJyXwudoHUSW8AkYLBZ&export=download)
![SwappingReceivers.gif](https://drive.google.com/uc?id=1eVHA1xLTl-MBDapMk3Y9F-H9qVMG6QCP&export=download)
![PickingLoadout.gif](https://drive.google.com/uc?id=1SjbYeNm39laBgXUwB-Xd0foUVvIypKVx&export=download)
![RandomizeLoadout2.gif](https://drive.google.com/uc?id=1JV0lvX2YyM5hLQYBJeTjSyxTsK92t7U_&export=download)
![SelectingDifferentGuns.gif](https://drive.google.com/uc?id=196efZPJZRIXQR6ZBrCXljrDHxIExcap0&export=download)
![RandomizeLoadout.gif](https://drive.google.com/uc?id=1z_9HaJWEKqx5mM_H2hDyPZ7akGCBvqR6&export=download)
![CustomizingMultipleModules2.gif](https://drive.google.com/uc?id=1zZxafxk3k0lBsXjadnMP9Lxleb6DncKo&export=download)
![CustomizingMultipleModules.gif](https://drive.google.com/uc?id=1yFpAxmmUnesMmyVXmByl5ZbEMNkuJx6-&export=download)
![RotatingGun.gif](https://drive.google.com/uc?id=1L6ABB6OOR43nOoYORsp61HrAacyTqIUk&export=download)

The following gifs are previous iterations of the system shown above.

# Gifs (prototyping with Roact, after accelerator)

![GraphTraversal.gif](https://drive.google.com/uc?id=138XiGw0rScDvEJp35h5Sf9Oa3ZytlNJV&export=download)
![ILoveRoact.gif](https://drive.google.com/uc?id=1kNzDQhheGrCrY1dU2FEaHn4ZacFxmDZ0&export=download)
![NonClippedPrototypeUI.gif](https://drive.google.com/uc?id=1QwHkQdVJc-I7z8_B6ZH4jBWeDNCv38sK&export=download)
![PrototypeUI2.gif](https://drive.google.com/uc?id=142-xrUtnD0la6_v0H7wBUmRw73e-zVvE&export=download)
![PrototypeUI.gif](https://drive.google.com/uc?id=11wirQuGlCtlMjY3b1_MqyHxgFVdbN93B&export=download)
![WeaponStatsGraph.gif](https://drive.google.com/uc?id=19IhOH0wxkRAh_gxwu9a8sNjhu3E19vXj&export=download)
![PrototypeCustomizationEquipping.gif](https://drive.google.com/uc?id=1lIWowxYTGwKru1DBaGOwF87Xr9XHZwWH&export=download)
![PrototypeCustomization4.gif](https://drive.google.com/uc?id=1WEAZQ6GcLOLR-ZiiL-h1NuRhAhM5Opck&export=download)
![PrototypeCustomization3.gif](https://drive.google.com/uc?id=1hCyPm9_ZCqEgAi73R6zRgyxZQTGuKLMC&export=download)
![PrototypeCustomization2.gif](https://drive.google.com/uc?id=1WvvJwOPhTO9nUhNjNDxY4L2QYVIMTjgI&export=download)
![PrototypeCustomization.gif](https://drive.google.com/uc?id=1_lIEFq_ARV61myf4FQMhVap5XB9YjnRR&export=download)

# Gifs (from during accelerator)

![PrototypeLoadouts.gif](https://drive.google.com/uc?id=1wK0ZsU6WM2SuzvYKs0InHZ-X1Qscz9dI&export=download)
![PrototypeCustomization4.gif](https://drive.google.com/uc?id=1ys6DXArzroELLeVG8NdSVVO4hlF5tErW&export=download)
![PrototypeCustomization3.gif](https://drive.google.com/uc?id=16DxJ6H-w-LZgamQzFZSaPGO1KIGD1tcH&export=download)
![PrototypeCustomization2.gif](https://drive.google.com/uc?id=1m6UQTOIhAnOIEIuU5jlo6TA75cQj8BVZ&export=download)
![PrototypeCustomization.gif](https://drive.google.com/uc?id=1eS95h8UlXuuL6Vg1jCm2emO0lIxrb-_b&export=download)
![PrototypeModularCustomization.gif](https://drive.google.com/uc?id=19-iyzwbUpFyRyCYbZwLDKp7oleOtYqX3&export=download)
