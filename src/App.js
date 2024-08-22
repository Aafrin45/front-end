import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  // GET method
  const fetchMessage = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/message');
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error fetching the message:", error);
    }
  };

  // POST method
  const postMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/message', { message: inputMessage });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error posting the message:", error);
    }
  };

  // PUT method
  const putMessage = async () => {
    try {
      const response = await axios.put('http://localhost:3001/api/message', { message: inputMessage });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error updating the message:", error);
    }
  };

  // DELETE method
  const deleteMessage = async () => {
    try {
      const response = await axios.delete('http://localhost:3001/api/message');
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error deleting the message:", error);
    }
  };

  return (
    <div className="App">
      <h1>API Call in React</h1>
      <input 
        type="text" 
        value={inputMessage} 
        onChange={(e) => setInputMessage(e.target.value)} 
        placeholder="Enter a message"
      /><br/><br/>
      <div>
        <button onClick={fetchMessage}>Get Message</button><br/><br/>
        <button onClick={postMessage}>Post Message</button><br/><br/>
        <button onClick={putMessage}>Put Message</button><br/><br/>
        <button onClick={deleteMessage}>Delete Message</button><br/><br/>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
