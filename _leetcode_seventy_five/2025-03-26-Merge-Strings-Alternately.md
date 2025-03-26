---
layout: default
title: "Merge Strings Alternately"
slug: "Day1"
date: 2025-03-26 10:00:00 +0800
permalink: /leetcode-75/Day1/
---

# DAY 1 - Merge Strings Alternately

<aside style="background-color: #f8f8f6; display: flex; flex-direction: row;">
    <!-- 图标 -->
    <div style="flex: 1;">
        👉
    </div>
    <!-- 题目介绍 -->
    <div style="padding-left: 2em; margin: 0; flex: auto;">
        <!-- 文字介绍部分 -->
        <div>
            <p style="margin: 0;">
                You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating
                order,
                starting with `word1`. If a string is longer than the other, append the additional letters onto the
                end
                of the merged string.
            </p>
            <p>
                Return *the merged string.*
            </p>
        </div>
        <!-- 示例部分 -->
        <div>
            <h2><strong>Example 1:</strong></h2>
            <pre><code class="language-plaintext">
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1: a b c
word2: p q r
merged: a p b q c r
            </code></pre>
            <h2><strong>Example 2:</strong></h2>
            <pre><code class="language-plaintext">
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1: a b
word2: p q r s
merged: a p b q r s
            </code></pre>
            <h2><strong>Example 3:</strong></h2>
            <pre><code class="language-plaintext">
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1: a b c d
word2: p q
merged: a p b q c d
            </code></pre>
        </div>
    </div>
</aside>

<h2>Did it myself.</h2>
<pre><code class="language-js">
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
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


<h2>Get it from the comments section</h2>
<pre><code class="language-js">
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
 let result = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
};
</code></pre>