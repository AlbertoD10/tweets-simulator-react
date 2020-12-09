import React from "react";
import "./tweet.scss";
import { Card, CardContent } from "@material-ui/core";
import moment from "moment";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

export default function Tweet(props) {
  const {
    tweet: { name, tweet, time },
    index,
    deleteTweet
  } = props;
  console.log(tweet);

  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet-header">
          <h5>{name}</h5>
          <DeleteTwoToneIcon onClick={() => deleteTweet(index)} />
        </div>
        <div className="tweet-body">
          <p></p>
          {tweet}
        </div>
        <div className="tweet-date">
          {moment(time).format("DD/MM/YYYY HH:mm")}
        </div>
      </CardContent>
    </Card>
  );
}
