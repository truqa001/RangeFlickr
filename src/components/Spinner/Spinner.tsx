import { Spinner as BootstrapSpinner } from "react-bootstrap";

export const Spinner = () => {
  return (
    <BootstrapSpinner animation="border" role="status" style={{ margin: 15 }}>
      <span className="visually-hidden">Loading...</span>
    </BootstrapSpinner>
  );
};
