import React from "react";
import FromSubscription from "./FormSubscription";

const NewSubscriptions = ({ onAddSubscription }) => {
  return (
    <>
      <FromSubscription onAddSubscription={onAddSubscription} />
    </>
  );
};

export default NewSubscriptions;
