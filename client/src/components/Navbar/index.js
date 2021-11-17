import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
function Navbar() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">E Commerce</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!isLoggedIn ? (
          <>
            <Button onClick={() => navigate("/signup")} colorScheme="pink">
              Register
            </Button>
            <Button onClick={() => navigate("/signin")} colorScheme="pink">
              Login
            </Button>
          </>
        ):
        <Button onClick={()=> navigate("/profile")}>Profile</Button>
        }

      </div>
    </nav>
  );
}

export default Navbar;
