const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div",{id:"child1"}, [
        React.createElement( "h1", {id:"h1"}, "i'm an h1 tag"),
        React.createElement( "h2", {id:"h2"}, "i'm an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"}, [
        React.createElement( "h1", {id:"h1"}, "i'm an h1 tag"),
        React.createElement( "h2", {id:"h2"}, "i'm an h2 tag"),
    ]),
    React.createElement("div",{id:"child3"}, [
        React.createElement( "h1", {id:"h1"}, "i'm an h1 tag"),
        React.createElement( "h2", {id:"h2"}, "i'm an h2 tag"),
    ])
]
);




const heading = React.createElement("h1", {id:"heading"}, "hello world from React!");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);