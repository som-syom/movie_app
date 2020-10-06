import React from 'react';

function Food({name}){
	return <h1>I like {name}</h1>;
}

const foodILike = [
	{
		name: "kimchi",
		image: "김치"
	},
	{
		name: "kimbap",
		image: "김밥"
	},
  {
    name: "cheese",
    image: "치즈"
  }
]

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food name={dish.name} />)}
    </div>
  );
}

export default App;
