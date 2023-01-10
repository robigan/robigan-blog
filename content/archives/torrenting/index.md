---
title: Torrenting
description: List of resources related to the world of torrenting
robots: all
date: '2022-12-06T23:00:00.000Z'
tags:
  - torrenting
  - guides
  - resources & links
draft: false
---

## Words and Definitions

- **Seeding** - The process of having a file, and sharing to other people
- **Leeching** - Downloading a file from other peers

## Links & Resources

- [Piracy Subreddit](https://reddit.com/r/piracy "")
- [Trackers Subreddit](https://www.reddit.com/r/trackers/ "")
- [TRaSH's Guides](https://trash-guides.info/ "") - Guides on setting up automated torrenting systems

## Setup

{{<mermaid>}}
%%{ init: { 'flowchart': { 'curve': 'bump' } } }%%
flowchart LR;
subgraph proxy [Proxy network]
rproxy[Traefik Proxy] --> torrenting

subgraph torrenting [Grabbing system]
indexer[Prowlarr] <---> grabbers[Sonarr/Radarr]
grabbers --> downloader[Transmission]
indexer --> trackers[Tracking Websites]
grabbers --> storage[(RAID-1 Array)]
viewers[Jellyfin] --> storage
end

end

style proxy fill:#FEF9C3
style torrenting fill:#FCA5A5
{{</mermaid>}}

The whole setup is all defined in a docker compose definition with dependency on an existing \`proxy\` network and a traefik container monitoring docker.

Prowlarr handles:
- Getting the links to where the copies of the files are stored on the internet for some websites
- Updating the various websites that track where these copies of files are stored on the internet to Sonarr/Radarr

Sonarr/Radarr handle:
- Finding the appropriate, target files to download based on user-defined criteria
- Sending them to the download client
- Copying/moving the downloaded files to the final destination
- Checking in with websites that list what movies to get & download (For example, the hottest movies released)

Transmission handles:
- Implementation and protocols necessary to download files using the technology of peer 2 peer file sharing

Jellyfin handles:
- Viewing the media in a web browser (Or in other applications)
- Downloading the thumbnails, metadata and identifying movies so that information about them is complete
- Providing trailers for the media
- Tracking what has been watched by the users of Jellyfin
- Easily being able to download subtitles from [OpenSubtitles](https://www.opensubtitles.com/en)
