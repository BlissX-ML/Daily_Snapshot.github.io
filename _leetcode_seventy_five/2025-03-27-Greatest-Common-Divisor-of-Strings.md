---
layout: default
title: "Num. 02 - Greatest Common Divisor of Strings: 字符串/数组/对象的可用方法 + 欧几里得算法 + substring()方法"
slug: "Num02"
date: 2025-03-27 10:00:00 +0800
permalink: /leetcode-75/Num02/
---


# Num. 02 - Greatest Common Divisor of Strings

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + t + t + ... + t + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return *the largest string* `x` *such that* `x` *divides both* `str1` *and* `str2`.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: str1 = "ABCABC", str2 = "ABC"<br>
Output: "ABC"
#### Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"<br>
Output: "AB"
#### Example 3:
Input: str1 = "LEET", str2 = "CODE"<br>
Output: ""
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>


{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var gcdOfStrings = function(str1, str2) {
    var result;
    if(str1.length >= str2.length){
        var compareString = str1.split(str2);
        for(var i = str2.length-1; i >= 0; i--){
            if(compareString === str2){
                result = str2;
            } else {
                compareString = str1.split(str2.split(str2[i]))
            }
        }
        return result;
    } else {
        return ""
    }
};
</code></pre>

## **Solution via Comments / GPT** 
<pre><code class="language-js">
var gcdOfStrings = function(str1, str2) {
    // 欧几里得算法
    if(str1 + str2 !== str2 + str1) {return ""};
    const gcd = (a, b) => b ===0 ? a : gcd(b, a % b);
    const resultLength = gcd(str1.length, str2.length);
    const result = str1.substring(0, resultLength);
    return result;
};
</code></pre>
<pre><code class="language-js">
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1){
        return ""
    }

    function gcd(a,b){
        while(b!==0){
            temp = b;
            b = a % b
            a = temp
        }
        return a
    }

    let gcdLength = gcd(str1.length,str2.length)

    return str1.slice(0,gcdLength)
};
</code></pre>
<br>

