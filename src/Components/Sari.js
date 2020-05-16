import React, {useState} from 'react';
import './sari.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';

export default function Sari(props) {

	const [smShow, setSmShow] = useState(false);

    return (
        
		
		// <div class="container">
		// 	<div class="card" className= "specefic" style={{width: 25+ 'em'}}>
		// 		<img src={props.sari.image} class="card-img-top imgspecs" alt={props.sari.catagory}/>
		// 		<div class="card-body">
		// 			<h5 class="card-title"> Fabric: {props.sari.catagory}</h5>
		// 			<p class="card-text">{props.sari.description}</p>
					
		// 		</div>
		// 	</div>
		// </div>	
		

		// <div class="container">
		// 	<div className="row" id="#"> 
		// 	  <div class="col-md"> 
		// 	    <img src={props.sari.image} class="img-thumbnail" alt={props.sari.catagory} /> 
		// 	  </div> 
			  
		// 	  <div class="col-md">
		// 		   <h5>{props.sari.description}</h5>
		// 	 </div> 
		// 		    <div class="col-md">
		// 			     <h2>{props.sari.catagory}</h2> 
		// 				 {props.sari.user && (  <h3>{props.sari.user.phone} </h3>
		// 				)}
		// 			</div> 
		// 	</div> 
		// </div>
<div>
		
			  
			
		  


		<Card className ="specefic" style={{ width: '20rem' }}>
				<Card.Img variant="top" className="imgspecs" src={props.sari.image} />
			<Card.Body>
					<Card.Title>Fabric: {props.sari.catagory}</Card.Title>
				<Card.Text>
						{props.sari.description}
				</Card.Text>
				

				<div>
				<Button variant="dark" onClick={() => setSmShow(true)}>Reserve</Button>{' '}
				
				<Modal
				  size="sm"
				  show={smShow}
				  onHide={() => setSmShow(false)}
				  aria-labelledby="example-modal-sizes-title-sm"
				  centered
				  

				>
				  <Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-sm" className="modTitle">
					  <h6>This sari belongs to:</h6>
					</Modal.Title>
				  </Modal.Header>
				  <Modal.Body><div class="col-sm  colMod ">
					     
		 				 {props.sari.user && ( <div> <h6>{props.sari.user.name} </h6>
						  <h7>Please call: {props.sari.user.phone}</h7>
						  <p>email: {props.sari.user.email}</p></div>
		 				)}
					</div> </Modal.Body>
				</Modal>
				
			  </div>
			</Card.Body>
		</Card>

</div>

		

    )   
}
