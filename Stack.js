class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class _Node {
  constructor(value, next) {
    this.data = value;
    this.next = next;
  }
}

function main(){
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  display(starTrek);
  starTrek.pop();
  starTrek.pop();
  display(starTrek);

  function peek(stack){
    return stack.top.data;
  }

  function isEmpty(stack){
    return !stack.top;
  }

  function sortStack(stack){
    let AStack = new Stack();
    let BStack = new Stack();
    while(!isEmpty(stack)){
      let currVal = stack.pop();
      if(!isEmpty(stack)){
        let nextVal = peek(stack);
      }
    }
  }

  function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const stack = new Stack();
    let halfRoundDown = Math.floor(s.length/2);
    let isOddNum = s.length % 2 === 1;
    for(let i = 0; i < halfRoundDown; i++){
      stack.push(s.charAt(i));
    }
    let isPalendrom = true;
    for(let i = halfRoundDown; i < s.length; i++){
      if(!(isOddNum && i === halfRoundDown)){
        isPalendrom = stack.pop()===s.charAt(i);
      }
      if(!isPalendrom){
        return false;
      }
    }
    return true;
  }

  function hasBalancedParentheses(expression){
    let stack = new Stack();
    for(let i = 0; i < expression.length; i++){
      const currChar = expression.charAt(i);
      if(currChar === '(' || currChar === ')'){
        stack.push(currChar);
      }
    }
    let openCounter = 0;
    while(!(isEmpty(stack))){
      let currChar = stack.pop();
      if(currChar === ')')
        openCounter--;
      else
        openCounter++;
      if(openCounter > 0)
        return false;
    }
    return openCounter === 0;
  }

  function display(stack, node = stack.top){
    console.log(node.data);
    if(node.next){
      display(stack, node.next);
      return;
    }
    console.log('');
  }
}

main();