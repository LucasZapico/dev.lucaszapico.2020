---
title: 'Light Babel Node Config'
description: 'My 2020 configuration of Prettier and Eslint'
date-created: 2019/07/21
last-modified: '2020/10/27'
isdraft: false
categories: ['dev-env', 'config', 'notes']
tags: ['node', 'babel']
featured: './charas-group.png'
type: 'post'
---

[Source from rw;eruch](https://www.robinwieruch.de/minimal-node-js-babel-setup)

## What is this?

This post is personal reference

The other day I started building an APi first project with Node and express and I have become so accustom out of the box support for ES6 for the last few years using [Create React APP](https://reactjs.org/docs/create-a-new-react-app.html), or hoping into a [CodeSandBox](https://codesandbox.io/) that when `import express from 'express'` exploded I was a little taken aback...:blush:

Naturally I Googled "Nodejs Babel Config" and the one I liked was [rw;eruch - Minimal Nodejs Babel Setup](https://www.robinwieruch.de/minimal-node-js-babel-setup). Being particularly lazy and also aware that I have configured a node project for ES6 a thousand times. I quickly scrolled to the few command I needed which are listed below.

## The Commands and Files

```bash
npm i --save-dev nodemon @babel/core @babel/node @babel/preset-env
```

_.babelrc_

```json
{
  "presets": ["@babel/preset-env"]
}
```

_package.json_

```json
...
"scripts: {
  ...
  "dev": "nodemon --exec babel-node app.js"
  ...
}
....
```

### Notes:

In this particular project I ended up using webpack for my build due to the way [Heroku](https://heroku.com/) handles deployment.
