import React, { useState } from "react";
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
import { addUser } from "../Service/Api";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px",
    },
  },
  button: {
    backgroundColor: "#66CCFF ",
  },
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { firstName, lastName, email, phone } = user;
  const className = useStyles();
  const history = useNavigate();

  const valueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = async () => {
    await addUser(user);
    history("/all");
  };

  return (
    <Box>
      <FormGroup className={className.container}>
        <Typography variant="h2"> Add User </Typography>
        <FormControl>
          <InputLabel> Name </InputLabel>
          <Input
            onChange={(e) => valueChange(e)}
            name="firstName"
            value={firstName}
          />
        </FormControl>
        <FormControl>
          <InputLabel> last name </InputLabel>
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
          onClick={() => addUserDetail()}
        >
          Add User
        </Button>
      </FormGroup>
    </Box>
  );
};

export default AddUser;
