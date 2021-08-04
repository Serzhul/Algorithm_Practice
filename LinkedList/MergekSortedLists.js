var mergeKLists = function(lists) {
    if (lists.length < 1) return null;
    
    let result = new ListNode(-1, null);

    for (let i = 0; i<lists.length; i++) {
        if (lists[i] === null) continue;
        
        insert(result, lists[i])
    }

    return result.next
    
};

const insert = (mainNode, insertNode) => {

    let node = insertNode;

    while(node !== null) {
        
        if(mainNode.next === null) {
            mainNode.next = new ListNode(node.val, node.next);
            break;
        }
        else {
            if(mainNode.next.val > node.val) {
                let temp = mainNode.next;
                mainNode.next = new ListNode(node.val, temp);
                node = node.next
            }
        mainNode = mainNode.next
        }
    }
}
