
// This structure printed in the below in core react by using React.createElement
/* <div id="parent">
<div id="child1">
<h1>H1Child1</h1>
<h2>H2Child2</h2>
</div>
<div id="child2">
<h1> H1Child2</h1>
<h2> H2Child2</h2>
</div>
</div> */


// react element always return a object like heading is print in a object 
//attributes are like print props in object (attributeslike id and class)
//if we have multiple childrens that are need to be print by using array, the 3 atribute is the children
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("div", { id: "child1" }, "h1Child1"),
    React.createElement("div", { id: "child1" }, "h2Child1"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("div", { id: "child2" }, "h1Child2"),
    React.createElement("div", { id: "child2" }, "h2Child2"),
  ]),
]);
console.log(heading)
 //For creating the root and accessing the root 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 //For render Purpose / print 
 root.render(heading);
 // render method used to convert object into tags and and print that text.