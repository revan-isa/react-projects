import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Thomas Hardy",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
    {
      id: uuidv4(),
      name: "Dominique Perrier",
      email: "dominiqueperrier@mail.com",
      address: "Obere Str. 57, Berlin, Germany",
      phone: "(313) 555-5735",
    },
  ]);

  const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
