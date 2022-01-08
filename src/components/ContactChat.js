import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ContactChat({ dataContact, clickContact, contact }) {
  //console.log(dataContact);
  //const getSecondNow = new Date().getSeconds();
  //console.log(getSecondNow)
  return (
    <>
      {dataContact.length > 0 && (
        <>
          {dataContact.map((item, index) => {
            return (
              <div
                key={index}
                className={`chat-contact-body ${
                  contact?.id === item?.id && "background-gray"
                }`}
                onClick={() => {
                  clickContact(item);
                }}
              >
                <LazyLoadImage
                  src={
                    item.profile
                      ? item.profile.photoProfile
                      : process.env.PUBLIC_URL + "/assets/images/img_avatar.png"
                  }
                />
                <div className="chat-contact-details">
                  <h2>{item.name}</h2>
                  <p>
                    {item.message}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
