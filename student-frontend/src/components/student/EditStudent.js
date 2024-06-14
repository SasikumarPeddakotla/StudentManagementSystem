import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditStudent = () => {
  
    let navigate = useNavigate();

    const {id} = useParams();


  const [student, setStudent] = useState({
      firstname:'',
      lastname:'',
      email:'',
      department:''
  });

  const {firstname,lastname,email,department} = student;

    useEffect(() => {
        loadStudent();
    },[]);

    const loadStudent = async() => {
        const result = await axios.get(`http://localhost:8082/students/student/${id}`);
        setStudent(result.data);
    }

  const handleInputChange = (e) => {
      setStudent({...student,[e.target.name] : e.target.value})
  }

  const editStudent = async(e) => {
      e.preventDefault();
      try {
          await axios.put(`http://localhost:8082/students/update/${id}`,student);
          navigate("/view-students");
      }
      catch(error){
          console.error("An error occured : "+error)
      }
  }

return (
  <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
    <h2 className='mt-3 mb-5'>Edit Student</h2>
    <form onSubmit={(e)=>editStudent(e)}>
      <div className='input-group mb-4'>
          <label className='input-group-text' htmlFor='firstname'><strong>First Name</strong></label>
          <input className='form-control col-sm-6' type='text' name="firstname" id="firstname" required value={firstname} onChange={(e)=>handleInputChange(e)}/>
      </div>
      <div className='input-group mb-4'>
          <label className='input-group-text' htmlFor='lastname'><strong>Last Name</strong></label>
          <input className='form-control col-sm-6' type='text' name="lastname" id="lastname" required value={lastname} onChange={(e)=>handleInputChange(e)}/>
      </div>
      <div className='input-group mb-4'>
          <label className='input-group-text' htmlFor='email'><strong>Email</strong></label>
          <input className='form-control col-sm-6' type='email' name="email" id="email" required value={email} onChange={(e)=>handleInputChange(e)}/>
      </div>
      <div className='input-group mb-4'>
          <label className='input-group-text' htmlFor='department'><strong>Department</strong></label>
          <input className='form-control col-sm-6' type='text' name="department" id="department" required value={department} onChange={(e)=>handleInputChange(e)}/>
      </div>

      <div className='row mb-5 justify-content-center'>
          <div className='col-sm-2 d-flex justify-content-center'>
              <button type='submit' className='btn btn-outline-success btn-md'>Save</button>
          </div>
          <div className='col-sm-2 d-flex justify-content-center'>
              <Link to={"/view-students"} type='submit' className='btn btn-outline-danger btn-md'>Cancel</Link>
          </div>
      </div>
    </form>
  </div>
)
}

export default EditStudent
