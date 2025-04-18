---
layout: default
title: "Num. 22 - Determine if Two Strings Are Close"
slug: "Num22"
date: 2025-04-17 11:00:00 +0800
permalink: /leetcode-75/Num22/
---

# Num. 22 - Determine if Two Strings Are Close

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
Two strings are considered **close** if you can attain one from the other using the following operations:

● Operation 1: Swap any two **existing** characters.
    ○ For example, `abcde -> aecdb`
● Operation 2: Transform **every** occurrence of one **existing** character into another **existing** character, and do the same with the other character.
    ○ For example, `aacabb -> bbcbaa` (all `a`'s turn into `b`'s, and all `b`'s turn into `a`'s)

You can use the operations on either string as many times as necessary.

Given two strings, `word1` and `word2`, return `true` *if* `word1` *and* `word2` *are **close**, and* `false` *otherwise.*
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: word1 = "abc", word2 = "bca"  
Output: true  
Explanation: You can attain word2 from word1 in 2 operations.  
Apply Operation 1: "abc" -> "acb"  
Apply Operation 1: "acb" -> "bca"
#### Example 2:
Input: word1 = "a", word2 = "aa"  
Output: false  
Explanation:It is impossible to attain word2 from word1, or vice versa, in any number of operations.
#### Example 3:
Input: word1 = "cabbba", word2 = "abbccc"  
Output: true  
Explanation: You can attain word2 from word1 in 3 operations.  
Apply Operation 1: "cabbba" -> "caabbb"  
Apply Operation 2: "caabbb" -> "baaccc"  
Apply Operation 2: "baaccc" -> "abbccc"
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C; 
<pre><code class="language-js">
var closeStrings = function(word1, word2) {
    let setWord1 = new Set(word1);
    let setWord2 = new Set(word2);
    
    if(word1.length !== word2.length || setWord1.size !== setWord2.size) {
        return false;
    }

    // word1 = 'cab'
    // word2 = 'abc'
    let left = 0;
    let right = 0;
    while(left < setWord1.size && right < setWord2.size) {
        if([...setWord2][right] === [...setWord1][left]){
            right++;
            left = 0;
        }
        left++;
    }

    return right === setWord2.size;
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var closeStrings = function(word1, word2) {
    // 数组长度是否一致
    if(word1.length !== word2.length) return false;

    // 统计各个元素的频率
    let mapWord1 = new Map();
    let mapWord2 = new Map();
    for(let i = 0; i < word1.length; i++) {
        mapWord1.set(word1[i], (mapWord1.get(word1[i]) || 0) + 1);
    }
    for(let i = 0; i < word2.length; i++) {
        mapWord2.set(word2[i], (mapWord2.get(word2[i]) || 0) + 1);
    }

    // 查看元素类型是否是一致的
    let setWord1 = new Set([...mapWord1.keys()]);
    let setWord2 = new Set([...mapWord2.keys()]);
    if(setWord1.size !== setWord2.size) return false;
    for(let n of setWord1) {
        if(!setWord2.has(n)) return false;
    }

    // 查看元素个数都是不是一致的
    let numWord1 = [...mapWord1.values()].sort((a,b) => a - b);
    let numWord2 = [...mapWord2.values()].sort((a,b) => a - b);
    for(let i = 0; i < numWord1.length; i++) {
        if(numWord1[i] !== numWord2[i]) return false;
    }

    return true;
};
</code></pre>


{% include hr_write_word.html text="END" %}