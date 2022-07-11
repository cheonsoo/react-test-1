import React from "react";

function User({ value }) {
  console.log("### User");
  return <div>User: {value}</div>;
}

// export default User;
export default React.memo(User);
