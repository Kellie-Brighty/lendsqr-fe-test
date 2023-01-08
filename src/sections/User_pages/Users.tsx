import React from "react";
import { Sidebar } from "../../components/Sidebar";
import "../../Styles/User_styles/Users/users.css";
import { cards } from "../../utils/card_data";

interface UserProps {}

export const User: React.FC<UserProps> = ({}) => {
  return (
    <Sidebar>
      <div className="Users">
        <div>
          <p className="main_title">Users</p>
          <div className="cards_container">
            {cards.map((card, idx) => (
              <div className="card" key={idx}>
                <div>
                  <img src={card.icon} alt="icon" />
                  <p className="card_title" >{card.title}</p>
                  <p className="card_number" >{card.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
