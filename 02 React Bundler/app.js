const element = React.createElement('h1', { id: "first", className: "kishan", style: { background: "blue", fontSize: "30px", color: "black" } }, "hello i am kishan pandey");
const element2 = React.createElement('h1', { id: "second", className: "kishan", style: { background: "blue", fontSize: "30px", color: "black" } }, "maja aaya mughe");
const div1 = React.createElement("div", {}, [element, element2]);
const root = document.getElementById("root");
// ReactDOM.render(element, root);
const Reactroot = ReactDOM.createRoot(root);
Reactroot.render(div1);
// Reactroot.render(element2);