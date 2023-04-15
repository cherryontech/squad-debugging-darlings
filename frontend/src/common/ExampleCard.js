import React from "react";
import "../CSS/ExampleCard.css";

export default function ExampleCard() {
  return (
    <>
      <div className="card">
        <div className="nameDiv">
          <p class="bold-text">Isabelle Mcgee</p>
          <p>She/her</p>
          <p>🧳 Product Designer</p>
        </div>
        <div className="industryDiv">
          <p class="bold-text">Industry</p>
          <p>
            #Healthcare #Entertainment #Ecommerce <br></br>
            #Cyber Security #Network Admins
          </p>
        </div>
        <div className="strengthDiv">
          <p class="bold-text">Strength</p>
          <p>
            #Career Switching #General Career Guidance <br></br>
            #Imposter Syndrome
          </p>
        </div>
        <button className="clickMe" disabled>
          Book chat
        </button>
      </div>
    </>
  );
}
