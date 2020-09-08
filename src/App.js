import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "Ed", message: "Hello there" },
    { name: "Vee", message: "Bubble gum present" },
    { name: "Awesome", message: "Interested Peoplw" },
    { name: "Dennis", message: "Makin Money" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
