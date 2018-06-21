# ROS 
ROS 全称 Robot Operating System。

## 关于 ROS
先看一下 ROS 官方的介绍
```aidl

The Robot Operating System (ROS) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms.


Why? Because creating truly robust, general-purpose robot software is hard. From the robot's perspective, problems that seem trivial to humans often vary wildly between instances of tasks and environments. Dealing with these variations is so hard that no single individual, laboratory, or institution can hope to do it on their own.


As a result, ROS was built from the ground up to encourage collaborative robotics software development. For example, one laboratory might have experts in mapping indoor environments, and could contribute a world-class system for producing maps. Another group might have experts at using maps to navigate, and yet another group might have discovered a computer vision approach that works well for recognizing small objects in clutter. ROS was designed specifically for groups like these to collaborate and build upon each other's work, as is described throughout this site.
```


在ROS维基中将ROS定义为：

```wiki 
ROS是一个开放源代码的机器人元操作系统。它提供了
我们对操作系统期望的服务，包括硬件抽象、低级设备控制、常用功能的实现、进程之间
的消息传递以及功能包管理。它还提供了用于在多台计算机之间获取、构建、编写和运行
代码的工具和库。
```

我看过的对于 ROS 是什么，解释的最好的是一本书： [《ROS 机器人编程》](https://community.robotsource.org/t/download-the-ros-robot-programming-book-for-free/51)<sup>①</sup>  ，作者：**表允晳** **赵汉哲** **郑黎蝹** **林泰勋**

这里摘取一些：

    通用计算机操作系统的种类有Windows（XP/7/8/10）、Linux（Linux Mint/Ubuntu/Fedora/Gentoo）、Mac（OS X Mavericks/Yosemite/El Capitan）等。至于智能手机，也有Android、iOS、Symbian、RiMO和Tizen等多种操作系统。
    那么ROS是一种为机器人设计的新的操作系统吗？
    ROS是Robot Operating System的缩写，因此会认为是一种操作系统。尤其是那些对ROS不熟悉的人会认为ROS和上面提到的操作系统一样。当我第一次遇到它时，我也认为ROS是一个新的机器人操作系统。然而更确切地说，ROS是一个元操作系统（Meta-Operating System）。元操作系  统不是一个明确定义的术语，而是一个利用应用程序和分布式计算资源之间的虚拟化层来  运用分布式计算资源来执行调度、加载、监视、错误处理等任务的系统。
     ROS不是传统的操作系统，如Windows、Linux和Android，反而是在利用现有的操作系统。使用ROS前需要先安装诸如Ubuntu的Linux发行版操作系统，之后再安装ROS，以使用进程管理系统、文件系统、用户界面、程序实用程序（编译器、线程模型等）。此外，它还以库的形式提供了机器人应用程序所需的多数不同类型的硬件之间的数据传输/接收、调度和错误处理等功能。这个概念也被称为中间件（Middleware）或软件框架（Software framework）。
    ROS开发、管理和提供基于元操作系统的各种用途的应用功能包，并拥有一个负责分享用户所开发的功能包的生态系统（Ecosystem）。如图2-1所示。ROS是在使用现有的传统操作系统的同时，通过使用硬件抽象概念来控制机器人应用程序所必需的机器人和传感器，同时也是开发用户的机器人应用程序的支持系统。


> 标注：

> ①：20180621 链接可用

