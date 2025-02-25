---
layout: post
title: MusicBERT and RNBert for HuggingFace
date: 2025-02-24
---

I've posted to GitHub a [repository that implements MusicBERT](https://www.github.com/malcolmsailor/musicbert_hf) in the HuggingFace `transformers` library. This allows loading/training Roman numeral analysis models like [RNBert](https://malcolmsailor.com/2025/01/06/ISMIR.html), which is useful because, unlike `fairseq` (in which MusicBERT was originally implemented and trained), HuggingFace `transformers` is still actively maintained and developed and is therefore (for example) compatible with recent versions of Python.

Besides the `huggingface` implementation of MusicBERT, `MusicBert`,
the repository includes subclasses of MusicBERT that can be used for token-level tasks like Roman-numeral analysis: `MusicBertTokenClassification`, `MusicBertMultiTaskTokenClassification`, and `MusicBertMultiTaskTokenClassConditioned`.

It also includes functions to load the above classes from MusicBERT `fairseq` checkpoints, allowing the use of the original MusicBERT pretrained model for fine-tuning. `fairseq` is the library of the original MusicBERT implementation, and also the library in which that I did the training described in [my 2024 ISMIR paper](https://malcolmsailor.com/2025/01/06/ISMIR.html) and in my upcoming dissertation.

Finally, the repo includes scrpts for fine-tuning Roman-numeral models and then running inference on MIDI files.
