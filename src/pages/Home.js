import React, { Fragment, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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

import { logOut } from "../redux/firebaseSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmailComposer = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = JSON.parse(localStorage.getItem("mailSender"));
  console.log("email email", email);

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEditorStateChange = (state) => {
    setEditorState(state);
  };

  const mailCollection = collection(firestore, "mailBox");

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = editorState.getCurrentContent().getPlainText();

    const mailDetail = { email, recipient, subject, content };

    // Handle the email submission logic here
    const addData = async () => {
      try {
        if (recipient && editorState) {
          await addDoc(mailCollection, mailDetail);

          setRecipient("");
          setSubject("");
          setEditorState(EditorState.createEmpty());
        }
      } catch (error) {
        console.log("this is error", error.message);
      }
    };
    addData();
  };

  const LogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("mailSender");
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <div>
          <label htmlFor="recipient">To:</label>
          <input
            type="email"
            id="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            required
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            required
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Message:</label>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorStateChange}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            placeholder="Compose your message here..."
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Send
        </button>
        <button style={{ marginLeft: "500px" }} onClick={LogOut}>
          Logout
        </button>
      </form>
    </Fragment>
  );
};

export default EmailComposer;
