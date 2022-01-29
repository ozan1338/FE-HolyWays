import React, { useEffect, useState } from "react";
import "./chatpage.css";
import Navbar from "../components/Navbar";
import ContactChat from "../components/ContactChat";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import MessageChat from "../components/MessageChat";
import jwt_decode from "jwt-decode";
import { Helmet } from "react-helmet-async";

let socket;

export default function ChatAdmin() {
  const [contact, setContact] = useState(null); // data that have been click
  const [contacts, setContacts] = useState([]); //data from user

  const [message, setMessage] = useState([]);

  const { id } = useParams();

  const token = JSON.parse(localStorage.getItem("currentUser"));
  const decodedToken = jwt_decode(token);

  useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: JSON.parse(localStorage.getItem("currentUser")),
      },
      query: {
        id,
      },
    });

    socket.on("new-message", () => {
      console.log("contact", contact);
      socket.emit("load-message", contact?.id);
      loadMessage();
    });

    loadContacts();
    loadMessage();

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const loadContacts = () => {
    socket.emit("load-not-admin-contact", parseInt(id));
    socket.on("not-admin-contact", (data) => {
      // filter just customer which have sent a message
      let dataContacts = data.filter(
        (item) =>
          (item.recepientMessage.length > 0 || item.senderMessage.length > 0) &&
          item.senderMessage.some((item) => item.idRecepient === parseInt(id))
      );

      //manipulate customers to add message property with the newest message
      dataContacts = dataContacts.map((item) => ({
        ...item,
        message:
          item.senderMessage.length > 0
            ? item.senderMessage[item.senderMessage.length - 1]?.message
            : "Click here to start message",
      }));

      setContacts(dataContacts);
    });
  };

  //console.log(contacts);

  const onClickContact = (data) => {
    setContact(data);
    //console.log(data);
    console.log(data.id);
    socket.emit("load-message", data.id);
    
  };

  const loadMessage = () => {
    //define event listener for "message"
    socket.on("messages", async(data) => {
      //get data messages
      if (data.length > 0) {
        //console.log(data);
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
          createdAt: item.createdAt,
        }));
        //console.log(dataMessages);
        setMessage(dataMessages);
      }
      loadContacts();
      const chatMessageElm = document.querySelector(".chat-message-container");
      chatMessageElm.scrollTop = chatMessageElm?.scrollHeight;
    });
  };

  const onSendMessage = (event) => {
    //listen only enter key press
    if (event.key === "Enter") {
      const data = {
        idRecepient: contact.id,
        message: event.target.value,
      };

      //console.log(data);

      //emit event send message
      socket.emit("send-message", data);
      event.target.value = "";
      //socket.emit("load-message", contact.id);
      
    }
  };

  //console.log(contact,id);

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || MESSAGE</title>
      </Helmet>    
      <Navbar chatPage={true} />
      <div className="chat-page">
        <div className="chat-contact">
          <ContactChat
            dataContact={contacts}
            clickContact={onClickContact}
            contact={contact}
          />
        </div>

        <div className="chat-message">
          <div className="chat-message-container">
            <MessageChat
              contact={contact}
              user={decodedToken}
              messages={message}
            />
          </div>
          {contact && (<input
            type="text"
            placeholder="Enter Message..."
            onKeyPress={onSendMessage}
          />)  }
        </div>
      </div>
    </>
  );
}
