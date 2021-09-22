import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class BookFormModal extends Component {
    render() {
        return (
            <Form style={{width:300}} >
                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" onChange={this.props.changeTitle}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.props.changeEmail}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" placeholder="Enter Status" onChange={this.props.changeStatus}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" onChange={this.props.changeDescription}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.props.handleSubmit}>
                Add Book
                </Button>
            </Form>
        )
    }
}

export default BookFormModal
