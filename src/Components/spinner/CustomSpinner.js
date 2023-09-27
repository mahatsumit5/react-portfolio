import Spinner from "react-bootstrap/Spinner";

export const CustomSpinner = () => {
  return (
    <Spinner animation="border" role="status" className="checkbox">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
