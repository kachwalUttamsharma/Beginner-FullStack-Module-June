{/* <div id="parent">
    <div id="child">
        <h1 id="gretting"> Hello From React</h1>
        <h1 id="gretting2"> Hello From React</h1>
    </div>
</div> */}

// const gretting = React.createElement('h1', {id: 'h1tag'}, 'Hello From React');
// console.log(gretting);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
// root.render(gretting);
// JSX
const gretting = React.createElement('div', {id: 'parent'}, 
React.createElement('div', {id:'child'}, 
[React.createElement('h1', {id:'gretting'}, 'Hello From React'),
React.createElement('h1', {id:'gretting2'}, 'Hello From React Heading 2')]));

console.log(gretting);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(gretting);