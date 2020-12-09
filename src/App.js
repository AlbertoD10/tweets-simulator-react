import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import { Container, Snackbar } from "@material-ui/core";
import { TWEETS_STORAGE } from "./utils/constants";
import ListTweets from "./components/ListTweets";

function App() {
  const [openSnack, setOpenSnack] = useState({
    open: false,
    text: null
  });

  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweet, setReloadTweet] = useState(false);

  useEffect(() => {
    const allTweetStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetStorage);
    setAllTweets(allTweetsArray);
    setReloadTweet(false);
  }, [reloadTweet]);

  const deleteTweet = index => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweet(true);
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <SendTweet setOpenSnack={setOpenSnack} allTweets={allTweets} />
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        autoHideDuration={2000}
        open={openSnack.open}
        message={openSnack.text}
        onClose={() =>
          setOpenSnack({
            //Aqui modifico el valor del open para poder cerrar el mensaje de advertencia
            ...openSnack,
            open: false
          })
        }
      />
    </Container>
  );
}

export default App;
