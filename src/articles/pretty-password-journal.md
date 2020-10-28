---
title: 'Making Pretty Password'
description: 'A informal and non technical entry about the making of pretty password'
date-created: 2020/09/16
last-modified: '2020/10/28'
isdraft: false
categories: ['journal', 'project']
tags: []
type: 'post'
---

## The Story Behind Pretty Password

A few days ago, I wanted to build a demo news blog/site, something like Bloomberg news. I figured there was a New API out there that I could pull from and only worry about the frontend of the project. I found NewsAPI, and during signup, they asked for a password. These days I exclusively used generated passwords for obvious reasons. Alas, Chrome did not suggest a "strong" password, and my other option is to log into 1Password to use their generator...This requires me to type in my relatively long 1Password password. Not an ideal workflow. I figured there was a Chrome extension that would quickly Generate a password for me....I was right, but they were ugly....yeah, my designer sensibility would not allow me to install such ugly applications... I know, I know, this is just how I am. So I figured it was a great opportunity to build a Chrome extension that was less hideous and Pretty Password was the result.

<!-- ### A few note worth moments

#### Enabling ES6 and SASS

An interesting challenge was the enabling ES6 and SASS support for a Chrome extension framework. The reason behind this is that Chrome extensions builds have vary particular structures to conform to Chromes protocols, a notable one being security. Normally when building using Webpack, or Gulp from a few years ago in general a project's js and sass is transpiled into single files because the browser doesn't need every broken up into things that make sense to us lowly humans. Due to this, the default for build scripts is to transpile everything into a `public`, `build` or `dist` directory.  But, Chrome requires that our   -->
