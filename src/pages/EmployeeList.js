import { Employee } from "./Employee";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddForm } from "./AddForm";

export const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <div className="container bg-light mt-5 rounded-1">
      <div className="row bg-dark">
        <div className="col d-flex justify-content-between p-3">
          <h3 className="text-white">Manage Employees</h3>
          <button onClick={handleShow} className="btn btn-success">
            <i className="fa-solid fa-circle-plus me-1"></i>Add New Employee
          </button>
        </div>
      </div>
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Adress</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees} />
        </tbody>
      </table>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddForm />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleShow} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
