import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";

export const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(
      e.target.name.value,
      e.target.email.value,
      e.target.adress.value,
      e.target.phone.value
    );

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control name="adress" type="text" placeholder="Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" type="text" placeholder="Phone" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add New Employee
      </Button>
    </Form>
  );
};
