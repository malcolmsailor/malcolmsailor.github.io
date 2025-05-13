---
layout: post
title: EntropyGuessr
date: 2025-05-13

---

I recently had an idea for how to build intuition for different values of entropy: a guessing game, in which you are given a target entropy value, and you respond with a distribution. Your goal is for the entropy of your distribution to come as close as possible to matching the target.

As an exercise in learning React, I recently implemented this idea, and you can find it just below or as a [standalone page](/static_pages/entropyGuessr.html).

{% include entropyGuessr.html %}
<!--
To rebuild the react app
1. Run npm run build in the EntropyGuessr repo
2. `trash assets/entropyGuessr/*`
3. `cp -r /Users/malcolm/google_drive/typescript/EntropyGuessr/dist/ assets/entropyGuessr`
4. Run `ls assets/entropyGuessr/assets/` and update entropyGuessr.html with the new hash.

There's surely a better way of doing all of this but it works well enough for now.
-->
