import React from 'react';
import axios from 'axios';
import {Card,ListGroup}from 'react-bootstrap'




class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      title: "",
      email: "",
      description: "",
      status: "",
      id: ""
    }
  }
  
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/seedData`).then(res => {
      this.setState({ books: res.data })
    })

  }


  // arr2 = this.state.books.map(item => {
  //   console.log(item)

  // })


  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
{this.state.books.map((item,key) => {
        //  this.setState({
        //   title: item.title,
        //   email: item.email,
        //   description: item.description,
        //   status: item.status,
        //   id: item._id
        // })
      
        return  <Card style={{ width: '18rem' }}>
          <Card.Header>Book #{key+1} Details</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Title: {item.title} </ListGroup.Item>
            <ListGroup.Item>Email: {item.email}</ListGroup.Item>
            <ListGroup.Item>Description: {item.description}</ListGroup.Item>
            <ListGroup.Item>Status: {item.status}</ListGroup.Item>
            <ListGroup.Item>ID: {item._id}</ListGroup.Item>
          </ListGroup>
            <br/>
        </Card>
})
  }
        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}

      </>
    )
  }
}

export default BestBooks;
