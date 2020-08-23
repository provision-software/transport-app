import React from "react";

import PropTypes from "prop-types";

import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

function UserCard(props) {
  const user = props.user;

  return (
    <Card>
      <CardHeader
        title={"Welcome " + `${user.firstName} ${user.lastName}`}
        subheader={user.username}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          This is a short description about the user.
        </Typography>
      </CardContent>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
