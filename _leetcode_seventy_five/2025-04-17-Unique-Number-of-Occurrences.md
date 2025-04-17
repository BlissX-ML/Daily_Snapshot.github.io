---
layout: default
title: "Num. 21 - Unique Number of Occurrences: Map Methods + Compare with Map & Set"
slug: "Num21"
date: 2025-04-17 11:00:00 +0800
permalink: /leetcode-75/Num21/
---

# Num. 21 - Unique Number of Occurrences

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: arr = [1,2,2,1,1,3]  
Output: true  
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
#### Example 2:
Input: arr = [1,2]  
Output: false
#### Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]  
Output: true
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var uniqueOccurrences = function(arr) {
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
        if(!map[arr[i]]) {
            map[arr[i]] = 0;
        } 
        map[arr[i]]++;
    }

    console.log(map);

    let set = new Set(arr);
    let setArr = [...set];

    for(let i = 0; i < setArr.length; i++) {
        let number = map[setArr[i]];
        if
    }
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var uniqueOccurrences = function(arr) {
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    // 提取元素出现的频率
    let freq = [...map.values()];

    // 去重
    let setFreq = new Set(freq);

    // 对比去重后的元素个数有无变化
    return setFreq.size === freq.length
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}


### **一、`Map` 常用方法与属性**

1. **`set(key, value)`**

    - **作用**：向 `Map` 添加或更新**键值对**

    - **语法**：`const map = new Map();  map.set('a', 1);`

    - **返回值**：返回整个 `Map`（可链式调用）

2. **`get(key)`**

    - **作用**：获取指定**键的值**

    - **语法**：`map.get('a')  // 返回 1`

    - 如果键不存在，返回 `undefined`

3. **`has(key)`**

    - **作用**：判断 `Map` 中是否存在某个**键**

    - **语法**：`map.has('a')   // true`

4. **`delete(key)`**

    - **作用**：删除指定 **键** 及其对应的 **值**

    - **语法**：`map.delete('a')   // 返回 true 或 false`

5. **`clear()`**

    - **作用**：清空整个 `Map` 所有键值对

    - **语法**：`map.clear();`

6. **`size`**

    - **作用**：返回 `Map` 中的键值对数量（类似数组的 `.length`）

    - **语法**：`map.size  // 属性，不是方法`

7. **遍历方法**

    - **`keys()`**

        - 返回一个可迭代对象，包含所有的键。

        - **语法**：`for (let key of map.keys()) { console.log(key); }`

    - **`values()`**

        - 返回所有值。

        - **语法**：`for (let value of map.values()) { console.log(value); }`

    - **`entries()`**

        - 返回所有键值对，形式为 `[key, value]`

        - **语法**：`for (let [key, value] of map.entries()) { console.log(`${key}: ${value}`); }`

    - **`forEach(callback)`**

        - 与数组类似的遍历方式

        - 语法：`map.forEach((value, key) => { console.log(key, value); });`

### **二、`Map` 与 `Set` 常用方法对比表**

| 方法 / 属性 | 作用 | 是否修改原值 | `Set` 是否存在 | `Set` 使用是否修改原值 |
| --- | --- | --- | --- | --- |
| `set(key, value)` | 设置键值对 | ✅ | ❌ | — |
| `get(key)` | 获取指定键的值 | ❌ | ❌ | — |
| `has(key)` | 判断集合中是否存在指定键 | ❌ | ✅ | ❌ |
| `delete(key)` | 删除指定键 | ✅ | ✅ | ✅ |
| `clear()` | 清空整个结构 | ✅ | ✅ | ✅ |
| `size` | 返回结构中的元素数量 | ❌ | ✅ | ❌ |
| `keys()` | 返回所有键的可迭代对象 | ✅ | ✅ | ❌ |
| `values()` | 返回所有值的可迭代对象 | ✅ | ✅ | ❌ |
| `entries()` | 返回键值对 `[key, value]` 可迭代对象 | ✅ | ✅ | ❌ |
| `forEach(callback)` | 遍历所有元素 | ❌ | ✅ | ❌ |


{% include hr_write_word.html text="END" %}