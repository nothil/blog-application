import React, { useEffect, useState } from "react";
// import axios from "axios";

import {
  Box,
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../Service/Api";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    width: "85%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      color: "#000000",
      backgroundColor: "#CCCCFF",
    },
  },
  tbody: {},
});

const AllUsers = () => {
  const className = useStyles();
  const [addData, setAddData] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setAddData(response.data);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <Table className={className.table}>
      <TableHead className={className.thead}>
        <TableRow>
          <TableCell> ID </TableCell>
          <TableCell> Name </TableCell>
          <TableCell> UserName </TableCell>
          <TableCell> Email </TableCell>
          <TableCell> Phone </TableCell>
          <TableCell> </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={className.tbody}>
        {addData.map((user) => (
          <TableRow>
            <TableCell> # </TableCell>
            <TableCell> {user.firstName} </TableCell>
            <TableCell> {user.lastName} </TableCell>
            <TableCell> {user.email} </TableCell>
            <TableCell> {user.phone} </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="Primary"
                component={Link}
                style={{ marginRight: "15px" }}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
