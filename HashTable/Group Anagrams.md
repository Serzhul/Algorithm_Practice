# Group Anagrams

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

문제 해석 : string 배열 strs가 주어졌을 때, 아나그램들을 그루핑 해라. 어떤 순서든 상관없이 반환할 수 있다.

**Example 1:**

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

```

**Example 2:**

```
Input: strs = [""]
Output: [[""]]

```

**Example 3:**

```
Input: strs = ["a"]
Output: [["a"]]

```

**Constraints:**

- `1 <= strs.length <= 104`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lower-case English letters.

# Solutions

### Solution #1

```jsx
var groupAnagrams = function(strs) {
    let anagrams = {};
    let anaGroups = [];
    
    for(let i = 0; i<strs.length; i++) {
        if(!anagrams[cleanString(strs[i])]) {anagrams[cleanString(strs[i])] = [strs[i]]}
        else {
            anagrams[cleanString(strs[i])].push(strs[i]);
        };
    }
    
    for(let anagram in anagrams) {
        anaGroups.push(anagrams[anagram])
    }
    
    return anaGroups;
};

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
```

### 해설 :

- 문제에서 스트링 배열이 주어지며, 각각의 요소들이 anagram을 만족하는지 알기 위해 그것을 담을 해쉬테이블(객체)을 선언한다. (anagrams) 또한 각각의 anagaram에 해당하는 요소들의 value 값들을 모아 하나의 배열로 반환하기 위해 anaGroups라는 배열을 선언한다.
- anagram인지를 파악하기 위해 각 문자를 정렬해서 합치는 helper function을 선언한다. 해당 함수는 string을 인자로 받아 알파벳만, 소문자만을 대상으로 하는 값들을 정렬하여 반환한다. 즉 이 함수를 통한 값들이 같다면 그 값들은 anagram이라는 것을 알 수 있다.
- 첫 번째 loop에서는 해당 cleanString 함수의 결괏값이 키값으로 해쉬테이블에 존재하는지를 체크하고 만약 없으면 그 값을 키 값으로 하고 해당 문자열을 value로 하는 배열로 선언해준다.
- 또한 만약에 존재할 경우 해당 배열에 그 값을 추가한다. (같은 anagram이므로)
- 두 번째 loop에서는 해쉬테이블을 순회하며 해당 값들을 하나의 배열에 담는다.
- 마지막으로 배열을 반환한다.

### Solution #2

```jsx
var groupAnagrams = function(strs) {
    
    let table=new Map();
    strs.forEach((str)=>{
      
        let key=str.split('').sort().join('');
        if(table.has(key)){
           table.set(key,[...table.get(key),str])
        }
        else{
            table.set(key,[str])
        }
    
    })
    
    return [...table.values()]
    
};
```