import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../App";

function ComponentF() {
  //   const user = useContext(UserContext);
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    The user is {user} & the channel name is {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
      {/* <h1>{user}</h1> */}
    </div>
  );
}

export default ComponentF;
