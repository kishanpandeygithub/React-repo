// // create the element from the js 


// const React = {
//     createElement: function (tag, styles, children) {
//         const element = document.createElement(tag);
//         if (typeof children === 'object') {
//             for( let val of children){
//                 element.append(val);
//             }
//         } else {
//             element.innerText = children;

//         }
//         for (let key in styles) {
//             element.style[key] = styles[key];
//         }
//         return element;
//     }
// }

// const ReactDom = {
//     render: function (element, root) {
//         root.append(element);
//     }
// }
// const header1 = React.createElement('h1', { fontSize: "30px", backgroundColor: "blue", color: "white" }, "hello coder army");
// const header2 = React.createElement('h1', { fontSize: "30px", backgroundColor: "black", color: "white" }, "kaise ho aap sab log");

// const list1 = React.createElement('li', {}, "HTML");
// const list2 = React.createElement('li', {}, "CSS");
// const list3 = React.createElement('li', {}, "JS");
// const UL = React.createElement('ul', { fontSize: "30px", backgroundColor: "green", color: "white" }, [list1 ,list2 , list3]);

// const root = document.getElementById("root");

// ReactDom.render(header1, root);
// ReactDom.render(header2, root);
// ReactDom.render(UL, root);


// // root.append(header1);
// // root.append(header2);

// // const header1 = document.createElement('h1');
// // header1.innerText = "kishan pandey";
// // header1.style.backgroundColor = "blue";
// // header1.style.fontSize = "30px";
// // header1.style.color = "white";

// // root.append(header1);


