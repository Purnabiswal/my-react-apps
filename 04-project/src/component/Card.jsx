import React from 'react'

const Card = (props) => {

  console.log(props.user, props.age);

  return (
    <div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1780507397482-7c7032d81826?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
        <h1>Purna Biswal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          molestiae fuga repellendus magnam fugit beatae consequatur{" "}
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default Card
