// src/components/EmailComposer.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const EmailComposer = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    // Logic to send email
    console.log('Subject:', subject);
    console.log('Body:', body);
    // Reset the form or show a success message
    setSubject('');
    setBody('');
  };

  return (
    <div className="email-composer">
      <h2>Compose Email</h2>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <ReactQuill
        value={body}
        onChange={setBody}
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image', 'video'],
            ['clean'],
          ],
        }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default EmailComposer;
