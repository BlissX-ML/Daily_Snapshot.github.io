---
layout: default
title: "Num. 43 - Keys and Rooms"
slug: "Num43"
date: 2025-04-30 11:00:00 +0800
permalink: /leetcode-75/Num43/
---

# Num. 43 - Keys and Rooms

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
There are `n` rooms labeled from `0` to `n - 1` and all the rooms are locked except for room `0`. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of **distinct keys** in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array `rooms` where `rooms[i]` is the set of keys that you can obtain if you visited room `i`, return `true` *if you can visit **all** the rooms, or* `false` *otherwise*.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: rooms = [[1],[2],[3],[]]  
Output: true  
Explanation:  
We visit room 0 and pick up key 1.  
We then visit room 1 and pick up key 2.  
We then visit room 2 and pick up key 3.  
We then visit room 3.  
Since we were able to visit every room, we return true.

#### Example 2:
Input: rooms = [[1,3],[3,0,1],[2],[0]]  
Output: false  
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var canVisitAllRooms = function(rooms) {
    let keysMap = new Map();

    let fistRoom = rooms[0];
    for(let n of fistRoom) {
        keysMap.set(n, (keysMap.get(n) ?? 0) + 1);
    }

    for(let i = 1; i < rooms.length; i++) {
        let currRoom = rooms[i];
        for(let n of currRoom) {
            if(keysMap.has(n) || n === 0) {
                keysMap.get(n) - 1;
            } else {
                return false;
            }
        }
    }

    return true;
};
</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
// 递归 DFS：更短、更优雅，适合刷题练逻辑
var canVisitAllRooms = function(rooms) {
    // 用于记录访问过的房间编号，防止重复进入
    let hasBeenVisited = new Set();

    // room 是钥匙编号，也就是要进入的房间编号（与 rooms[i] 的 i 无关）
    let dfs = (room) => {
        if (hasBeenVisited.has(room)) return; // 如果房间已访问，跳过

        hasBeenVisited.add(room); // 记录这个房间已访问

        // 遍历当前房间中所有钥匙（这些钥匙是其他房间的编号）
        for (let key of rooms[room]) {
            dfs(key); // 尝试用每一把钥匙去开房间
        }
    }

    dfs(0); // 从房间0出发，递归访问可达的所有房间

    return hasBeenVisited.size === rooms.length; // 判断是否访问了所有房间
};
</code></pre>

<pre><code class="language-js">
// 队列 BFS：更通用、更稳定，适合面试答题模板。
var canVisitAllRooms = function(rooms) {
    let hasVisited = new Set();      // 记录已访问过的房间
    let roomQueue = [0];             // 初始化，从房间 0 开始访问

    while (roomQueue.length > 0) {
        let room = roomQueue.shift(); // 从队列中取出一个待访问的房间

        if (hasVisited.has(room)) continue; // 已访问过的房间跳过

        hasVisited.add(room); // 标记当前房间为已访问

        // 将当前房间中钥匙所对应的房间加入队列（如果未访问过）
        for (let key of rooms[room]) {
            if (!hasVisited.has(key)) {
                roomQueue.push(key);
            }
        }
    }

    // 最终判断是否所有房间都访问到了
    return hasVisited.size === rooms.length;
};
</code></pre>
{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、解题笔记**

1. **题目概述**

    - 给定一个二维数组 `rooms`，其中 `rooms[i]` 表示第 `i` 个房间里存放的钥匙列表。

    - 你一开始在房间 0，只能通过拿到钥匙进入其他房间。

    - **请判断是否能够访问所有房间。**

2. **核心理解点**

    - **每个 `rooms[i]` 的含义**

        - `rooms[i]` 表示**你进入第 `i` 个房间后，能拿到的钥匙列表**。

        - 每一把钥匙是一个房间编号 `k`，表示你可以用这把钥匙打开房间编号为 `k` 的房间。

        - **不是**说 **钥匙编号为 0 就是开有 0 的房间** ；房间和钥匙编号一一对应，不是逆向的。

    - **举例说明：rooms = [[0, 1, 2], [3]]**

        - `rooms[0] = [0, 1, 2]` 的意思是：

            - 我现在在房间 0

            - 我从房间 0 里拿到了钥匙 0、1、2

            - 所以我可以访问房间 0、房间 1、房间 2

3. **解法选择：使用 DFS（深度优先遍历）**

    - 初始只进得了房间 0。

    - 每拿到一把钥匙，就递归地尝试打开对应房间。

    - 用 `Set` 记录访问过的房间，避免重复访问。

### **二、常见问题解析**

1. 为什么只写了 `dfs(0)` 就能访问其他房间？

    - 因为递归是**自动的**。

    - `dfs(0)` 会拿到钥匙，比如钥匙 1，然后内部就会执行 `dfs(1)`；

    - 你**只要写一次 `dfs(0)`**，其他房间会根据钥匙自动被递归打开。

2. **如果房间里重复出现钥匙，会不会出错？**

    - 不会。

    - 因为我们用的是 `Set`，它只记录“有没有去过”；

    - 即使钥匙重复，调用 `dfs(n)` 时如果房间已访问，就会立即 `return`，不会影响逻辑。

3. **`Set` 会不会删掉什么导致判断错误？**

    - 不会。

    - `Set` 只是记录“哪些房间我去过”，不会修改原始输入 `rooms`；

    - 最终判断访问的房间数是否等于 `rooms.length` 即可。

4. **`[[0, 1, 2], [3]]` 中的 0、1、2 到底代表什么？**

    - 它们**不是**说 钥匙 0 可以开有数字 0 的房间 ；

    - 而是说：你当前在 `rooms[0]`，你能拿到钥匙 0、1、2；

    - 所以你可以进入房间编号为 0、1、2 的三个房间。

{% include hr_write_word.html text="END" %}
