import { Link, Routes, Route } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <div className="pages">
            {" "}
            <Link to="/">🅷🅾🅼🅴</Link>{" "}
            <Link to="/transactions">Transactions</Link>
          </div>

          <Link to="transactions/new">New Transaction</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
