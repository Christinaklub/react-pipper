import React from "react";
import profilePic from "../images/profile.jpg";

// Her modtager vi data via props. Vi kan ikke se hvad den hedder, 
// men det står i parent-komponenten (MainContent)
export default function PipItem({pipItem}) {
  // // Destructuring i js!
  // const person =  {firstname: 'Oliver', email: 'oliver@oliver.dk'};
  // const {firstname, email} = person; // destructuring.
  // // const firstname og email som indeholder værdierne 'Oliver' og 'oliver@oliver.dk'.
  
  // // Dette gør det samme som eksemplet med destructuring
  // const firstname2 = person.firstname;
  // const email2 = person.email;


  return (
    <article className="todo">
      {/* <label htmlFor={pipItem.content}>{pipItem.content}</label> */}
      <div className="pip">
            <img src={profilePic} className="profile-pic"></img>
            {/* indsætter profilbillede, text osv. i component */}
            <h4 className="username">Hannah West</h4>
            {pipItem.content} 

        </div>
    </article>
  );
}
