import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const useStyles = makeStyles((theme) => ({
  splash: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Splash = () => {
  const [userState, setUser] = useContext(UserContext);
  const { user } = userState;
  const { username } = user;
  console.log(user);
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.splash}>
      <Typography style={{ marginBottom: "20px" }} variant="h3">
        Welcome
      </Typography>
      <Typography style={{ marginBottom: "40px" }} variant="h4">
        {username}
      </Typography>
      <Button
        onClick={() => setUser({ ...userState, isLoggedIn: false, user: {} })}
        fullWidth
        variant="contained"
        color="secondary"
      >
        Logout
        <ExitToApp color="primary" />
      </Button>
    </Container>
  );
};

export default Splash;
