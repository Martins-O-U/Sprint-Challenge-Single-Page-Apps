import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header className="welcome card">
        <img
          className="main-img cardImg"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div className="welcome-msg">
          <h2>Welcome to the ultimate</h2> <h2> fan site!</h2>
        </div>
        <div className="welcome-msg2">
          <h2>Welcome to the ultimate fan site!</h2>
        </div>
      </header>
    </section>
  );
}
