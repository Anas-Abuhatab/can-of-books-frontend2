import React, { Component } from 'react';
import { Card, ListGroup ,Button} from 'react-bootstrap';

 class render extends Component {
    render() {
        return (
          <>
            <Card style={{ width: '18rem' }}>
            <Card.Header>Book #{this.props.key2 +1}/{this.props.length} Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Title: {this.props.title} </ListGroup.Item>
              <ListGroup.Item>Email: {this.props.email}</ListGroup.Item>
              <ListGroup.Item>Description: {this.props.description}</ListGroup.Item>
              <ListGroup.Item>Status: {this.props.status}</ListGroup.Item>
              
              <ListGroup.Item>ID: {this.props.id}</ListGroup.Item>
            </ListGroup>
            <br />
                 <Button variant="secondary" onClick={()=>{this.props.Delete(this.props.id)}}>
                Delete
                </Button> 
          </Card>
                </>
        )
    }
}

export default render
