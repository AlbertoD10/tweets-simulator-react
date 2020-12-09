import React from "react";
import { Grid } from "@material-ui/core";
import "./listTweets.scss";
import "../Tweet";
import Tweet from "../Tweet";

export default function ListTweets(props) {
  const { allTweets, deleteTweet } = props;

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No hay Tweets para mostrar</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={2} className="list-tweets">
      {allTweets.map((tweet, index) => {
        return (
          <Grid key={index} item xs={4}>
            <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
          </Grid>
        );
      })}
    </Grid>
  );
}
