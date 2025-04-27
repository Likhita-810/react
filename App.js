// import React from "react"; // refers to react in node mods
//     // import ReactDOM from "react-dom";
// import { createRoot } from 'react-dom/client';

// const heading = React.createElement("h1", {}, "Hello World written via React!");
//     // created an ele, base react work, so React.cE is used
//     // any attributes like id/class are taken inside{}
            
// const root = createRoot(document.getElementById("root"));
//     // creating a root and which connects browser and the dev data, so ReactDOM is used.

// root.render(heading);
//     // like how we append child the tags to the root element we render the child created to the root elements using render()

//     // creating a nested html body
// const parent = React.createElement("div",{id: "parent"},
//     [React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement("h1",{},"This is a h1 tag"),
//         React.createElement("h2",{},"This is a h2 tag")
//         ]),
//     [React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement("h1",{},"This is a h1 tag"),
//         React.createElement("h2",{},"This is a h2 tag")
//         ]
//     )],
//     ]
// );
// // root.render(heading);
// root.render([heading, parent]);


import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";

// creating ele using core react
const heading = React.createElement("h1", {id: "heading"}, "React Foundation");
// creating ele using jsx - babel transpiles it to react cE
const jsxHeading = <h1 id="heading" className="head">React Foundation (written in jsx)</h1>

// React Components - functional comp - a func that returns a jsx
const HeadingComp = () => {
    return <h1>React Functional Components</h1>
};

const HeadComp = () => (
    <div>
        {/* diff ways to call a comp inside another comp */}
        {HeadingComp()}
        <HeadingComp/> 
        <HeadingComp></HeadingComp>
        {/* rendering a comp inside another comp - this concept is refered as comp composition*/}
        
        <p>{213+545}</p>
         {console.log("writing js inside a func comp")}
        <h1>Func Comp</h1>
        <h3>without return stmt</h3>
    </div>
) //react func comp can have only one main tag

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([heading, jsxHeading]); //rendering an ele
root.render(<HeadComp/>); //rendering a comp