// log and dir
console.log(document.getElementsByTagName("div")[0]);
console.dir(document.getElementsByTagName("div")[0]);

// tagName and nodeName
console.log(document.querySelector("div").tagName);
console.log(document.querySelector("div").nodeName);

// innerHTML and outerHTML
console.log(document.querySelector("div").innerHTML);
console.log(document.querySelector("div").outerHTML);

// textContent
console.log(document.body.textContent);

// hidden property
let text = document.getElementById("area");
text.hidden = true;
// text.hidden = false;