{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、欧几里得算法**

- **概念：**
    - 欧几里得算法（GCD算法）用于计算两个正整数的最大公约数。
- **基本思想：**
    - 当 `b === 0` 时，最大公约数就是 `a`。
    - 否则，递归调用 `gcd(b, a % b)`，直到 `b` 为 0。
- **实现方式：递归法与循环法**
    - 递归法更简洁，但深度递归可能导致栈溢出。
    - 循环法更节省内存，适合更大的数字。
    
    ```jsx
    // 递归法（两种写法）
    let gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    // 循环法
    function gcd(a, b) {
        while(b !== 0) {
            let temp = b;
            b = a%b;
            a = temp;
        }
        return a;
    }
    ```
    
![image]({{ "/assets/images/leetcode/Euclidean-algorithm.png" | relative_url }})

### **二、substring() 方法**

- **`substring()` 方法**
    - 用于提取字符串中指定索引范围内的子字符串。

    - 语法：`string.substring(startIndex, endIndex)`

        - `startIndex`：开始位置（包含）
        - `endIndex`：结束位置（不包含）
        - 如果 `endIndex` 省略，则返回从 `startIndex` 到结尾的所有字符。
    - 不修改原字符串，返回新字符串。

    ```jsx
    let str = "Hello, World!";
    console.log(str.substring(0, 5)); // 输出: "Hello"
    console.log(str.substring(7));    // 输出: "World!"
    console.log(str);                  // 原字符串未改变："Hello, World!"
    ```

### **三、字符串的截取、添加方法：**

<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| --- | --- | --- | --- | --- | --- | --- |
| **`substring()`** | **`slice()`** | **`concat()`** | **`replace()`** | **`split()`** | **`includes()`** | **`indexOf()`** |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


1. **`substring()`**

    - 用于截取子字符串。语法为 **`str.substring(start, end)`**

    - **是否改原值：** 否

    - **说明：**
        - 提取从 `start` 到 `end`（不包含 `end`）之间的子串
        - 不支持负数
        - 如果 `start > end`，会自动交换位置
    - **示例：** `console.log('BlissX_ML'.substring(0, 3)); // "Bli"`

2. **`slice()`**

    - 用于提取字符串片段。语法为 **`str.slice(start, end)`**

    - **是否改原值：** 否

    - **说明：**
        - 功能类似 `substring`
        - 支持负数（如 `1` 表示末尾）
        - 参数顺序不会自动交换
    - **示例：** `console.log('BlissX_ML'.slice(0, 3)); // "Bli"`

3. **`concat()`**

    - 用于合并多个字符串。语法为 **`str1.concat(str2, ...)`**

    - **是否改原值：** 否

    - **说明：**
        - 返回一个新字符串
        - 实际开发中更常用 `+` 拼接或模板字符串 ``${a}${b}``
    - **示例：** `console.log('BlissX_ML'.concat(95)); // "BlissX_ML95"`

4. **`replace()`**

    - 用于替换字符串内容。语法为 **`str.replace(pattern, replacement)`**

    - **是否改原值：** 否

    - **说明：**
        - 默认只替换第一个匹配项
        - 若要替换全部需使用正则 `/pattern/g`
    - **示例：** `console.log('BlissX_ML'.replace(/s/g, 'e')); // "BlieeX_ML"`

5. **`split()`**  

    - 用于按分隔符切分字符串为数组。语法为 **`str.split(separator)`**

    - **是否改原值：** 否

    - **说明：**
        - 常用于将字符串转换为数组（如按空格、逗号等）
        - 支持使用正则表达式作为分隔符
    - **示例：** `console.log('BlissX _ ML'.split(/\s+/)); // ["BlissX", "_", "ML"]`

6. **`includes()`**

    - 用于判断是否包含指定子字符串。语法为 **`str.includes(substring)`**

    - **是否改原值：** 否

    - **说明：**
        - 返回布尔值（`true` / `false`）
        - 区分大小写
    - **示例：** `console.log('BlissX_ML'.includes('XX')); // false`

7. **`indexOf()`**

    - 用于查找子字符串首次出现的位置。语法为 **`str.indexOf(substring, fromIndex)`**

    - **是否改原值：** 否

    - **说明：**
        - 返回首次出现的索引（从 0 开始）
        - 如果未找到，返回 `1`
        - 第二个参数可选，用于指定搜索起始位置
    - **示例：** `console.log('BlissX_ML'.indexOf('s')); // 3`


### **四、数组的截取、添加方法：**

<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| --- | --- | --- | --- | --- | --- | --- |
| **`slice()`** | **`concat()`** | **`splice()`** | **`push()`** | **`pop()`** | **`shift()`** | **`unshift()`** |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>

1. **`slice()`**

    - 用于截取数组的一部分。语法为 **`arr.slice(start, end)`**

    - **该方法同样适用于字符串。**

    - **是否改原值：** 否

    - **说明：**
        - 返回新数组，原数组不变
        - `end` 不包含在结果中
        - 支持负索引，如 `1` 表示最后一个元素
    - **示例：** `console.log(['b', 'j', 'y', 'x'].slice(0, 2));   // ["b", "j"]`

2. **`concat()`**

    - 用于合并多个数组。语法为 **`arr.concat(arr2, arr3, ...)`**

    - **该方法同样适用于字符串。**

    - **是否改原值：** 否

    - **说明：**
        - 返回合并后的新数组
        - 原数组不变
        - 可合并多个数组或元素（如 `arr.concat(1, 2)`）
    - **示例**：`console.log(['b', 'j', 'y', 'x'].concat(95));   // ["b", "j", "y", "x", 95]`

3. **`splice()`**

    - 用于添加、删除或替换数组元素。语法为**`arr.splice(start, deleteCount, ...items)`**

    - **是否改原值：** ✅ 是

    - **说明：**
        - 原地修改数组，返回被删除的元素数组
        - 可用于删除元素：`splice(index, count)`
        - 可用于插入元素：`splice(index, 0, newItem)`
        - 可用于替换元素：`splice(index, 1, newItem)`
    - **示例：**`console.log(['b', 'j', 'y', 'x'].splice(0, 1));   // ["b"]`

4. **`push()`**

    - 用于添加元素到数组末尾。语法为：**`arr.push(element1, element2, ...)`**

    - **是否改原值：** ✅ 是

    - **说明：**
        - 返回修改后的新长度
        - 可添加多个元素
    - **示例：**`console.log(['b', 'j', 'y', 'x'].push(85, 1005));   // 6`

5. **`pop()`**

    - 用于移除数组的最后一个元素。语法为 **`arr.pop()`**

    - **是否改原值：** ✅ 是

    - **说明：**
        - 返回被移除的元素
        - 若数组为空，返回 `undefined`
    - **示例：**`console.log(['b', 'j', 'y', 'x'].pop());   // "x"`

6. **`shift()`**

    - 用于移除数组的第一个元素。语法为 **`arr.shift()`**

    - **是否改原值：** ✅ 是

    - **说明：**
        - 返回被移除的元素
        - 会导致所有元素左移
    - **示例：**`console.log(['b', 'j', 'y', 'x'].shift());   // "b"`

7. **`unshift()`**

    - 用于添加元素到数组开头。语法为 **`arr.unshift(element1, element2, ...)`**

    - **是否改原值：** ✅ 是

    - **说明：**
        - 返回新数组长度
        - 可添加多个元素，原数组右移
    - **示例：**`console.log(['b', 'j', 'y', 'x'].unshift(85, 1005));   // 6`


### **五、对象的截取、添加方法：**

<div style="margin-left: 2.5em;">
{% capture tableIndent %}
| --- | --- | --- | --- | --- |
| **`Object.assign()`** | **`delete obj[key]`** | **`Object.keys()`** | **`Object.values()`** | **`JSON.parse(JSON.stringify(obj))`** |
{% endcapture %}
{{ tableIndent | markdownify }}
</div>


1. **`Object.assign()`**

    - 用于浅拷贝或合并多个对象。语法为 **`Object.assign(target, ...sources)`**

    - **是否改原值：** 否（修改 `target` 对象，但不改源对象）

    - **说明：**
        - 会将所有 `source` 的属性复制到 `target` 中
        - 若多个对象有相同属性，后面的值会覆盖前面的
        - 仅拷贝第一层属性（浅拷贝）
    - **示例：**`console.log(Object.assign({a: 3}, {x: 1}, {y: 2}));  // { a: 3, x: 1, y: 2 }`

2. **`delete obj[key]`**

    - 用于删除对象的属性。语法为 **`delete obj.prop`** 或 **`delete obj['key']`**

    - **是否改原值：** ✅ 是

    - **说明：**
        - 删除成功返回 `true`
        - 删除不存在的属性也返回 `true`
        - 删除会影响原对象结构
    - **示例：**`console.log(delete {a: 3, b: 2}.b);  // true`

3. **`Object.keys()`**

    - 用于获取对象所有键名。语法为 **`Object.keys(obj)`**

    - **是否改原值：** 否

    - **说明：**
        - 返回值为字符串数组
        - 不包含继承的属性或 Symbol 属性
    - **示例：**`console.log(Object.keys({a: 3, b: 2}));   // ["a", "b"]`

4. **`Object.values()`**

    - 用于获取对象所有键值。语法为 **`Object.values(obj)`**

    - **是否改原值：** 否

    - **说明：**
        - 返回值为数组，顺序与 `Object.keys()` 对应
        - 不包含继承属性或 Symbol
    - **示例：**`console.log(Object.values({a: 3, b: 2}));   // [3, 2]`

5. **`Object.entries()`**

    - 用于将对象转换为键值对数组。语法为 **`Object.entries(obj)`**

    - **是否改原值：** 否

    - **说明：**
        - 返回二维数组，每个元素是 `[key, value]`
        - 可用于 `for...of` 遍历配合解构使用
    - **示例：**`console.log(Object.entries({a: 3, b: 2}));   // [["a", 3], ["b", 2]]`

    - **解构示例**：`for(let [key, val] of Object.entries({a: 3, b: 2})){console.log(key, val)}`

6. **`JSON.parse(JSON.stringify(obj))`**

    - 用于实现对象的深拷贝。语法为 **`const copy = JSON.parse(JSON.stringify(obj))`**

    - **是否改原值：** 否（生成新对象）

    - **说明：**
        - 能够复制嵌套对象，实现值独立
        - 不能复制函数、Symbol、undefined、循环引用等

{% include hr_write_word.html text="END" %}