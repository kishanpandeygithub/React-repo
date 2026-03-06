const element = React.createElement('h1', {}, "hello i am kishan pandey");

const root = document.getElementById("root");
// ReactDOM.render(element, root);
const Reactroot = ReactDOM.createRoot(root);
Reactroot.render(element);