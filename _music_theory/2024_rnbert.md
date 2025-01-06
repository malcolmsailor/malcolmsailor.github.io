---
title: "RNBert: Fine-Tuning a Masked Language Model for Roman Numeral Analysis"
subheading: International Society for Music Information Retrieval (ISMIR) 2024
year: 2024
abstract: "Music is plentiful, but labeled data for music theory tasks like roman numeral analysis is scarce. Self-supervised pretraining on unlabeled data is therefore a promising means of improving performance on these tasks, especially because, during pretraining, a model may be expected to acquire latent representations of musical abstractions like keys and chords. However, existing deep learning models for roman numeral analysis have not used pretraining, instead training from scratch on labeled data, while conversely, pretrained models for music understanding have generally been applied to sequence-level tasks not involving explicit music theory, like composer or genre classification. In contrast, this paper applies pretraining methods to a music theory task by fine-tuning a masked language model, MusicBERT, for roman numeral analysis. We apply token classification to predict labels for each note, then aggregate the predictions of simultaneous notes to obtain a single label at each time step. Conditioning the chord predictions on key predictions gives more coherent labels. The resulting model outperforms previous roman numeral analysis models by a substantial margin."
downloads:
    - text: "text"
      path: "RNBERT_ISMIR_Camera_Ready.pdf"
---
