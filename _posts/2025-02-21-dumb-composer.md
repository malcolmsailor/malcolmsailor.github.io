---
layout: post
title: "`dumb_composer`: A Rule-Based Classical Music Generator"
date: 2025-01-21
---

During my dissertation research, I wrote a Python program that takes a Roman numeral analysis as input and outputs synthetic Classical music. I aimed to generate labeled data for training Roman-numeral analysis models like the one in [my 2024 ISMIR paper](2025/01/06/ISMIR.html), but I found that it did not improve the model's performance.[^generative]

[^generative]: I should add that a much better way of generating verisimiltudinous Classical music would be to train a generative neural network. Moreover, it's likely that a better approach for creating synthetic labeled data would be to train a generative neural network conditioned on the Roman numeral labels. (A network like [RNBert](2025/01/06/ISMIR.html) could be of help in creating a dataset to train such a network.)

It was nevertheless a fun project and so I've [posted it to my Github](https://github.com/malcolmsailor/dumb_composer). While the program is arguably a sort of composer, it's not a very good composer, and so I called it `dumb_composer`.

Briefly, the way it works is described in the below graphic:[^rncollage_note]

![`dumb_composer` flow chart.](/assets/images/dumb_composer_flow_chart.jpg)

[^rncollage_note]: The code for the first step ("Make chord progression") was performed by a different script and is not included in the repository.

Here's an example of the results. The input chord labels are printed below the score.

![`dumb_composer` example score.](/assets/images/dumb_composer1.jpg)

<audio controls>
  <source src="assets/audio/dumb_composer1.mp3" type="audio/mpeg">
  Your browser does not support the audio elements.
</audio>

I discuss this project in a little more detail in my forthcoming dissertation.




