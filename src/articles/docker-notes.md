
---
title: 'Docker Notes 2020'
description: 'General notes on Docker'
date-created: 2020/10/21
last-modified: '2020/11/20'
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
Remove a stopped container run `docker ps -a` to confirm removal 

```shell
docker run -p 80:80 docker/getting-started
```
Runs docker in the foreground 

```shell
docker run -d -p 80:80 docker/getting-started
```
the `-d` flag will run docker in the background 

```shell
docker attach <id> 
```
or 

```shell
docker attach <name> 
```

##### Interactive Terminal

By default docker containers do not accept inputs through the terminal to enable this use the `-it` flag for interactive terminal

```shell
docker run -it
```

##### Port Mapping

```shell
docker 
```

#### Tags 

```shell
docker run node:12
```
A tag is a flag to specify a particular flavor of an image, the command without a tag will default to `latest` 




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

#### Run Container 

```shell
docker run --rm -it -p 3000:3000/tcp <imageName>
```


```shell 
docker pull node
```
Pulls an instance of an image 


> Containers only run as log as the process they contain is running is live, such as a database or web service.

#### Build Image 

```shell
docker build .
```
or 
```shell
docker build ./path/to/dir
```
or __best practice__ tag your image with a name
```shell
docker build . -t imageName
```

### Reference 

[Anatomy of a DockerFile](https://gist.github.com/adamveld12/4815792fadf119ef41bd)

[Docker Tutorial for Beginners](https://www.youtube.com/watch?v=fqMOX6JJhGo)

### For Review 

- port mapping 
- volume mapping
