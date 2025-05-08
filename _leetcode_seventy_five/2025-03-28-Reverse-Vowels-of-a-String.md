---
layout: default
title: "Num. 05 - Reverse Vowels of a String"
slug: "Num05"
date: 2025-03-28 10:00:00 +0800
permalink: /leetcode-75/Num05/
---

# Num. 05 - Reverse Vowels of a String
<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: s = "IceCreAm"  
Output: "AceCreIm"  
**Explanation:**
The vowels in `s` are `['I', 'e', 'e', 'A']`. On reversing the vowels, s becomes `"AceCreIm"`
#### Example 2:
Input: s = "leetcode"  
Output: "leotcede"
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var reverseVowels = function(s) {
    var temp;
    var result = s;
    for(var i=0; i < s.length; i++){
      if( s[i] === 'I' || s[i] === 'e' || s[i] === 'e' || s[i] === 'A' ){
        for(var j = s.length-i-1; j > i; j--){
          console.log(i);
          console.log(j);
          if(s[j] === 'I' || s[j] === 'e' || s[j] === 'e' || s[j] === 'A' ){
            result[j] = s[i];
            result[i] = s[j];
            console.log(result[j])
            console.log(result[i])
          } else {
            result[j] = s[j];
          }
        } 
      }else {
        result[i] = s[i];
      }
    }
    return result;
};


// The vowels in s are ['I', 'e', 'e', 'A']. 
// On reversing the vowels, s becomes "AceCreIm".
// Output: "AceCreIm"

var a = reverseVowels("IceCreAm");
console.log(a);

</code></pre>
<br />

## **Solution via Comments / GPT**
<pre><code class="language-js">
var reverseVowels = function(s) {
  let vowels = "aeiouAEIOU";
  let array = s.split('');
  let leftPoint = 0;
  let rightPoint = s.length - 1;
  
  // 始终保持左边的指针在右边指针的左侧
  while(leftPoint < rightPoint){
    // 如果当前左侧指针并没有包含vowels中的元素，啧左侧指针向前进位
    while(leftPoint < rightPoint && !vowels.includes(array[leftPoint])) leftPoint++
    
    // 如果当前右侧指针并没有包含vowels中的元素，则右侧指针向前进位
    while(leftPoint < rightPoint && !vowels.includes(array[rightPoint])) rightPoint--
  
    [array[leftPoint], array[rightPoint]] = [array[rightPoint], array[leftPoint]]
    
    // 成功反转之后依旧要修改指针的数值
    leftPoint++
    rightPoint--
  }
  
  let result = array.join('');
  return result;
};
</code></pre>
<pre><code class="language-js">
var reverseVowels = function(s) {
    const arr=['a','e','i','o','u','A','E','I','O','U']
    let tmpS=s.split('')
    let left=0;
    let right=tmpS.length;
    while(left < right){
        while(left < right&&arr.indexOf(tmpS[left])===-1){
            left++
        }
        while(left < right&&arr.indexOf(tmpS[right])===-1){
            right--
        }
        [tmpS[left],tmpS[right]]=[tmpS[right],tmpS[left]]
        left++;
        right--;
    }
    let result=tmpS.join('')
    return result
};
</code></pre>


{% include hr_write_word.html text="相关知识整理与扩展" %}

### **一、字符串是不可变的**

- 在 JavaScript 中，**字符串是不可变的**，不能通过 `s[i] = 'x'` 的方式修改字符串中的某一个字符

- 如果**想修改字符串中的字符，必须：**

    1. 把字符串转换为数组（使用 `.split('')` 方法）
    2. 修改数组中的元素。
    3. 把数组转换回字符串（使用 `.join('')` 方法）

- **示例：**
    
    ```jsx
    let str = "hello";
    let arr = str.split('');  // 转换为数组 ['h', 'e', 'l', 'l', 'o']
    arr[0] = 'H';             // 修改第一个字符
    str = arr.join('');       // 重新转为字符串 "Hello"
    console.log(str);         // 输出："Hello"
    ```
    

### **二、双指针方法**

- 双指针法用于**从两个方向同时处理问题**，可以有效地减少遍历次数。

- 在本题中，我们使用两个指针：

    - `left` 从字符串的左边向右移动。

    - `right` 从字符串的右边向左移动。

    - 当 `left` 和 `right` 都指向元音字母时，交换这两个字符，并移动指针。

- **示例：**

    - **`[a, b] = [b, a]` 用法**

        - 是 JavaScript 中的 **数组解构赋值**，用于 **同时交换两个变量的值**。

        - **语法示例：**`[a, b] = [b, a]   // a 获取了原本 b 的值，b 获取了原本 a 的值`

    - **`.includes()` 方法**

        - 检查一个数组或字符串中是否包含指定的值，返回值是 `true` 或 `false`

        - **语法示例：**`console.log("aeiouAEIOU".includes('b'));   // 输出：false`

    - **`while` 循环**：

        - 循环语句，用于在给定条件为 `true` 时重复执行一段代码。

        - **语法：`while (condition) { }`**

### **三、解题思路，为什么用双指针？**

- 因为题目要求 **“反转元音字母”**，并且元音字母的位置是 **分散的**。

- 用双指针法：

    - 从两端开始找元音，每次找到一对就交换。

    - 相对来说更高效，只需要遍历字符串一次。

- 如果用普通的遍历方法，需要：

    - 找出所有元音字母的位置。

    - 然后倒序替换，这样时间复杂度会更高。

- **双指针法的时间复杂度是 O(n)**，因为每个字符最多被访问两次。

### **四、.indexOf() 与 .lastIndexOf() 方法的总结**

1. **`.indexOf()` 方法的介绍**

    - 用来查找数组或字符串中 **第一次出现的指定元素的位置（索引）**。

    - **语法：`array.indexOf(searchElement, fromIndex);`**

    - 如果找到，返回该元素的索引（从 `0` 开始）

    - 如果找不到，返回 `-1`

2. **`.lastIndexOf()` 方法的介绍**

    - 用来查找数组或字符串中 **最后一次出现的指定元素的位置（索引）**。

    - **语法：`array.lastIndexOf(searchElement, fromIndex);`**

    - 如果找到，返回该元素的索引。

    - 如果找不到，返回 `-1`

### **五、对比 while 与 switch 语法**

1. **`while` 语法：**

    - **用法：** 重复执行（当条件为 true 时持续循环）

    - **基本语法：** `while (condition) { /* code */ }`

2. **`switch` 语法：**

    - **用法：** 多条件分支判断

    - **基本语法：** `switch (value) { case x: /* code */ break; default: /* code */ }`

3. **简单总结：**

    - `while` 是：**重复执行**

    - `switch` 是：**匹配值后执行对应分支**（可以看作 `if...else` 的替代）

{% include hr_write_word.html text="END" %}