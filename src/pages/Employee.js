export const Employee = (props) => {
  return props.employees.map((employee) => {
    return (
      <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{employee.phone}</td>
        <td>
          <button className="btn btn-warning">
            <i className="fa-solid fa-plus"></i>
          </button>{" "}
          <button className="btn btn-danger">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    );
  });
};
