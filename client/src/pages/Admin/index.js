import React from "react";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./styles.css";
import { Box } from "@chakra-ui/react";

function Admin() {
  const { user } = useAuth();
  return user.role === "admin" ? (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Box mt="10">
        <Outlet />
      </Box>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Admin;
