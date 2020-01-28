### 要不匹配位置 要不匹配字符

#### 横向匹配和纵向匹配

##### 横向匹配 可匹配的字符串的长度是不固定的

```
{m,n} 最少m次 最多n次 eq /ab{2,5}c/ => a(2-5个b)c
```
##### 字符组
```js
{m,} 至少出现
{m} m次
？{0,1} 出现或者不出现 
+ {1,} 至少一次
* {0,} 任意次

量词后面添加问号 ？能实现惰性匹配
let str = '123 1234 12345 123456';
let reg1 = /\d{2,5}/g; match => ['123','1234','12345','12345']
let reg2 = /\d{2,5}?/g; match => ['12','12','34','12','34','12','34','56']
```

##### 纵向匹配 匹配字符串的某以为字符时  可以是不确定的字符
```
[abc] abc中的任何一个  /a[123]b/ => a1b a2b a3b
```

##### 字符组 
* 范围表示法
```
[123456acbdefGHIJKLM] => [1-6a-fG-M]
[a-z] 任意的小写字母
[-az] [az-] [a/-z] a-z 三个中的一个字母
```
*取反
```
[^abc] 除abc之外的任意一个字符  字符组的第一位放^ 表示求反的概念
```
```
 常见的简写
 \d [0-9]
 \D [^0-9]
 \w [0-9a-zA-Z_]
 \W [^0-9a-zA-Z_]
 \s [ \t\v\n\r\f] 空白符
 \S [^ \t\v\n\r\f] 非空白符
  . 通配符 不包括 换行符回车、符行分割符、和段分割符
```
表示任意字符 =->  [\d\D] [\w\W] [\s\S] [^]



##### 多选 | 
(p1|p2|p3)


### 匹配位置 ^ $ \b \B (?=p) (?!p)
^ 开头
$ 结尾
\b 单词边界
\B 非单词边界

(?=p) p是一个子模式 p前的位置  "hello".replace(/(?=l)/g,'#') => "he#l#lo" 
(?!p) 与(?=p) 相反


