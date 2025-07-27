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

### 四：Using Git and GitHub
1. Install Git
```bash
sudo apt install git
```

2. Configure Git user information
```bash
git config --global user.name   "YourGitHubUsername"
git config --global user.email  "YourGitHubEmail"
```

3. Initialize the Git repository
```bash
git init
```

4. Commit website code to the local repository
```bash
git add .
git commit -m "Initial commit"
```

### 五：Upload to GitHub
1. Create a new repository on GitHub
- Log in to GitHub
- Click the `+` button in the top right corner > `New repository`
- Enter a repository name, for example: `YourGitHubUsername.github.io`
- Choose Public or Private (do not select Create README.md)
- Click `Create repository`

2. Add a remote repository
```bash
git remote add origin https://github.com/YourGitHubUsername/YourRepositoryName.git
```

3. Push to the remote repository
```bash
git branch -M main
git push -u origin main
```

### 六：Configure GitHub Pages
1. Open your GitHub repository.

2. Go to `Settings` > `Pages`.

3. In the `Build and deployment` section, select:
- Source: Deploy from a branch
- Branch: main / (root) or gh-pages
- Click `Save`.


### 七：Access your website
- GitHub will automatically build your site, and after a few minutes (typically 1-5 minutes), your site will be live.

    - You can check the build status in the GitHub Actions section of the navigation bar.

- Visit your Jekyll website: https://YourGitHubUsername.github.io/ or https://github.com/YourGitHubUsername/YourRepositoryName.git/.


### 八：Modify and Update
- Create a new `.md` file in the `_posts/` folder to publish a new post, for example:
```md
---
layout: post
title: "My First Post"
date: 2025-03-21 10:00:00 +0800
categories: updates log
---

Here is the content of my first post!
```

- Commit the changes and push to GitHub:
```bash
git add .
git commit -m "Publish new post"
git push
```

- Explanation:

    - Jekyll template Markdown filenames should follow the format `year-month-day-title.md`.
    - The file content must start with `---`, including:
        - layout: specifies the layout style, usually `default`, `home`, `post`, etc.
        - title: specifies the article title.
        - date: specifies the publication date.
        - categories: specifies the article category (like folder or type).

    - `_posts/` is the default location for storing articles. If you want to place a Markdown file on the homepage, you can place it directly in the `_posts/` folder. If you'd like to place articles in other folders, this will be explained in another blog post. 

------------------

