---
layout: default
title: "Num. 28 - Dota2 Senate"
slug: "Num28"
date: 2025-04-22 11:00:00 +0800
permalink: /leetcode-75/Num28/
---

# Num. 28 - Dota2 Senate

<aside class="asideDiv">
    <div>👉</div>
    <div>
        <main>
            {% capture explanation %}
In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise **one** of the two rights:

- **Ban one senator's right:** A senator can make another senator lose all his rights in this and all the following rounds.
- **Announce the victory:** If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.

Given a string `senate` representing each senator's party belonging. The character `'R'` and `'D'` represent the Radiant party and the Dire party. Then if there are `n` senators, the size of the given string will be `n`.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be `"Radiant"` or `"Dire"`.
            {% endcapture %}
            {{ explanation | markdownify }}
        </main>
        <main>
            {% capture example %}
#### Example 1:
Input: senate = "RD"  
Output: "Radiant"  
Explanation:  
The first senator comes from Radiant and he can just ban the next senator's right in round 1.  
And the second senator can't exercise any rights anymore since his right has been banned.  
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
#### Example 2:
Input: senate = "RDD"  
Output: "Dire"  
Explanation:  
The first senator comes from Radiant and he can just ban the next senator's right in round 1.  
And the second senator can't exercise any rights anymore since his right has been banned.  
And the third senator comes from Dire and he can ban the first senator's right in round 1.  
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
            {% endcapture %}
            {{ example | markdownify }}
        </main>
    </div>
</aside>

{% include hr_write_word.html text="代码展示（含错误 & 正确写法）" %}

## **Did it myself.** &#x274C;
<pre><code class="language-js">
var predictPartyVictory = function(senate) {

    let record = new Map();

    for(let n of senate) {
        record.set(n, (record.get(n) || 0) + 1);
    }

    let senatekeys = new Set(record.keys());

    for(let n of senatekeys) {
        if(record.get('R') > 0 && record.get('D') > 0) {
            record.get(n)--;
            if(n === 'R') {
                record.get('D')--;
            } else {
                record.get('R')--;
            }
        }

        if(record.get('R') === 0 && record.get('D') === 0) {
            return "Dire"
        } else {
            return "Radiant"
        }
    }
};
</code></pre>

## **Solution via Comments / GPT**
<pre><code class="language-js">
var predictPartyVictory = function(senate) {
    let n = senate.length;
    let queueR = [], queueD = [];

    for(let i = 0; i < n; i++) {
        if(senate[i] === 'R') queueR.push(i)
        else queueD.push(i);
    }

    while(queueD.length > 0 && queueR.length > 0) {
        let rGra = queueR.shift();
        let dGra = queueD.shift();

        if(rGra < dGra) {
            queueR.push(rGra + n);
        } else {
            queueD.push(dGra + n);
        }
    }

    return queueR.length > 0 ? "Radiant" : "Dire"
};
</code></pre>

![image]({{ "/assets/images/leetcode/Dota2-Senate.png" | relative_url }})


{% include hr_write_word.html text="END" %}