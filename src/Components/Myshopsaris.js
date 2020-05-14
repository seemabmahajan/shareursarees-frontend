import React from 'react';
import './sari.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SariModel from '../models/sari';



export default function Myshopsaris(props) {
   
    return (
        <div>
            <Card className ="specefic" style={{ width: '20rem' }}>
		        <Card.Img variant="top" className="imgspecs" src={props.sari.image} />
		    <Card.Body>
			<Card.Title>Fabric: {props.sari.catagory}</Card.Title>
			<Card.Text>
					{props.sari.description}
			</Card.Text>
			<div class="text-right">
            <Button variant="dark">EDIT</Button>{'                                        '}
            <Button id="deleteBtn" type="button" variant="danger " onClick={ ( ) => props.handleDelete(props.sari)}>DELETE</Button>

            </div>
		</Card.Body>
		</Card>


            
        </div>
    )
}


