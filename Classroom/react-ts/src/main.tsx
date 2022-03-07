import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

interface IProduct{
  name: string,
  age: number,
  status: boolean,
  children: object[]
}

const person: IProduct = {
  name: "Dat",
  age: 20,
  status: true,
  children: [
    { id: "1", name: "Tung"},
    { id: "2", name: "Kien"},
  ]
}

const showAge = (age: number) => <p>Tuoi cua ban la: {age}</p>

ReactDOM.render(<div>
  <p>Ten: {person.name} </p>
  <p>Tuoi: {person.age} </p>
  <p>{person.status ? "Da ket hon" : "Chua ket hon"}</p>
  <ul>
    {person.children.map(child => <li>
      {child.name}
    </li>)}
  </ul>
  function: { showAge(person.age) }
</div>, document.querySelector('#root'));
