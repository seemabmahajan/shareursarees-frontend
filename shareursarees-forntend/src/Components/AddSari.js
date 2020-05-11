import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

	const AddSari=(props)=>(
			<Modal show={props.showNew} onHide={props.handleAddClose}>
				<form id="newSari" className="row" onSubmit={props.handleAddSariSubmit}>
		        <div className="col-md-6 offset-md-3">
		          <h4 className="mb-4">New Saree</h4>
		          <div className="form-group">
		            <label for="catagory">Category</label>
		            <input id="catagory" type="text" name="catagory" className="form-control form-control-lg" onChange={props.handleChange} />
		          </div>
		          <div className="form-group">
		            <label for="description">Description</label>
		            <textarea id="description" name="description" className="form-control form-control-lg" rows="10" onChange={props.handleChange} ></textarea>
		          </div>
				  <div className="form-group">
		            <label for="image">Upload Image</label>
		            <input id="image" name="image" className="form-control form-control-lg" rows="10" onChange={props.handleChange} />
		          </div>
				  
		          <button type="submit" className="btn btn-primary float-right">Add New Sari</button>
		        </div>
		      </form>


			</Modal>


			)

export default AddSari;