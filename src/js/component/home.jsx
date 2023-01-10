import React ,{useState} from "react";



//create your first component
const Home = () => {
	const [todo,setTodo]= useState("")
	const [list,setList]= useState([])
// preventDefault ignora comportamiento de etiquetas predeterminadas
	function submit(e){
     e.preventDefault()
	 if (todo === "") {
		alert(add)
		
	 }else{
		setList([...list, todo]);
		setTodo("");
	 }
	}
	return (
		<div>
			<h1 className="d-flex justify-content-center">todos</h1>
			{/*div contenedor de form */}
		<div className="d-flex justify-content-center">	
		<form onSubmit={submit}>
	    <div className="mb-3">
		  {/*  input */}
		  <input className="form-control" placeholder="What needs to be done?"  onChange={(e)=> setTodo (e.target.value)}/>
          
		</div>
		<button type="submit" className="btn btn-primary">Submit</button>
	  </form>
    </div> 
</div>   
	);
};

export default Home;
