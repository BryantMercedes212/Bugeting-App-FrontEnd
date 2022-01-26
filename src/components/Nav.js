import "./Nav.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { updateLocale } from "moment";

const Nav = () => {
  const [transactions, setTransactions] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const [amoun, setAmount] = useState(0);

  useEffect(() => {
    axios.get(`${URL}/transactions`).then((response) => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <header>
      <nav>
        <div className="nav-links">
          <div className="pages">
            {" "}
            <Link to="/">🅷🅾🅼🅴</Link>{" "}
            <Link to="/transactions">Transactions</Link>
          </div>
          <Link to="transactions/new" id="new">
            New Transaction
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
