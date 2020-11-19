---
title: 'Docker Notes 2020'
description: 'General notes on Docker'
date-created: 2020/10/21
last-modified: '2020/11/18'
isdraft: false
categories: ['docker', 'notes']
tags: []
type: 'post'
---

## Common Commands 

### Containers 

```shell
docker run node 
```
Runs and instance of an image. If the image does not exist docker will pull an instance 

```shell 
docker ps
```
List running containers and basic information
 
 ```shell 
docker ps -a 
```
List containers both running or stopped and basic information 

```shell 
docker stop silly_sammet
```
Stops a running container 

```shell
docker rm silly_sammet
```
remove a stopped container run `docker ps -a` to confirm removal 


### Images

```shell
docker images 
```
Shows a list of images

```shell
docker rmi node
```
removes an image Note: the image cannot be in use by any container

```shell 
docker run node
```
Runs and image if the image already exists on machine else pulls latest image and runs. 


```shell 
docker pull node
```
Pulls an instance of an image 