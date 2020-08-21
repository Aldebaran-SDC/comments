# SoundMix <!-- omit in TOC -->

## Overview

Soundmix is an audio distribution and music sharing application that enables users to upload, promote and share audio, built with React. 

![Overall Page](<README public/Soundmix overall.png>)

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Getting Started](#getting-started)
- [Team Members](#team-members)

## Description

SoundMix contains the essential features in an audio distribution application, including:

- [Comments](#comments)
- [Primary Player](#primary-player)
- [User](#User)

This application was designed using Service-Oriented Architecture and uses a proxy-server for three microservices to communicate. 

<!-- omit in TOC -->

### Comments

_Developed by [Takanori Sono](#team-members)_

The Comments service is resposible for maintaining and displaying information regarding user name, comment, date, avatar, and comment location. 

The microservice also makes available an API for the Primary Player to 


### Primary Player

_Developed by [Shain Carrasco](#team-members)_

The primary player is responsible for maintaining and displaying data regarding music, song title, artist, genre, upload date, and waveform and is located at the top of the application. 

The primary player commnicates with the Comments microservice to grab comment location within the song and place the commenter's avatar along the music wavelength. 

<!-- omit in TOC -->

### User

_Developed by [David Orr](#team-members)_

The User service is responsible for maintaining and displaying data and information regarding the user that uploaded the music. The information include user name, avatar, number of followers, number of music uploaded, and the follow button. 



## Getting Started

This project can be run locally by following these steps.

### Installation <!-- omit in TOC -->

1. Download or clone this git repository onto your local machine
2. Within the root directory, run `npm install` in your terminal

### Build <!-- omit in TOC -->

In the same directory, run `npm build` to build the requisite files

### Start the Server <!-- omit in TOC -->

Within the root directory, run `npm start` and then navigate to our [webpage](http://localhost:3000)

## Team Members

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><br/><a href="https://github.com/taktaktaka"><img src="https://live.staticflickr.com/8104/8525230481_ff0e205732_b.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>Takanori Sono</b></sub></a></td>
    <td align="center"><br/><a href=""><img src="https://live.staticflickr.com/5220/5462177379_3da3eb5fe1_b.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>David Orr</b></sub></a></td>
    <td align="center"><br/><a href=""><img src="https://images.dog.ceo/breeds/terrier-westhighland/n02098286_2895.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>Shain Carrasco</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
