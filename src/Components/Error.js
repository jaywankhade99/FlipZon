import react from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Opps, we got error</h1>
      <h2>Please try again later</h2>
      <div>{err.status}</div>
    </>
  );
};
export default Error;
