import React, { useEffect, useState } from "react";
import {
  Box,
  makeStyles,
  FormGroup,
  FormControl,
  InputLabel,
  TextField,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { addUser, editUser, getUsers } from "../Service/Api";
import { useNavigate, useParams } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px",
    },
    backgroundColor: "#FFFF",
  },
  button: {
    backgroundColor: "#0DCAF0",
  },
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const { firstName, lastName, email, phone } = user;
  const { id } = useParams();
  const className = useStyles();
  const history = useNavigate();

  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const valueChange = (e) => {
    console.log(e.target.value);
    console.log(JSON.stringify(user));
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetail = async () => {
    console.log(JSON.stringify(user) + "---->");
    await editUser(user.id, user);
    history("/all");
  };

  return (
    <Box>
      <FormGroup className={className.container}>
        <Typography variant="h3"> Update User </Typography>
        <FormControl>
          <InputLabel> Name </InputLabel>
          <Input
            onChange={(e) => valueChange(e)}
            name="firstName"
            value={firstName}
          />
        </FormControl>
        <FormControl>
          <InputLabel> User Name </InputLabel>
          <Input
            onChange={(e) => valueChange(e)}
            name="lastName"
            value={lastName}
          />
        </FormControl>
        <FormControl>
          <InputLabel> Email </InputLabel>
          <Input onChange={(e) => valueChange(e)} name="email" value={email} />
        </FormControl>
        <FormControl>
          <InputLabel> Phone No. </InputLabel>
          <Input onChange={(e) => valueChange(e)} name="phone" value={phone} />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetail()}
        >
          Update User
        </Button>
      </FormGroup>
    </Box>
  );
};

export default EditUser;
