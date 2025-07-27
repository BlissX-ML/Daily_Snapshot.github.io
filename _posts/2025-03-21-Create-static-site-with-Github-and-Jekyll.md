---
layout: post
title:  "Jekyll 项目创建"
date:   2025-03-20 20:04:39 +0800
slug: "Jekyll-project-create"
categories: jekyll update
permalink: /Jekyll-project-create/
---

# 概要

在本文中，我将向您展示如何在 Linux 上使用 GitHub 和 Jekyll 创建个人网站。（未来可能会更新 Windows 系统的相关内容。）本手册的步骤如下，希望它能帮助您理解过程并创建自己的个人网站：

- 安装或更新所需的软件，如 Ruby、Jekyll、rbenv、Git 等。
- 创建网站并预览网页界面。
- 创建 GitHub 仓库，并将其与 Jekyll 项目同步。
- 在 GitHub 上配置 GitHub Pages。
- 为您的网站添加新页面，并查看效果。

<br>

----

<br>

# 详细介绍
一、安装 Ruby 和 Jekyll
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
<br>

二、创建你的 Jekyll 网站
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

<br>

三、配置 Jekyll 网站
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

<br>

四、使用 Git 和 GitHub
1. 安装 Git
```bash
sudo apt install git
```

2. 配置 Git 用户信息
```bash
git config --global user.name   "你的GitHub用户名"
git config --global user.email  "你的GitHub邮箱"
```

3. 初始化 Git 仓库
```bash
git init
```

4. 提交网站代码到本地仓库
```bash
git add .
git commit -m "Initial commit"
```
<br>

五、上传到 GitHub
1. 在 GitHub 上创建新的仓库

    - 登陆 GitHub
    - 点击右上角的 `+` 号 > `New repository`
    - 填写仓库名称，比如：`你的GitHub用户名.github.io`
    - 选择 Public 或 Private（不需要选择 Create README.md）
    - 点击 `Create repository`

2. 添加远程仓库
```bash
git remote add origin https://github.com/你的GitHub用户名/你的仓库名.git
```

3. 推送到远程仓库
```bash
git branch -M main
git push -u origin main
```
<br>

六、配置 GitHub Pages
1. 打开你的 GitHub 仓库。

2. 进入 `Settings` > `Pages`。

3. 在 `Build and deployment` 部分，选择：
- Source: Deploy from a branch
- Branch: main / (root) 或者 gh-pages
- 点击 `Save`。

<br>

七、访问你的网站
- GitHub 会自动构建你的站点，等待几分钟后（一般 1~5 分钟）。

    - 可以在 GitHub 导航栏的 Actions 部分查看构建完成情况。

- 访问你的 Jekyll 网站：https://你的GitHub用户名.github.io/ 或者 https://github.com/你的GitHub用户名/你的仓库名.git/。

<br>

八、修改与更新
- 在 `_posts/` 文件夹中创建 `.md` 文件发布新的文章，例如：

```md
---
layout: post
title: "我的第一篇文章"
date: 2025-03-21 10:00:00 +0800
categories: 更新 日志
---

这里是我的第一篇文章的内容！
```

- 提交修改并推送到 GitHub：
```bash
git add .
git commit -m "发布新文章"
git push
```

- 解释：
    - Jekyll 模板的 Markdown 文件名应为 `年-月-日-标题.md` 格式。
    - 文件内容开头必须有 `---`，其中：

        - layout：指定布局样式，通常有 default、home、post 等。
        - title：指定文章标题。
        - date：指定文章发布时间。
        - categories：指定文章的分类（如文件夹或类型）。

    - `_posts/` 是默认的文章存放位置。如果希望将 Markdown 文件放置在主页上，可以将文件直接放在 `_posts/` 目录下。如果希望在其他文件夹中放置文章，将在另一篇博文中介绍。

<!-- - 注意：【这里放上GPT说collections里面加入posts的方法】 -->
