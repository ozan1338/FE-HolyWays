import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { deleteNotif } from "../action/notifAction";

export default function ContactChat({ dataContact, clickContact, contact }) {
  const dispatch = useDispatch();

  let contactUserHaveNotRead = [];
  //console.log(contactUserHaveNotRead.length);

  const payload = JSON.parse(localStorage.getItem("notif"));

  if (payload) {
    const { idSender } = JSON.parse(localStorage.getItem("notif"));
    if(idSender){
      contactUserHaveNotRead = idSender?.filter(
        (item) => !dataContact.some((element) => item === element.id)
      );
    }
    console.log(contactUserHaveNotRead);
  }

  //console.log(idSender);

  return (
    <>
      {dataContact.length > 0 && (
        <>
          {dataContact.map((item, index) => {
            return (
              <div
                key={index}
                className={`chat-contact-body ${
                  contact?.id === item?.id
                    ? "background-gray"
                    : contactUserHaveNotRead.length !== 0
                    ? contactUserHaveNotRead.some(element => element.idSender === item.id)
                      ? "background-green"
                      : null
                    : null
                }`}
                onClick={() => {
                  clickContact(item);
                  if(contactUserHaveNotRead.length !== 0){
                    dispatch(deleteNotif(item.id))
                  }
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
                  <p>{item.message}</p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
