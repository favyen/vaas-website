---
id: operations
title: Operations
sidebar_label: Supported Operations
---

This page lists most of the operations available in Vaas.

## Data Types

Vaas supports these data types:

- Video
- Object Detections
- Object Tracks
- Image Lists (associate list of images with each frame/timestep)
- Integer (including image classes)
- Float
- String (including arbitrary JSON data)
- Rich Text (for rendering on video)

## Models

### YOLOv3 (video -> detection)

YOLOv3 is an object detection model. See https://pjreddie.com/darknet/yolo/.

### Simple Classifier (video -> int)

An image classification model consisting of a simple series of strided convolutional layers. The number of layers is determined based on the input resolution. The model is trained using cross entropy loss.

## Filters

### Detection Filter (detection -> detection)

Filter detections by confidence score or object category.

### Track Filter (track -> track)

Filter object tracks based on bounding boxes. For example, specify a sequence of bounding boxes that tracks must pass through in order, or a set of boxes that the tracks must pass through in any order, or multiple sequences or sets.

## Heuristics

### IOU Tracker

An overlap-based multi-object tracker. It is similar to https://github.com/abewley/sort but without Kalman filter.

## Video Manipulation

### Crop

Crop video at a bounding box.

### Rescale

Re-scale video to a different resolution.

## Custom

### Python

Develop an arbitrary Python function using the Vaas Python library in skyhook_pylib.py.

## Miscellaneous

### Resample

Re-sample any data at a different framerate.

### Boolean Expression

Combine predicates in an AND expression. Predicates are currently evaluated left-to-right, but execution should be automatically optimized in the future.
