---
title: 'Auth Notes'
description: 'A walk through on how to build pages with images from json data'
date-created: 2020/10/21
last-modified: '2020/10/27'
isdraft: true
categories: ['auth', 'notes']
tags: []
type: 'post'
---

- storage, stores token
- client
- server

### What is a token

A JSON web token is a JSON data object that has been hashed using JSON data + signature.

This is secure because of a private, public key relationship.

### Auth In Node Express App

#### Packages and Helpers

##### [Bcryptjs](https://www.npmjs.com/package/bcryptjs)

Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser.
[Bcryptjs](https://www.npmjs.com/package/bcryptjs)

[Jwt](https://jwt.io/)

## Other Resources

[Auth0 react user auth walk through](https://auth0.com/blog/complete-guide-to-react-user-authentication/)
