import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class BookFormModal extends Component {
    render() {
        return (
            <Form style={{width:300}} onSubmit={this.props.handleSubmit}>
                <Form.Group  className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" placeholder="Enter Status" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" />
                </Form.Group>

               

                <Button variant="primary" type="submit" >
                Add Book
                </Button>
                <Form.Label>Description</Form.Label>
            </Form>
        )
    }
}

export default BookFormModal
