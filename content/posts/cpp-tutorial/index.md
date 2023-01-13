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
  - coding
draft: false
---
{{<lead>}}
Note: This tutorial is for specific people in my work life. So for the meantime the information in this article will be updated and maintained for as long as those people need it.
{{</lead>}}

## Quickly bootstrapping a project using a GitHub template

I have created a template on GitHub that contains a whole series of template configuration files specifically designed for Visual Studio Code. The configurations consist of:
- C++ Debugging using Apple Clang
- Dev Containers using Docker (and others) or GitHub Codespaces C++ Clang Debugging [WIP]
- Remote development using VMs over SSH [WIP]

{{<alert>}}
Debugging with compiled machine code sometimes needs root (admin) privileges, Visual Studio Code on MacOS always asks for admin even when it is not needed. This can be circumvented by running a Virtual Machine as your own user. For MacOS, a great project that does all of this is [Lima](https://github.com/lima-vm/lima). Setup using Lima will come when this article will be updated for "Remote development using VMs over SSH"
{{</alert>}}

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
&ZeroWidthSpace;
{{<alert "check">}}
For description, you can leave it blank but you can fill it out to indicate what the repository does.
{{</alert>}}
&ZeroWidthSpace;
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

Visual Studio Code has an extension pack called the [C/C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack), this extension pack has all the necessary Visual Studio Code extensions for developing with C++. If you're using a Dev Container, then the extension pack (along side any other extensions) should already be installed and enabled. If you're not using a Dev Container, you can enable all extensions for the template by searching for the `@recommended` tag in the integrated extensions marketplace, make sure to enable all extensions listed there for the workspace (or globally if you so choose).

![Enabling recommended extensions](/uploads/cpp-tutorial/tutorial4.png)

## Launching and Debugging - VSCode Launch Configurations

The template contains various Launch configurations one can use to initiate debugging/running of their code using different configurations that all act slightly different in some way. 

### Choosing your appropriate launch configuration

You can view the different launch configurations in the `Run and Debug` pane, by selecting the currently active launch configuration's name.

![Launch configurations](/uploads/cpp-tutorial/tutorial5.png)

{{<alert "info">}}
NB: All launch configurations are by default designed to debug the currently viewed file in the editor.
{{</alert>}}

Open a C++ file and run the launch configuration that suits your needs to quickly start developing C++ code. Visual Studio Code will handle attaching/debugging the program. When viewing a C/C++ file in the editor, you can also choose to debug or run (One uses the debugger, the other doesn't) by clicking or selecting one of the dropdowns from the run icons in the top right of the editor.

![Run & Debug File Alternative](/uploads/cpp-tutorial/tutorial6.png)

### Debugging

The default debugger capabilities of Visual Studio Code are quite simple, and it's mostly the same across languages. Debugging using a debugger is way quicker than printing/logging (Aka. sending to STDOUT) because the debugger let's you easily see the contents of a variable, and what is being called and by whom. The functionalities supported by Visual Studio Code include being able to stop code execution at a predefined line (breakpoints), checking the contents of variables at runtime, watching for variable expressions and see what their values are, and lastly, peeking at the call stack of a break point. Lets look at the easiest part of the debuggining aspect, breakpoints.

#### Breakpoints

Breakpoints in a nutshell allow you to stop your code at a certain line as it's running. You can peak all the variables defined at a line of code, and see the call stack. Lets see what this looks like,

![Debugger Menu](/uploads/cpp-tutorial/tutorial7.png)

At the bottom of the `Run and Debug` pane, there's a section called breakpoints. Each breakpoint can be toggled using the checkmarks displayed beside each breakpoint. Breakpoints can be created can be created by clicking the left side of a line number in the editor. This will create a red circle beside the line number, which when you click again removes/deletes the breakpoint.

## Further Readings

{{<alert>}}
This section is an extra section. It's meant to satisfy your curiosities as to why the template contains the files it contains. **This is absolutely not a necessary section to read. Read this section if you're truly curious.**
{{</alert>}}

### Curiosities about the template C++ file

You may have noticed that the template repository contains a `problem1.cpp` file with a few lines of code already inside of it. And it kind of looks like this,

```c++
#include <iostream>

using namespace std;

int main() {
  return 0;
}
```

I'll now try to explain what each part does and why it's there.

#### Directives

The first line in the template C++ file is the `#include <iostream>` line. This line contains what's called a [directive](https://www.geeksforgeeks.org/cpp-preprocessor-directives-set-2/). Directives in C and C++ are lines of code that tell the compiler to do something. In this case, the `#include` directive is telling the compiler to include the iostream header file. 

WOAH! Hold your horses, what's a header file? Header files in a nutshell are simple files that describe what kind of functions a C++ file (source code file) contains.

Another directive that we're using in the file is the `using namespace std;` line. This directive is the `using` directive. The `using` directive here tells the compiler to use the `std` namespace.

Ok so what's a namespace? Since programming languages allow us to code various things, the name for 2 functions that both do something different may be the same. So namespaces were invented. One namespace may have a function called `print` which prints to the console something, and another namespace could also have a function called `print` which actually prints to a real printer. The functions have the same name, but do something different, hence namespaces.

The `using namespace std;` line is included, as you'll generally deal with the functions in the std namespace.

{{<alert "check">}}
The word `std` is actually short for `standard`!
{{</alert>}}

#### The main function

Unlike languages that start executing the first line of code in the file like JavaScript and Python do. Languages that give you more lower level control like C and C++ need an entrypoint, this is the first function that the computer will call when executing the program. Given that C, and subsequently C++, are statically typed languages (in other words, you always need to specify what type a variable is or what type of value a function returns), you'll see that the main function will (or at least should) return an `int` value. 

The reason for this is that all major operating systems expect a number to be returned from a process, this number tells the operating system if the process encountered an error, or if it ran successfully. The unix operating system (what MacOS and Linux have evolved from) basically states that 0 means successful, while anything other than 0 means an error occurred. There is no predefined error code, and it's up to the developers to assign each number an error code. But conventionally, 1 means a general error, or an unknown error.
