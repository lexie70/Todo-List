import React ,{useState} from "react";



//create your first component
const Home = () => {
	const [task,setTask]= useState("")
	const [newTask,setNewTask]= useState("")
	
	return (
		<div className="d-flex justify-content-center">
		<form>
		<div className="mb-3">
		  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
		  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
		</div>
		<div className="mb-3">
		  <input type="password" className="form-control" id="exampleInputPassword1"/>
		</div>
		<div className="mb-3 form-check">
		  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
		  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
		</div>
		<button type="submit" className="btn btn-primary">Submit</button>
	  </form>
	  </div>
	);
};

export default Home;
