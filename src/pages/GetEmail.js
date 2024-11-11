import React, { Fragment, useState } from "react";
import { firestore } from "../firebase/firebase";
import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function GetEmail() {
  const [sendMail, setSendMail] = useState([]);
  const mailCollection = collection(firestore, "mailBox");

  const local = JSON.parse(localStorage.getItem("mailSender"));

  useState(() => {
    const getAllSendMail = async () => {
      try {
        // const usersQuery = query(
        //     collection(firestore, "expense"), // Reference to the 'users' collection
        //     where("email", "==", local) // Filter for users older than 25
        //   );
        //   const querySnapshot = await getDocs(usersQuery); // 'users' is the Firestore collection
        //   const usersList = querySnapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     ...doc.data(),
        //   }));
        //   setExpenses(usersList);

        const usersQuery = query(
          collection(firestore, "mailBox"),
          where("recipient", "==", local)
        );
        const querySnapshot = await getDocs(usersQuery);
        const mailList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSendMail(mailList);
      } catch (error) {
        console.log("this is error", error.message);
      }
    };
    getAllSendMail();
  }, []);

  return (
    <Fragment>
      <div>
        {sendMail.map((mail) => (
          <div style={{ margin: "5%" }}>
            <p>from: {mail.email}</p>
            <p>Subject : {mail.subject}</p>
            <p>{mail.content}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default GetEmail;
