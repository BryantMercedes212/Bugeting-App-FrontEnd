import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Transaction from "./components/Transaction";
import EditForm from "./components/EditForm";
import NewTransaction from "./components/NewTransaction";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/:index" element={<Transaction />} />
        <Route path="/transactions/:index/edit" element={<EditForm />} />
        <Route path="transactions/new" element={<NewTransaction />} />
      </Routes>
    </div>
  );
}

export default App;
