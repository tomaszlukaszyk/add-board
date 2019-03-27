import React from "react";
import moment from "moment";

import Avatar from "./Avatar";

export default function Comment({ comment, profile }) {
  const { content, postedAt } = comment;
  const { firstName, lastName } = profile;
  return (
    <li className="collection-item avatar">
      <div className="circle">
        <Avatar profile={profile} />
      </div>
      <span className="title grey-text">{`${firstName} ${lastName}, ${moment(
        postedAt.toDate()
      ).calendar()}`}</span>
      <p>{content}</p>
    </li>
  );
}
