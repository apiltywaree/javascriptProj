function Node(data) {
    this.data = data;
    this.next = null;
};
function SinglyList() {
    this._length = 0;
    this.head = null;
};
SinglyList.prototype.add = function (value) {
    var node = new Node(value),
        currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

/*var nodeList = new SinglyList();
 nodeList.add("cat");
 nodeList.add("dog");
 nodeList.add("Monkey");
 alert("Hello world");
 console.log("FROM LINKED LIST");
 console.log(nodeList);*/
