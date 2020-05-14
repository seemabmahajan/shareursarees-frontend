import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

const EditSari=(props)=>(
			<Modal show={props.showEdit} onHide={props.handleEditClose}>
				<form id="editSari" className="row" onSubmit={props.handleEditSubmit}>
		        <div className="col-md-6 offset-md-3">
		          <h4 className="mb-4">Edit Sari</h4>
		          <div className="form-group">
		            <label for="catagory">Catagory</label>
		            <input id="edit_catagory" type="text" name="sari_catagory" className="form-control form-control-lg" onChange={props.handleChange} value={props.sari_catagory} />
		          </div>
		          <div className="form-group">
		            <label for="description">Description</label>
		            <textarea id="edit_description" name="post_description" className="form-control form-control-lg" rows="10" onChange={props.handleChange} value={props.sari_catagory}></textarea>
		          </div>
		          <button type="submit" className="btn btn-primary float-right">Edit Sari</button>
		        </div>
		      </form>


			</Modal>

			)
export default EditSari;