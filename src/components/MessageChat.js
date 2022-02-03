import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {useSelector} from "react-redux"

export default function MessageChat({ contact, user, messages }) {
  //const dispatch = useDispatch();
  //console.log(messages)
  //console.log(contact);
  const idSender = contact?.recepientMessage?.filter(
    (item) => item.idSender === user.id
  );

  const userState = useSelector((state) => state.getUserByIdReducer);
  const profile = userState.user;

  //console.log("contact id: ", contact?.id)
  //console.log("message id sender: ", messages[0]?.idSender)
  //console.log("idSender: ", idSender? idSender[0]?.idSender : "hai")
  //console.log("user id", user.id)

  return (
    <>
      {contact
        ? messages.map((item, index) => {
            if (
              contact.id === item.idSender ||
              item.idSender === idSender[0]?.idSender ||
              item.idSender === user.id
            ) {
              return (
                <div key={index}>
                  <div
                    className={
                      item.idSender === user.id ? "user" : "other-user"
                    }
                  >
                    <LazyLoadImage
                      src={
                        item.idSender === user.id
                          ? profile[0].photoProfile
                          : contact.photoProfile
                      }
                      alt="Avatar"
                    />
                    <div className="message">
                      <h2>{item.message}</h2>
                      <p className="time-right">
                        {new Date(item.createdAt).getHours() +
                          ":" +
                          new Date(item.createdAt).getMinutes()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })
        : null}
    </>
  );
}
