---
title: Torrenting
description: List of resources related to the world of torrenting
robots: all
date: '2022-12-06T23:00:00.000Z'
lastmod: '2022-12-10T23:00:00.000Z'
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

The whole setup is all defined in a docker compose definition with dependency on an existing \`proxy\` network and a traefik container monitoring docker
