import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${URL}/transactions`).then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const months = [
    "dummy",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let amount = 0;
  for (let transaction of transactions) {
    amount += transaction.amount;
  }

  // const dateCorrection = transactions.map((transaction) => {});
  const handleDelete = (i) => {
    axios.delete(`${URL}/transactions/${i}`).then((response) => {
      setTransactions(response.data);
    }, []);
  };

  const transaction = transactions.map((transaction, i) => {
    let arrayOfDates = transaction.date.split("-").map((element) => {
      return Number(element);
    });
    const date = `${months[arrayOfDates[1]]} ${arrayOfDates[2]} ${
      arrayOfDates[0]
    }`;
    return (
      <tr className="transaction">
        <td id="data">
          <Link to={`/transactions/${i}`}>{date}</Link>
        </td>
        <td id="data">
          <Link to={`/transactions/${i}`}>{transaction.source}</Link>
        </td>
        <td>
          <Link to={`/transactions/${i}`} id="amount">
            {transaction.amount}
          </Link>
        </td>
        <td>
          <Link to={`/transactions/${i}/edit`} className="edit">
            <button>Edit</button>
          </Link>
        </td>
        <td>
          <button onClick={() => handleDelete(i)} className="button">
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h2 className="amount">{amount}</h2>
      <table>
        <thead id="thead">
          <th>date</th>
          <th>Source</th>
          <th>Income</th>
        </thead>
        <br></br>
        <tbody>{transaction}</tbody>
      </table>
    </>
  );
};

export default Transactions;
