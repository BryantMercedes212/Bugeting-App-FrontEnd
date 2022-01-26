import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Transactions from "./Transactions";

const Transaction = () => {
  let { index } = useParams();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [isEdit, setEdit] = useState(false);
  const [transaction, setTransaction] = useState({
    date: "",
    source: "",
    amount: 0,
    form: "",
  });

  useEffect(() => {
    axios.get(`${URL}/transactions/${index}`).then((response) => {
      setTransaction({
        date: response.data.date,
        source: response.data.source,
        amount: response.data.amount,
        form: response.data.form,
      });
    });
  }, []);

  const { date, source, post, form } = transaction;
  return (
    <div>
      <h1>{date}</h1>
      <p>{source}</p>
      <p>{post}</p>
      <p>{form}</p>

      <Link to={`/transactions/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/transactions/`}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Transaction;
