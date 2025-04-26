import React from "react"; // refers to react in node mods
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

const heading = React.createElement("h1", {}, "Hello World written via React!");
// created an ele, base react work, so React.cE is used
// any attributes like id/class are taken inside{}
            
const root = createRoot(document.getElementById("root"));
// creating a root and which connects browser and the dev data, so ReactDOM is used.

root.render(heading);
// like how we append child the tags to the root element we render the child created to the root elements using render()

// creating a nested html body
const parent = React.createElement("div",{id: "parent"},
    [React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1",{},"This is a h1 tag"),
        React.createElement("h2",{},"This is a h2 tag")
        ]),
    [React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1",{},"This is a h1 tag"),
        React.createElement("h2",{},"This is a h2 tag")
        ]
    )],
    ]
);
// root.render(heading);
root.render([heading, parent]);