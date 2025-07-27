---
layout: post
title:  "复制模板样式并进行本地修改"
date:   2025-03-23 20:04:39 +0800
slug: "Customize-Theme-Locally"
categories: jekyll update
permalink: /Customize-Theme-Locally/
---

### Import Theme Styles

1. Find the theme folder:
    ```bash
    bundle show minima
    ```

2. Copy theme files to the current directory:

    - Example path: `/usr/theme/minima`
    - List the folders inside the theme directory, typically including `_sass`, `_layouts`, `_includes`, and `assets`.
  ```bash
  ls /usr/theme/minima
  ```
    - Explanation:
      - _sass: Contains Jekyll's CSS styles; `minima.scss` imports various parameters.
      - _layouts: Stores the default HTML layouts; specific sections are imported from `_includes`.
      - _includes: Stores smaller HTML components for the theme.
      - assets: Contains `main.scss`, which imports `minima.scss` and compiles to `main.css`.

    - Copy all files from `/usr/theme/minima` to the current directory.
    ```bash
    cp -r /usr/theme/minima/* ./
    ```

    - Verify the files have been copied with `ls`

3. Remove the theme setting in `_config.yml`:
    - Delete theme: minima from the `_config.yml` file.

4. Update `Gemfile`:
    - Remove the line `gem "minima", "~> 2.5"` from the `Gemfile`.
    - Run `bundle install` to apply the changes.

5. Update the `head.html` file in `_includes`:
    - Remove the old `<link>` tag and replace it with the local path:
    ```<link rel="stylesheet" href="{{ site.baseurl }}/assets/main.css">```

    - Explanation:
        - The `<head></head>` section includes the CSS file.
        - `_layouts/default.html` includes `head.html`, which likely manages the CSS imports.
        - Modify the `<link>` tag inside `_includes/head.html`.

6. Verify the setup:
- Run `bundle exec jekyll build` to check if the CSS file is generated in `_site/assets/main.css`.
- Use `bundle exec jekyll serve` to preview the website.
- If the setup fails, run `bundle exec jekyll clean` to reset previous settings.

7. If successful, sync to GitHub. The synchronization method is detailed in the 'Creating a Jekyll Website' post.

### Modify Theme Styles
Assuming you want to adjust the content width and padding, from 800px to 1200px and padding to 40px:

1. Preview the page and use an editor (like IDLE) to find the `class` for the content area, e.g.,` wrapper`.

2. In `_sass/minima`, search for the `wrapper` settings:
    ```css
    .wrapper {
      max-width: -webkit-calc(#{$content-width} - (#{$spacing-unit} * 2));
      /* other properties */
    }
    ```
- `$content-width`: defines the content width.
- `$spacing-unit`: defines the padding.

3. Modify these variables in `_sass/minima.scss`:
    ```scss
    $content-width: 1200px !default;
    $spacing-unit: 40px !default;
    ```

4. Refresh the preview to see the updates.

5. If successful, sync to GitHub. The synchronization method is detailed in the 'Creating a Jekyll Website' post.

    ------
<br>

### 导入主题样式
1. 查找主题文件夹：
    ```bash
    bundle show minima
    ```

2. 将主题文件复制到当前目录：
  - 示例路径：`/usr/theme/minima`
  - 列出主题文件夹内的文件，通常包括 `_sass`、`_layouts`、`_includes` 和 `assets` 文件夹。
  ```bash
  ls /usr/theme/minima
  ```

    - 解释：
        - _sass：包含 Jekyll 的 CSS 样式；`minima.scss` 导入各种参数。
        - _layouts：存储主题的默认 HTML 布局；部分位置通过 {% raw %}`{%- include xx.html -%}`{% endraw %} 导入 `_includes` 下的 HTML 文件。
        - _includes：存储主题的较小 HTML 组件。
        - assets：包含 `main.scss`，它导入 `minima.scss` 并编译为 `main.css`。

    - 将 `/usr/theme/minima` 下的所有文件复制到当前目录。
      ```bash
      cp -r /usr/theme/minima/* ./
      ```

    - 使用 `ls` 确认文件是否成功复制。

3. 删除 `_config.yml` 中的主题设置：
  - 删除 `_config.yml` 文件中的 `theme: minima` 行。

4. 更新 `Gemfile`：
- 从 `Gemfile` 中删除 `gem "minima", "~> 2.5"` 这一行。
- 执行 `bundle install` 以应用更改。

5. 更新 `_includes` 文件夹下的 `head.html` 文件：

    - 删除原有的 `<link>` 标签，并替换为本地路径：

    - 解释：
      - `<head></head>` 中用于导入 CSS 样式文件。
      - `_layouts/default.html` 包含 `head.html`，这个文件可能管理了 CSS 的导入。
      - 修改 `_includes/head.html` 中的 `<link>` 标签。
    ```md
    \`<link rel="stylesheet" href="{{ site.baseurl }}/assets/main.css">\`
    ```

6. 验证设置：
- 运行 `bundle exec jekyll build`，检查是否在 `_site/assets/main.css` 中生成了 CSS 文件。
- 使用 `bundle exec jekyll serve` 预览网站。
- 如果设置失败，可以通过运行 `bundle exec jekyll clean` 来重置之前的设置。

7. 如果成功，同步到 GitHub。同步方法在《创建 Jekyll 网站》博文中有详细介绍。


### 修改主题样式
假设你想将内容区域的宽度从 800px 修改为 1200px，同时将页面的 padding 设置为 40px：

1. 预览页面并使用编辑器（如 IDLE）查看内容区域的 `class` 类名，例如 `wrapper`。

2. 在 `_sass/minima` 中，搜索 `wrapper` 设置：
      - `$content-width`：定义内容区域的宽度。
      - `$spacing-unit`：定义页面的 padding。
    ```css
    .wrapper {
      max-width: -webkit-calc(#{$content-width} - (#{$spacing-unit} * 2));
      /* 其他属性 */
    }
    ```

3. 在 `_sass/minima.scss` 文件中修改这些变量：
    ```scss
    $content-width: 1200px !default;
    $spacing-unit: 40px !default;
    ```

4. 刷新预览页面查看更新效果。

5. 如果成功，同步到 GitHub。同步方法在《创建 Jekyll 网站》博文中有详细介绍。