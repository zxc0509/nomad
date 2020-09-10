import React from "react";


function Food({name, picture}){
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
    );
}

const foodILike = [
  {
    name: "Kimchi",
    image:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  }
];
function App(){
  return(
    <div>
      <h1>Hello what the hell</h1>
        {foodILike.map(dish => ( //dish = object
        <Food name={dish.name} picture={dish.image}/>
        ))}
    </div>
  );
}

export default App;