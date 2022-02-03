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

export default function ChatPage() {
  const [contact, setContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  const [message, setMessage] = useState([]);
  //console.log(message)

  console.log(message.length);

  const { id, adminId } = useParams();

  const token = JSON.parse(localStorage.getItem("currentUser"));
  const decodedToken = jwt_decode(token);
  //console.log(contact?.id);

  //console.log(adminId);

  useEffect(() => {
    socket = io("https://holy-ways-ozan.herokuapp.com" ||"http://localhost:5000", {
      transports: ['websocket', 'polling', 'flashsocket']
    },{
      auth: {
        token: JSON.parse(localStorage.getItem("currentUser")),
      },
      query: {
        id,
      },
    });

    //console.log(contact);
    socket.on("new-message", () => {
      //console.log("contact", contact);
      //console.error("babai")
      socket.emit("load-message", adminId);
      //console.error(adminId)
      loadMessage();
    });


    loadContacts();
    loadMessage();
    //console.log("halo");

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const loadContacts = () => {
    socket.emit("load-admin-contact", parseInt(adminId));
    let dataContact
    socket.on("admin-contact", (data) => {
      //console.log(data);
      //const lastChatWithAdmin = data[0].senderMessage.filter(item => item.idRecepient === parseInt(id))
      //console.log(lastChatWithAdmin);
      dataContact = data.map((item) => ({
        ...item,
        message: item.senderMessage.length > 0
        ? item.senderMessage[item.senderMessage.length - 1]?.message
        : "Click here to start message",
      }));

      setContacts(dataContact);
    });
  };

  const onClickContact = (data) => {
    setContact(data);
    //console.log(data);
    socket.emit("load-message", data.id);
    //console.log(data.id);
    //loadMessage()
  };

  const loadMessage = (value) => {
    //define event listener for "message"
    socket.on("messages", (data) => {
      //console.log(data.length);
      //get data messages
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
          createdAt: item.createdAt
        }));
        //console.log(dataMessages);
        setMessage(dataMessages);
        //loadContacts();
      }
      // else if(data.length === 0){
      //   const dataMessages = [{
      //     idSender: adminId,
      //     message: value,
      //     createdAt: new Date()
      //   }]
      //   setMessage(dataMessages)
      //   loadContacts();
      // }
      loadContacts();
      const chatMessageElm = document.querySelector(".chat-message-container");
      chatMessageElm.scrollTop = chatMessageElm?.scrollHeight;
    });
  };

  const onSendMessage = (event) => {
    //listen only enter key press
    if (event.key === "Enter") {
      console.log(contact.id);
      const data = {
        idRecepient: contact.id,
        message: event.target.value,
      };

      socket.emit("send-message", data);
      event.target.value = "";
      
    }
  };

  return (
    <>
      <Helmet>
      <title>HOLYWAYS || CHAT ADMIN</title>
      </Helmet>
      <Navbar />
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
          {contact && (
            <input
              type="text"
              placeholder="Enter Message..."
              onKeyPress={onSendMessage}
            />
          )}
        </div>
      </div>
    </>
  );
}
