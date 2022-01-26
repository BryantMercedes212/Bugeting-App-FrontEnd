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

  const handleDelete = (i) => {
    axios.delete(`${URL}/transactions/${i}`).then((response) => {
      setTransactions(response.data);
    }, []);
  };
  let amount = 0;
  for (let transaction of transactions) {
    amount += transaction.amount;
  }
  let radian = "";

  switch (true) {
    case amount > 3000:
      radian = " gold 10%, gold ";
      console.log(radian);
      break;
    case amount > 2000:
      radian = "green 10%, green ";
      console.log(radian);
      break;
    case amount > 1900:
      radian = "white 10% , green 10%";
      console.log(radian);
      break;
    case amount > 1800:
      radian = "white 10% , green 20%";
      console.log(radian);
      break;
    case amount > 1700:
      radian = "white 10% , green 30%";
      console.log(radian);
      break;
    case amount > 1600:
      radian = "white 10% , green 40%";
      console.log(radian);
      break;
    case amount > 1500:
      radian = "white 10% , green 50%";
      console.log(radian);
      break;
    case amount > 1400:
      radian = "white 10% , green 60%";
      console.log(radian);
      break;
    case amount > 1300:
      radian = "white 10% , green 70%";
      console.log(radian);
      break;
    case amount > 1100:
      radian = "white 10% , green 80%";
      console.log(radian);
      break;
    case amount > 1100:
      radian = "white 10% , green 90%";
      console.log(radian);
      break;
    case amount > 1000:
      radian = "white 10% , green 100%";
      console.log(radian);
      break;
    case amount > 500:
      radian = "white 10%, white ";
      console.log(radian);
      break;
    case amount > 10:
      radian = "white 10% , red 100%";
      console.log(radian);
      break;
    case amount > 0:
      radian = "white 10% , red 95%";
      console.log(radian);
      break;
    case amount < -1000:
      radian = "red 10%, red";
      console.log(radian);
      break;
    case amount < -900:
      radian = "white 10% , red 10%";
      console.log(radian);
      break;
    case amount < -800:
      radian = "white 10% , red 20%";
      console.log(radian);
      break;
    case amount < -700:
      radian = "white 10% , red 30%";
      console.log(radian);
      break;
    case amount < -600:
      radian = "white 10% , red 40%";
      console.log(radian);
      break;
    case amount < -500:
      radian = "white 10% , red 50%";
      console.log(radian);
      break;
    case amount < -400:
      radian = "white 10% , red 60%";
      console.log(radian);
      break;
    case amount < -300:
      radian = "white 10% , green 70%";
      console.log(radian);
      break;
    case amount < -200:
      radian = "white 10% , red 80%";
      console.log(radian);
      break;
    case amount < -100:
      radian = "white 10% , red 90%";
      console.log(radian);
      break;
  }
  const transaction = transactions.map((transaction, i) => {
    let arrayOfDates = transaction.date.split("-").map((element) => {
      return Number(element);
    });
    const date = `${months[arrayOfDates[1]]} ${arrayOfDates[2]} ${
      arrayOfDates[0]
    }`;

    return (
      <tr className="transaction">
        <td>
          <p id="data">{date}</p>
        </td>
        <td>
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
    <div className="transactions">
      <div className="total">
        Account total:{" "}
        <Link
          to="/transactions"
          id="sum"
          style={{ background: `radial-gradient(${radian})` }}
        >
          {amount}
        </Link>
      </div>

      <table>
        <thead>
          <th>
            <p id="thead">date</p>
          </th>
          <th>
            <p id="thead">Source</p>
          </th>
          <th>Income</th>
        </thead>
        <br></br>
        <tbody>{transaction}</tbody>
      </table>
    </div>
  );
};

export default Transactions;
