import React from "react";
import "./style.scss";
import { BsTelephone } from "react-icons/bs";

function ContactItem() {
  const contactData = [
    {
      id: 1,
      icon: <BsTelephone/> ,
      title: "Phone",
      lastTitle: "0212 651 1652",
    },
    {
      id: 2,
      icon: <BsTelephone/> ,
      title: "E-Mail",
      lastTitle: "hello@example.com",
    },
    {
      id: 3,
      icon: <BsTelephone/> ,
      title: "Location",
      lastTitle: "Turkey , IST",
    },
  ];
  return (
    <>
      {contactData.map((data) => (
        <div className="col-lg-4" key={data.id}>
          <div className="contact-item">
            <div className="item-icon">
              {data.icon}
            </div>
            <div className="item-details">
              <h3>{data.title}</h3>
              <p>{data.lastTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContactItem;
