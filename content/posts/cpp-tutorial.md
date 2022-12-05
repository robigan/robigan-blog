---
title: C++ Project Setup & Tutorial for VSCode
description: A tutorial on how to setup a C++ Workspace/Project using a GitHub Template for Visual Studio Code
summary: C++ Workspace/Project Setup for VSCode
robots: all
date: 2022-12-05T08:30:00+01:00
tags:
  - tutorial
  - c++
  - vscode
draft: true
---
Note: This tutorial is for specific people in my work life. So for the meantime the information in this article will be updated and maintained for as long as those people need it.

# Section 1 - Quickly bootstrapping a project using a GitHub template

I have created a template on GitHub that contains a whole series of template configuration files specifically designed for Visual Studio Code. The configurations consist of:
- C++ Debugging using Apple Clang
- Dev Containers using Docker (and others) or GitHub Codespaces C++ Clang Debugging [WIP]
- Remote development using VMs over SSH

You can find the template repository on my [GitHub Organization](https://github.com/cs-class-07) or by clicking this [link](https://github.com/cs-class-07/cpp-template-vscode). Using the template is easy, and all it takes is clicking the [<span class="bg-[#2ea043] hover:bg-[#238636] text-[#fff] p-1 rounded-md">&nbsp;&nbsp;Use this template&nbsp;&nbsp;</span>](https://github.com/cs-class-07/cpp-template-vscode/generate) button on the GitHub repository.