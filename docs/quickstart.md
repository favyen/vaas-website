---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

## Install Vaas

The fastest way to get started is with Docker. First, install nvidia-docker; on Ubuntu:

	distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
	curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
	curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
	sudo apt update && sudo apt install -y docker.io nvidia-container-toolkit
	sudo systemctl restart docker

Then:

	git clone https://github.com/mit-vaas/vaas.git
	cd vaas/docker
	docker build -t mit-vaas/vaas .
	docker run -p 8080:8080 mit-vaas/vaas

Access your Vaas deployment at http://localhost:8080.

## Import Data

Next, let's import some video data into Vaas.

1. From Timelines tab, press Add Timeline and enter whatever name you like.
2. Press Manage to select the timeline, and then press Add Data Series and again enter a name, with Video type.
3. Press Manage to select the data series.
4. Press Import from Local or Import from YouTube.

To import the traffic camera footage used in the [VLDB 2020 demo video](https://www.youtube.com/watch?v=cDsZKJUpLF4), unzip the YTStream dataset from https://favyen.com/miris/ytstream-dataset.zip and use the local import option (the path is e.g. `/path/to/ytstream-dataset/shibuya/videos/`).

TODO: can't import from filesystem into the Docker container. So we should add upload option, at least to upload one mp4 file (but maybe also zip of many mp4s).

## Create a Query

1. From Queries tab, create a new query.
2. In the Predicate and Rendering sub-tab, add Input 0 to the output rendering.
3. Go to the Explore tab and run the query on the video data. You may need to first go back to Timelines, select your timeline, and create a vector containing the one data series that you imported.

Now you can explore with adding various operations to the query.
