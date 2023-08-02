import { Person } from './Person';
import { Employee } from "./Employee";
import { Client } from "./Client";

const person = new Person('Jaime', 'Palacios', 30);
console.log(person.toString());

const employee = new Employee('Sara', 'Perez', 33, 3000);
console.log(employee.toString());

  const client = new Client('Diego', 'Perez', 14, new Date());
 console.log(client.toString());