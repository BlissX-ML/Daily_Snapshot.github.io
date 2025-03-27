---
layout: default
title: "DAY1 - Merge Strings Alternately"
slug: "Day1"
date: 2025-03-26 10:00:00 +0800
permalink: /leetcode-75/Day1/
---

# DAY 1 - Merge Strings Alternately

<aside class="asideDiv">
    <!-- 图标 -->
    <div>
        👉
    </div>
    <!-- 题目介绍 -->
    <div>
        <!-- 文字介绍部分 -->
        <main>
            <p style="margin: 0;">
                You are given two strings <code>word1</code> and <code>word2</code>. Merge the strings by adding letters in alternating
                order,
                starting with <code>word1</code>. If a string is longer than the other, append the additional letters onto the
                end
                of the merged string.
            </p>
            <p>
                Return <i>the merged string.</i>
            </p>
        </main>
        <!-- 示例部分 -->
        <main>
            <h3>Example 1:</h3>
                <p class="quoteLeetcode">
                Input: word1 = "abc", word2 = "pqr"<br>
                Output: "apbqcr"<br>
                Explanation: The merged string will be merged as so:<br>
                word1: a b c<br>
                word2: p q r<br>
                merged: a p b q c r
                </p>
            <h3>Example 2:</h3>
            <p class="quoteLeetcode">
            Input: word1 = "ab", word2 = "pqrs"<br>
            Output: "apbqrs"<br>
            Explanation: Notice that as word2 is longer, "rs" is appended to the end.<br>
            word1: a b<br>
            word2: p q r s<br>
            merged: a p b q r s
            </p>
            <h3>Example 3:</h3>
            <p class="quoteLeetcode">
            Input: word1 = "abcd", word2 = "pq"<br>
            Output: "apbqcd"<br>
            Explanation: Notice that as word1 is longer, "cd" is appended to the end.<br>
            word1: a b c d<br>
            word2: p q<br>
            merged: a p b q c d
            </p>
        </main>
    </div>
</aside>

<h2><strong>Did it myself.</strong></h2>
<pre><code class="language-js">
var mergeAlternately = function(word1, word2) {
    var mergeWord = "";
    for(var i=0; i < Math.max(word1.length, word2.length); i++){
        if(word1.length < word2.length && i >= Math.min(word1.length, word2.length)){
            mergeWord += word2[i];
        } else if(word2.length < word1.length && i >= Math.min(word1.length, word2.length)){
            mergeWord += word1[i];
        }else {
            mergeWord += word1[i];
            mergeWord += word2[i];
        }
    }
    console.log(mergeWord);
    return mergeWord;
};
</code></pre>


<h2><strong>Get it from the comments section</strong></h2>
<pre><code class="language-js">
var mergeAlternately = function(word1, word2) {
 let result = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
};
</code></pre>