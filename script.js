class Node{
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
    set (setNext){
        this.nextNode = setNext
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }

    append(newNode){
        let node = this.head;
        while(node.nextNode != null){
            node = node.nextNode;
        }
        node.nextNode = newNode;
    }

    prepend(newNode){
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size(){
        let node = this.head;
        let count = 0;
        while(node){
            count++;
            node = node.nextNode;
        }
        return count
    }

    head(){
        let node = this.head
        return node;
    }

    tail(){
        let node = this.head;
        while(node.nextNode != null){
            node = node.nextNode;
        }
        return node
    }

    at(index){
        let node = this.head;
        let count = 0;
        index--;
        while(count < index && node.nextNode != null ){
            console.log("entro");
            node = node.nextNode;
            count++;
        }
        if(count >= index){
            return node
        }
        return null
    }

    pop(){
        let node = this.head;
        let prevNode = null;
        while(node.nextNode != null){
            prevNode = node;
            node = node.nextNode;
        }
        if (prevNode === null) {
            this.head = null;
        } else {
            prevNode.nextNode = null;
        }
    }

    contains(value){
        let node = this.head;
        let isFind = false;
        while(node && isFind === false){
            if(node.value === value){
                isFind = true;
            }
            node = node.nextNode;
        }
        return isFind;
    }

    find(value){
        let node = this.head;
        let isFind = false;
        let count = 0
        while(node && isFind === false){
            if(node.value === value){
                isFind = true;
            }
            node = node.nextNode;
            count++;
        }
        if(isFind === true){return count}
        else return null
    }

    toString(){
        let arr = [];
        let node = this.head;
        while(node){
            arr.push(node.value);
            node = node.nextNode;
        }
        return `(${arr.join(') -> (')})`
    }

    insertAt(value, index){
        let node = this.head;
        let prevNode = null;
        let count = 1;
        let newNode = new Node(value);
        while(count < index && node && index > 1){
            prevNode = node;
            node = node.nextNode;
            count++;
        }
        if(index === 1){
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        else if (!node || index < 1) {
            console.log("error");
        } else {
            prevNode.nextNode = newNode;
            newNode.nextNode = node;
        }
    }

    removeAt(index){
        let node = this.head;
        let prevNode = null;
        let count = 1;
        if(index === 1){
            this.head = node.nextNode;
        }
        if (!node || index < 1) {
            console.log("error");
        } 
        while(count < index && node && index > 1){
            prevNode = node;
            node = node.nextNode;
            count++;
        }
        prevNode.nextNode = node.nextNode;
    }
}

let node1 = new Node("hola");
let node2 = new Node("Adios");
let node3 = new Node("Chau");

node1.nextNode = node2;
node2.nextNode = node3;

let list = new LinkedList(node1);
 
console.log(list.size());
console.log(list.head);
console.log(list.tail());

let node4 = new Node("append");
list.append(node4);
console.log(list.tail());

let node5 = new Node("prepend");
list.prepend(node5);

console.log(list.at(1));
console.log(list.at(2));
console.log(list.at(5));
console.log(list.at(7));

list.pop();

console.log(list.contains("Adios"));
console.log(list.contains("fede"));

console.log(list.find("Adios"));
console.log(list.find("fede"));

console.log(list.toString());

list.insertAt("bebe",1  );
list.insertAt("señor",7);

list.removeAt(3);
console.log(list.toString())