import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

function Profile() {
  const { user,logout } = useAuth();

  const navigate=useNavigate();

  const handleLogout = async ()=>{
    logout(()=>{
      navigate("/");
    });
  }
  return (
    <div>
      Profile:
      
      <br></br>
      <br />
      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
