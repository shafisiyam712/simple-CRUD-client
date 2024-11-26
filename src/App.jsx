
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const navigate=useNavigate();
  const handleForm=(e)=>{
    e.preventDefault();
    const form=e.target
    const name=form.name.value
    const email=form.email.value
    const user={name,email}
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        alert('Users added successfully');
        form.reset();
        navigate('/users')
      }
    })
  }

  return (
    <>
     
      <h1>Simple Crud </h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        
         <input type="submit" value="Add User" />
        
       
      </form>
      <br />
      <button><Link to='/users'>Users</Link></button>
      
    </>
  )
}

export default App
