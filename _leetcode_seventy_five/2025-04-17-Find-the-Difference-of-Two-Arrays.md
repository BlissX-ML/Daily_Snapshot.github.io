---
layout: default
title: "Num. 20 - Find the Difference of Two Arrays：Set, Map and Object + .has() and .includes() + .filter()"
slug: "Num20"
date: 2025-04-17 10:00:00 +0800
permalink: /leetcode-75/Num20/
---

# Num. 20 - Find the Difference of Two Arrays

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given two **0-indexed** integer arrays `nums1` and `nums2`, return *a list* `answer` *of size* `2` *where:*

● `answer[0]` *is a list of all **distinct** integers in* `nums1` *which are **not** present in* `nums2`*.*

● `answer[1]` *is a list of all **distinct** integers in* `nums2` *which are **not** present in* `nums1`.

**Note** that the integers in the lists may be returned in **any** order.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]  
Output: [[1,3],[4,6]]  
Explanation:  
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2.   Therefore, answer[0] = [1,3].  
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums1.   Therefore, answer[1] = [4,6].
#### Example 2:
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]  
Output: [[3],[]]  
Explanation:  
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].  
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var findDifference = function(nums1, nums2) {
    let diff1 = [];
    let diff2 = [];
    let map1 = {};
    let map2 = {};

    for(let i = 0; i < nums1.length; i++) {
        if(map1[nums1[i]]) {
            if(!nums2.includes(nums1[i])) {
                diff1.push(nums1[i])
            }
            map1[nums1[i]]--
        } else {
            if(!map1[nums1[i]]){
                map1[nums1[i]] = 0
            }
            map1[nums1[i]]++;
        }
    }

    for(let i = 0; i < nums2.length; i++) {
        if(map2[nums2[i]]) {
            if(!nums1.includes(nums2[i])) {
                diff2.push(nums2[i])
            }
            map2[nums2[i]]
        } else {
            if(!map2[nums2[i]]){
                map2[nums2[i]] = 0
            }
            map2[nums2[i]]++;
        }
    }

    return [diff1, diff2]
};
</code></pre>


## **Solution via Comments / GPT**
<pre><code class="language-js">
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let diff1 = [...set1].filter(x => !set2.has(x));
    let diff2 = [...set2].filter(x => !set1.has(x));

    return [diff1, diff2];
};
</code></pre>



{% include hr_write_word.html text="相关知识整理与扩展" %}



### **一、数据结构 - Set**

1. **定义：**

    - `Set` 是 ES6 引入的一种集合类型，用于存储**唯一值的有序集合**。

    - 与 `Map` 和 `Object` 不同，`Set` 只存储值，不存储键。

2. **作用：**

    - 自动去重

    - 快速判断元素是否存在（比 `includes()` 更高效）

    - 求两个集合的差集、交集

3. **使用限制：**

    - 不适用于需要记录每个值额外信息的场景（如统计频率），建议使用 `Map`

4. **基本语法：**`const set = new Set([1, 2, 3, 2]); // Set { 1, 2, 3 }`

5. **常用方法：**

    - `add(value)`：添加元素

    - `has(value)`：判断是否存在该值

        - 语法：`set.has(value)` → 返回 `true` 或 `false`

        - ⚠️ 仅适用于 `Set` 和 `Map`，数组或字符串使用 `.includes()`

    - `delete(value)`：删除某个值

    - `clear()`：清空集合

    - `size`：集合的元素个数
    
    ```jsx
    const set = new Set();
    set.add(1);
    set.add(2);
    set.add(1); // 重复不会添加
    console.log(set.has(2)); // true
    console.log(set.size);   // 2
    ```
    
6. **扩展：`.includes()` 方法适用类型**
<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 类型 | 是否支持 | 说明 |
| --- | --- | --- |
| `Array` | ✅ | 判断数组是否包含某元素 |
| `String` | ✅ | 判断字符串是否包含某子串 |
| `Set` | ❌ | 不支持，使用 `.has()` |
| `Map` | ❌ | 不支持，使用 `.has(key)` |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>
    

### **二、对比几种不同的数据结构**

1. **`Map` 的使用场景**

    - 适用于：

        - 需要存储键值对，且键不一定是字符串

        - 键的插入顺序需要保留

        - 高频率读写、避免原型链污染

    - 示例：统计频次
        
        ```jsx
        const map = new Map();
        for (let num of [1, 2, 2, 3]) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        ```
        
2. **`Object` 的使用场景**

    - 适用于：

        - 存储结构化数据（如 JSON）

        - 仅使用字符串或 symbol 作为键

    - 不适用：

        - 键为非字符串类型

        - 对性能要求高的读写操作

        - 需要键值顺序

3. **Set 与 Map 的对比：**
    
<div style="margin-left: 1.5em;">
{% capture tableIndent1 %}
| 特点 | Set | Map |
| --- | --- | --- |
| 是否有 key | ❌ 只有 value | ✅ 有 key 和 value |
| 可否统计频率 | ❌ 无法计数 | ✅ 使用 `.get()` 和 `.set()` 实现 |
| 是否适合求交差集 | ✅ 非常合适 | ❌ 不适合 |
| 是否支持对象作为 key | ❌ 只存值本身 | ✅ 可存任何类型（对象、函数等） |
{% endcapture %}
{{ tableIndent1 | markdownify }}
</div>   


### **三、常见结构特性对比表**

<div style="margin-left: 0em;">
{% capture tableIndent %}
| 特性/结构 | `Set` | `Map` | `Object` | `Array` |
| --- | --- | --- | --- | --- |
| 数据结构类型 | 值集合（无重复） | 键值对集合 | 键值对集合 | 值集合（允许重复） |
| 是否可迭代 | ✅（for...of） | ✅（for...of） | ❌（需配合 `Object.keys`） | ✅（for...of） |
| 键的类型支持 | 无键，仅值 | 任意类型（包括对象） | 仅字符串或 symbol | 无键，仅值 |
| 键值关系 | 无 | 有 | 有 | 无 |
| 是否有序 | ✅（按插入顺序） | ✅（按插入顺序） | ❌（顺序不完全保证） | ✅（按插入顺序） |
| 推荐使用场景 | 去重；验证元素存在 | 键值对映射；统计元素次数| 属性结构/JSON 数据 | --- |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>    


### **四、filter() 方法（数组）**

1. **定义：**

    - `filter()` 是数组的内置方法，用于通过布尔条件筛选出满足要求的元素组成新数组。

2. **基本语法：**`const newArray = array.filter(item => condition);`

3. **示例：**`const result = [1, 2, 3, 4].filter(x => x > 2); // [3, 4]`

4. **用于 Set 的写法：**

    - `filter()` 只能用于数组，需要先将 `Set` 转为数组：`[...set]`

    - 或者使用：`Array.from(set)`

5. **展开运算符 `...` 可用于：**


<div style="margin-left: 1.5em;">
{% capture tableIndent %}
| 类型 | 是否支持 | 说明 |
| --- | --- | --- |
| `Array` | ✅ | 最常见的用法 |
| `String` | ✅ | 展开为单个字符 |
| `Set` | ✅ | 展开为值数组 |
| `Map` | ✅ | 展开为键值对数组（每一项是 `[key, value]`） |
| `Object` | ✅ | 展开为属性键值对，但不是按插入顺序 |
| 非可迭代类型 | ❌ | 如 `Number`, `Boolean`, `null`, `undefined` 报错 |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>



{% include hr_write_word.html text="END" %}