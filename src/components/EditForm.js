import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditForm.css";

const EditForm = () => {
  let { index } = useParams();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState({
    date: "",
    source: "",
    amount: 0,
    form: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/transactions/${index}`, transaction)
      .then(() => navigate(`/transactions/`));
  };

  const { date, source, amount, form } = transaction;

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="Date" id="dateLabel">
        Date:
      </label>
      <input
        id="date"
        value={date}
        type="date"
        onChange={handleTextChange}
        required
      />
      <br></br>
      <label htmlFor="source">Source:</label>
      <textarea
        id="source"
        value={source}
        type="number"
        onChange={handleTextChange}
        placeholder="Source"
        required
      />

      <label htmlFor="form">Form:</label>
      <textarea
        id="form"
        value={form}
        onChange={handleTextChange}
        placeholder="Describe your day today"
      />

      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        value={amount}
        placeholder="Please enter days since last"
        onChange={handleTextChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default EditForm;
