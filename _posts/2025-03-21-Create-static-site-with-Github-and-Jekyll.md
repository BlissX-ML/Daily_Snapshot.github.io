---
layout: post
title:  "Jekyll 项目创建"
date:   2025-03-20 20:04:39 +0800
slug: "Jekyll-project-create"
categories: jekyll update
permalink: /git_related/Jekyll-project-create/
---

# Abstract
In this article, I will guide you through the process of creating a personal website using GitHub and Jekyll on Linux. (A future update may include instructions for Windows.) The steps in this guide are as follows, and I hope they will help you better understand the process and create your own website:

- Install or update required software, such as Ruby, Jekyll, rbenv, Git, and others.
- Create your website and preview the web interface.
- Create a GitHub repository and synchronize it with the Jekyll project.
- Configure GitHub Pages on GitHub.
- Add a new page to your website and preview the changes.

-------------

# 概要

在本文中，我将向您展示如何在 Linux 上使用 GitHub 和 Jekyll 创建个人网站。（未来可能会更新 Windows 系统的相关内容。）本手册的步骤如下，希望它能帮助您理解过程并创建自己的个人网站：

- 安装或更新所需的软件，如 Ruby、Jekyll、rbenv、Git 等。
- 创建网站并预览网页界面。
- 创建 GitHub 仓库，并将其与 Jekyll 项目同步。
- 在 GitHub 上配置 GitHub Pages。
- 为您的网站添加新页面，并查看效果。

---------------


# In Engish
## In Linux system
We recommend creating a static site with Jekyll, which is generally easier to set up on a Linux system compared to a Windows system.
### 一、Install Ruby and Jekyll 
1. Update system (with root permissions):
```bash
sudo apt update && sudo apt upgrade -y
```

2. Install required dependencies:
```bash
sudo apt install curl git build-essential libssl-dev libreadline-dev zlib1g-dev -y
```

3. Install Ruby (recommended to manage Ruby versions with rbenv):
    - First step: Install rbenv and ruby-build.
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
source ~/.bashrc
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

    - Second step: Check if rbenv is installed correctly.  
```bash
rbenv -v
```

    - Third step: Install the latest stable version of Ruby.  
```bash
rbenv install 3.2.0   # You can change the version to your preference.
rbenv global 3.2.0
```

    - Fourth step: Verify Ruby installation.  
```bash
ruby -v
```

4. Install Bundler and Jekyll
```bash
gem install bundler jekyll
```

### 二、Create your own Jekyll Website
1. Create a new Jekyll site (e.g., named Great-Site):
```bash
jekyll new Great-Site
```

2. Navigate to the site folder:
```bash
cd Great-Site
```

3. Install the required dependencies:
```bash
bundle install
```

4. Start the Jekyll server locally:
- Start the server
```bash
bundle exec jekyll serve
```
- Preview the site by visiting: http://127.0.0.1:4000/

### 三、Configure your Jekyll Website
1. Edit the `_config.yml` file and modify the configuration as follows:
```yaml
title: "Your Personal Website"
description: "Welcome to my personal website!"
baseurl: "" # Leave this empty for user or organization pages.
url: "https://yourGitHubUsername.github.io"
```
```yaml
theme: minima
```
```yaml
plugins:
  - jekyll-feed
```
- Explanation:

- title: The name of your website.
- description: A brief description of the website’s purpose, relevant for SEO.
- baseurl: Leave this empty for user or organization pages. If using a project page, include the repository name, e.g., `/your-project-name`.
- url: Your GitHub username followed by `.github.io`, e.g., `https://YourUsername.github.io`.
- theme: The theme of your site, typically `minima`. Make sure this matches the theme in the Gemfile.
    - In the Gemfile, you should also include the theme name, e.g., `gem "minima"`. This is the Jekyll theme you are using. After updating or modifying the Gemfile, run `bundle install` to make the changes effective.

    - If you don't need a theme, you can delete this line. You cannot modify it to `theme: false`, as Jekyll does not recognize that configuration.

- plugins: Plugins required for the site, such as `jekyll-feed`. Ensure these plugins are also declared in the Gemfile, like `gem "jekyll-feed"`. Run `bundle install` to install these plugins.



------------------



# 中文版
## Linux 系统下安装
### 一、安装 Ruby 和 Jekyll
1. 更新系统
```bash
sudo apt update && sudo apt upgrade -y
```

2. 安装依赖工具
```bash
sudo apt install curl git build-essential libssl-dev libreadline-dev zlib1g-dev -y
```

