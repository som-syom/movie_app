import React from 'react';

function Food({name}) {
  return <h1>I like {name}</h1>
}

function App() {
  return (
    <div>
      <Food name="kimchi" />
    </div>
  );
}

export default App;
