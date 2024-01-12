---
layout: post
title: DIY persistent shuffle on Spotify
date: 2024-01-11
---

On Spotify, I like to make long—15 hours or more—playlists of music I'd like to get to know. Then I put the playlists on in the background and absorb the music passively while I work.

I'd like to hear *all* the music on the playlist. But I'm not going to listen to it all at once. And when I hit pause and go listen to something else, then come back to the playlist again, Spotify doesn't "remember" the tracks that I already heard.

If I were listening to each playlist in order, then I could remember the last track I listened to, and then return to it next time I listen to the playlist. But would take a lot of memory and effort and, what's more, I don't want to listen to my playlists in the same order every time.

Instead, I'd rather have my playlists on shuffle. But it's in the nature of randomness that, just by chance, I will hear some tracks much more often than others.

Consider the chart below, where I've simulated listening 10 times to a shuffled playlist of 100 tracks, each time listening to between 10% and 40% of the playlist. (The orange line shows the theoretical distribution that the simulation should follow; you can see that it matches exactly.)[^fn1]

[^fn1]: For simplicity, I'm assuming that Spotify shuffle is uniformly random. But in fact, I don't think it is, which makes the problem worse than I have described. When shuffling tracks, Spotify appears to favor tracks that it A) thinks you particularly like (because you have listened to them before), or B) thinks people like in general (because they have been listened to a lot). That is, it seems to put tend to put these tracks earlier in the queue. This may be good user design (in general, people are probably *pleased* when they put a playlist on and their favorite song comes right on). But it compounds the problem I describe above, because it means that, after (purely by chance) you listen to a track 5, 6, or 7 times, Spotify will put it in the queue ahead of the tracks that you've only heard once or twice, or not at all.

![Simulation of Spotify shuffle](assets/images/spotify_playlist_hist.png)

As you can see , the number of times each track is heard varies widely. Nearly 25% of tracks are heard only once or less. A similar proportion are heard four or more times.

I solved this problem for myself, but I needed to write a [Python script](https://github.com/malcolmsailor/spotify_filter_played) to do so. This script works with pairs of playlists, a "source" playlist and a "filtered" playlist. The "filtered" playlist is empty at first. Whenever the "filtered" playlist is empty, the script puts all of the songs from the "source" playlist onto it. Then each time I listen to a track from the "filtered" playlist, the script removes it from that playlist. The result is that I can listen to the filtered playlist all the way through.

Setting this up has been a real boon to my listening. Over the past year, in this way, I've gotten to know a huge amount of obscure chamber music, the recent studio recordings of Brad Mehldau, and the complete discography of Steely Dan, along with a great deal else.

You're more than welcome to use this script yourself, although it will take a fair bit of computer *savoir faire* to get it set up.