3. 安装 Ruby（推荐使用 rbenv 进行管理）
    - 第一步：安装 rbenv 和 ruby-build
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
source ~/.bashrc
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
    - 第二步：检查安装是否成功
```bash
rbenv -v
```
    - 第三步：安装 Ruby 最新稳定版
```bash
rbenv install 3.2.0   # 可以改为你想安装的版本
rbenv global 3.2.0
```
    - 第四步：验证 Ruby 安装
```bash
ruby -v
```

4. 安装 Bundler 和 Jekyll
```bash
gem install bundler jekyll
```

### 二、创建你的 Jekyll 网站
1. 创建新的 Jekyll 网站（例如名为 Great-Site 的文件夹）
```bash
jekyll new Great-Site
```

2. 进入文件夹
```bash
cd Great-Site
```

3. 安装依赖包
```bash
bundle install
```

4. 本地启动 Jekyll 服务器
- 启动 Jekyll 服务器
```bash
bundle exec jekyll serve
```
- 通过访问 http://127.0.0.1:4000/ 预览网页


### 三、配置 Jekyll 网站
- 编辑 _config.yml 文件，修改如下配置：

```yaml
title: "你的个人网站"
description: "欢迎来到我的个人网站！"
baseurl: "" # 如果是用户或组织页面，则保持为空
url: "https://你的GitHub用户名.github.io"
```
```yaml
theme: minima
```
```yaml
plugins:
  - jekyll-feed
```
- 解释：
    - title：网站的名称。
    - description：简单介绍网站的用途和功能，与 SEO 相关联。
    - baseurl：如果你使用 GitHub Pages 来托管你的 Jekyll 网站并且是个人或组织页面，则这里为空；如果你用自己的项目页面来托管，记得加上项目名，如 `/own-Web.github.io`。
    - url：GitHub 用户名 + `.github.io`，如 `https://HappyGirl.github.io`。
    - theme：这里放置 Jekyll 的主题名称，默认是 minima，确保 Gemfile 中也有这个主题。
        - 在 Gemfile 中同样需要添加主题名称。例如，如果你使用的是 `minima` 主题，则 Gemfile 中应该包含 `gem "minima"`。Gemfile 用于指定 Jekyll 网站所需要的各种 gem。**每次更新或删除 Gemfile 中的内容后，记得执行 `bundle install` 来使修改生效。**
  
        - 如果你不需要使用任何模板，可以直接删除 `theme` 行，而不是将其修改为 `theme: false`，因为 Jekyll 不认 `theme: false` 的配置。

    - plugins：你需要的插件，记得在 Gemfile 中也添加对应的 `gem`，例如 `jekyll-feed`。插件需要在 Gemfile 中声明并执行 `bundle install` 安装。


🌟 四、使用 Git 和 GitHub
1. 安装 Git
bash
复制
编辑
sudo apt install git
2. 配置 Git 用户信息
bash
复制
编辑
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub邮箱"
3. 初始化 Git 仓库
bash
复制
编辑
git init
4. 创建 .gitignore 文件（避免上传不必要的文件）
内容示例：

csharp
复制
编辑
_site/
.jekyll-cache/
Gemfile.lock
5. 提交网站代码到本地仓库
bash
复制
编辑
git add .
git commit -m "Initial commit"
🌟 五、上传到 GitHub
1. 在 GitHub 上创建新的仓库
登陆 GitHub

点击右上角的 + 号 > New repository

填写仓库名称，比如：你的GitHub用户名.github.io

设置为 Public 或 Private

点击 Create repository

2. 添加远程仓库
bash
复制
编辑
git remote add origin https://github.com/你的GitHub用户名/你的仓库名.git
3. 推送到远程仓库
bash
复制
编辑
git branch -M main
git push -u origin main
🌟 六、配置 GitHub Pages
打开你的 GitHub 仓库。

进入 Settings > Pages。

在 Build and deployment 部分，选择：

Source: Deploy from a branch

Branch: main / (root) 或者 gh-pages

点击 Save。

🌟 七、访问你的网站
GitHub 会自动构建你的站点，等待几分钟后（一般 1~5 分钟）。

访问：https://你的GitHub用户名.github.io/ 就可以看到你的 Jekyll 网站了！

🌟 八、修改与更新
在 _posts/ 文件夹中创建 .md 文件发布新的文章，例如：

markdown
复制
编辑
---
layout: post
title: "我的第一篇文章"
date: 2025-03-21 10:00:00 +0800
categories: 更新 日志
---

这里是我的第一篇文章的内容！
提交修改并推送到 GitHub：

bash
复制
编辑
git add .
git commit -m "发布新文章"
git push
