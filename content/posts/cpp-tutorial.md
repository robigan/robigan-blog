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
{{<lead>}}
Note: This tutorial is for specific people in my work life. So for the meantime the information in this article will be updated and maintained for as long as those people need it.
{{</lead>}}

## Quickly bootstrapping a project using a GitHub template

I have created a template on GitHub that contains a whole series of template configuration files specifically designed for Visual Studio Code. The configurations consist of:
- C++ Debugging using Apple Clang
- Dev Containers using Docker (and others) or GitHub Codespaces C++ Clang Debugging [WIP]
- Remote development using VMs over SSH [WIP]

You can find the template repository on my [GitHub Organization](https://github.com/cs-class-07) or by clicking this [link](https://github.com/cs-class-07/cpp-template-vscode).

### Making use of the template

Using the template is easy, and all it takes is clicking the [<span class="bg-[#2ea043] hover:bg-[#238636] text-[#fff] p-1 rounded-md">&nbsp;&nbsp;Use this template&nbsp;&nbsp;</span>](https://github.com/cs-class-07/cpp-template-vscode/generate) button on the GitHub repository.

{{<alert>}}
If you have access to GitHub Codespaces, a popup will appear asking if you want to create a new repository using the template or if you want to open it in GitHub Codespaces. For this tutorial, select "Create a new repository"
{{</alert>}}

![Initiating the new repository process](/uploads/cpp-tutorial/tutorial1.png)
![Choosing the Create new repository option](/uploads/cpp-tutorial/tutorial2.png)

Upon clicking the Create a new repository button or after having clicked the use this template button, you'll be taken to a dialogue asking for where you want to create the new repository, the name you want to give it, the description and if you want to make it public or private.

{{<alert "check">}}
For name, you can use whatever. My general rule of thumb is to name the repository after the school work, e.g. "Lab 6".
{{</alert>}}

{{<alert "check">}}
For description, you can leave it blank but you can fill it out to indicate what the repository does.
{{</alert>}}

{{<alert "check">}}
For privacy, I'll generally choose "Private" until my school work's due date is done, such that other students cannot copy what I have done.
{{</alert>}}

Once you have filled out the necessary options, the <span class="bg-[#2ea043] text-[#fff] p-1 rounded-md">&nbsp;&nbsp;Create repository from template&nbsp;&nbsp;</span> button will light up and clicking it will create a new repository for you.

![Creating new repository dialogue](/uploads/cpp-tutorial/tutorial3.png)

### Cloning the repository

{{<alert>}}
If you plan on using GitHub Codespaces, skip this section, and go to the codespaces section of this article. (Coming Soon)
{{</alert>}}

Right now the new repository exists on the cloud, on GitHub's servers. We now have to clone (or in other words, download) the repository to our computer so we can develop C++ code locally.

Cloning is a very simple process, but is not part of the scope of this tutorial. So I'll go over it briefly;
- Clone the repository
- Open the newly created project folder using Visual Studio Code

{{<alert>}}
GitHub may provide an option when clicking the Code button to open directly in Visual Studio Code using a link. Or if you're logged into your GitHub account in Visual Studio Code, you can use the command palette (Ctrl + Shift + P) to clone the repository from Visual Studio Code using the **Git: Clone** command
{{</alert>}}

### Enabling the C++ Development Extension

Visual Studio Code has an extension pack