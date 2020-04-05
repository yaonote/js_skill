/**
 * 前缀树又称作字典树
 * 是一种有序树，用于保存关联数组，其中的键通常是字符串
 */

 class TrieNode {
     constructor() {
         // 代表每个字符经过节点的次数
         this.path = 0;
         // 代表到该节点的字符串有几个
         this.end = 0;
         // 链接
         this.next = new Array(26).fill(null)
     }
 }

 class Trie {
     constructor() {
         // 根节点，代表空字符串
         this.root = new TrieNode();
     }

     //插入字符串
     insert(str) {
         if(!str) return;
         let node = this.root;
         for(let i = 0; i < str.length; i++) {
             // 获得字符串先对应的索引
             let index = str[i].charCodeAt() - 'a'.charCodeAt();
             // 如果索引对应没有值就创建
             if(!node.next[index]) {
                 node.next[index] = new TrieNode()
             }
             node.path += 1;
             node = node.next[index];
         }
         node.end += 1;
     }
     
     //搜索字符串出现的次数
     search(str){
         if(!str) return;
         let node = this.root;
         for(let i = 0; i < str.length; i++){
             let index = str.charCodeAt() - 'a'.charCodeAt();
             // 如果索引对应没有值，代表没有需要搜素的字符串
             if(!node.next[index]){
                 return 0
             }
             node = node.next[index]
         }
         return node.end;
     }
     
     // 删除字符串
     delete(str) {
         if(!this.search(str)) return;
         let node = this.root;
         for(let i = 0; i < str.length; i++){
             let index = str[i].charCodeAt() - 'a'.charCodeAt();
             // 如果索引对应的节点的path为0，代表经过该节点的字符串已经一个，直接删除即可
             if(--node.next[index].path == 0){
                 node.next[index] = null;
             }
             node = node.next[index];
         }
         node.end -=1;
     }
 }