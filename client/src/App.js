import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const ENDPOINT = "http://127.0.0.1:5000";
const socket = io(ENDPOINT);

const App = () => {
  return <div>Hello</div>;
};

export default App;
