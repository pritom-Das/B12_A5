What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById -> it select a single element with a same id name if there is not element on DOM with that id ti will return a null;
getElementsByClassName-> it select multiple element with the same class name it have. it returns a HtmlCollection. in HtmlCollection we can't use foreach loop but 
                          we can use for of loop here. it looks like an array but not actually a array
querySelector ->it selects the filst element that mathces the css selector
querySelectorAll -> Selects all elements matching a CSS selector.it  returns a NOdelist.

//..................................//
How do you create and insert a new element into the DOM?
Ans -> suppose i hava list container with id = "continer"
i want to add a list to this container. what i will do is i will select the container first using getElementById
then i will create a Element li using document.createElement('li')
then i will append it to the the container
//............................//
What is Event Bubbling and how does it work?
ans -> Evnet bubbling is a technique where event starts from child and bubble up to the root 
how it works example->
<body>
<div id="parent">
  <button id="child">Click Me</button>
</div>
  <scripit>
    document.getElementById("child").addEventListener("click", () => {
  console.log("Child button clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent div clicked");
});

document.body.addEventListener("click", () => {
  console.log("Body clicked");
});

  </scripit>
</body>
The event fires on the button child.
Then bubbles up to its parent <div>.
Then bubbles up to the body

//..........................................//
What is Event Delegation in JavaScript? Why is it useful?
Ans-> Event Delegation is a technique where instead of attaching event listeners to multiple child elements
, we attach a single event listener to a parent element. this is useful because instead of 100 event listeners, we can use just 1.
    Newly added children also trigger the event automatically. Easier to maintain one listener than many.
//...............................................//
What is the difference between preventDefault() and stopPropagation() methods?
ANS -> preventDefault(): Prevents the default action/behavior of an element.
      Does not stop the event from bubbling up.
  stopPropagation(): Stops the event from bubbling up (or capturing down).
   The event will not continue to parent/ancestor elements.
