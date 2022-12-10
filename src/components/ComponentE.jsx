import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../App";
import ComponentF from "./ComponentF";

function ComponentE() {
  const name = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {/* <ComponentF /> */}
      {name} - {channel}
    </div>
  );
}

export default ComponentE;
