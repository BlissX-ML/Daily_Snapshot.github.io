---
layout: default
title: "Num. 27 - Number of Recent Calls"
slug: "Num27"
date: 2025-04-22 10:00:00 +0800
permalink: /leetcode-75/Num27/
---

# Num. 27 - Number of Recent Calls

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

Implement the `RecentCounter` class:

- `RecentCounter()` Initializes the counter with zero recent requests.
- `int ping(int t)` Adds a new request at time `t`, where `t` represents some time in milliseconds, and returns the number of requests that has happened in the past `3000` milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range `[t - 3000, t]`.

It is **guaranteed** that every call to `ping` uses a strictly larger value of `t` than the previous call.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input  
["RecentCounter", "ping", "ping", "ping", "ping"]  
[[], [1], [100], [3001], [3002]]  
Output  
[null, 1, 2, 3, 3]  
Explanation  
RecentCounter recentCounter = new RecentCounter();  
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1  
recentCounter.ping(100);   // requests = [1,100], range is [-2900,100], return 2  
recentCounter.ping(3001);  // requests = [1,100,3001], range is [1,3001], return 3  
recentCounter.ping(3002);  // requests = [1,100,3001,3002], range is [2,3002], return 3
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
None
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
// ES5 的“类”写法 —— 用构造函数 + 原型方法模拟类的行为
var RecentCounter = function() {
    this.q = [];
};

RecentCounter.prototype.ping = function(t) {
    this.q.push(t);

    while(this.q[0] < t - 3000) {
        this.q.shift();
    }

    return this.q.length;
};
</code></pre>
<pre><code class="language-js">
// ES6 的 class 写法
class RecentCounter {
  constructor() {
    this.q = []; // 初始化队列
  }

  ping(t) {
    this.q.push(t);
    while (this.q[0] < t - 3000) {
      this.q.shift(); // 移除过期请求
    }
    return this.q.length;
  }
}
</code></pre>

![image]({{ "/assets/images/leetcode/Number-of-Recent-Calls.png" | relative_url }})

{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、为什么使用 `this`**

1. **语法示例**：`let Idols = function() { this.group = []; };`

2. **`this.group` 是实例对象的属性**，用于记录每个实例自身的 idol 名单。

3. **使用场景**：

    - 每次调用 `new Idols()`，就会创建一个新的对象。

    - 每个对象有自己独立的 `group` 数组。

4. **为什么不能用 `let` 来代替？**

    - `let group = []` 创建的是一个局部变量，只在函数内部可见。

    - `this.group = []` 将变量绑定到当前实例上，**实例之间互不干扰**。

5. **调用方式**

    - 必须写作 `this.group`，不能写 `.group`

    - `this` 表示当前调用这个方法的实例对象。

6. **对比举例**
    
<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| 写法 | 所属范围 | 生命周期 | 用途说明 |
| --- | --- | --- | --- |
| `this.group = []` | 当前实例对象 | 实例销毁前一直存在 | 绑定实例状态 |
| `let group = []` | 函数或代码块 | 仅在当前函数/块中可访问 | 临时变量 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


### **二、`prototype` 的用法 —— 给构造函数添加方法**

1. 构造函数如 `function Idols(){}` 是一种**模板函数**，可以用 `new` 创建对象。

2. 所有实例对象可以共享其 `prototype` 上定义的方法。

3. **基本语法：**`Idols.prototype.addIdol = function(name) { this.group.push(name); };`

4. **核心逻辑：**

    - `Idols.prototype` 是所有通过 `new Idols()` 创建的对象共享的原型。

    - `.addIdol` 是挂载在这个原型上的方法。

    - 好处是：**所有实例共用一份函数定义**，节省内存。

5. **适用场景：**

    - 方法逻辑通用但每个实例有独立数据（如 `this.group`）

    - 比如 `addIdol()` 是逻辑行为，操作的是 `this.group` 的数据。

### **三、使用 ES6 `class` 语法重写**

1. **优势与总结：**

    - `class` 是语法糖，底层仍然是 `prototype`

    - `constructor()` 构造函数用于定义 `this.group`

    - `addIdol()` 是挂载在原型上的实例方法

2. **语法示例：**
    
    ```jsx
    class Idols {
      constructor() {
        this.group = [];
      }
    
      addIdol(name) {
        this.group.push(name);
      }
    }
    
    const lovedStar = new Idols();
    lovedStar.addIdol("NingNing");
    lovedStar.addIdol("BX");
    console.log(lovedStar.group);   // ["NingNing", "BX"]
    ```

{% include hr_write_word.html text="END" %}