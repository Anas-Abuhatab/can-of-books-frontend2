import React from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';
import BookFormModal from './BookFormModal';


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

  
  handleSubmit=(e)=>{
    e.preventDefault();
    let config={
      method:"POST",
      baseURL:process.env.REACT_APP_BACKEND_URL,
      url:`/books`,
      data:{
        title:this.state.title,
        email:this.state.email,
        description:this.state.email,
        status:this.state.email,
        id:this.state._id
      }
    }
    axios(config).then(res=>{
      // console.log(this.state.books)
      this.setState({
        books:res.data
      })
      console.log(res.data)
    })
  }
  changeTitle=(e)=>{
    this.setState({ title:e.target.value})
  }
  changeEmail=(e)=>{
    this.setState({ email:e.target.value})
  }
  changeStatus=(e)=>{
    this.setState({ status:e.target.value})
  }
  changeDescription=(e)=>{
    this.setState({ description:e.target.value})
  }

 

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <BookFormModal handleSubmit={this.handleSubmit}
                       changeTitle={this.changeTitle}
                       changeEmail={this.changeEmail}
                       changeStatus={this.changeStatus}
                       changeDescription={this.changeDescription}
                       />


        {this.state.books.map((item, key) => {
                  return <Card style={{ width: '18rem' }}>
            <Card.Header>Book #{key + 1} Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Title: {item.title} </ListGroup.Item>
              <ListGroup.Item>Email: {item.email}</ListGroup.Item>
              <ListGroup.Item>Description: {item.description}</ListGroup.Item>
              <ListGroup.Item>Status: {item.status}</ListGroup.Item>
              <ListGroup.Item>ID: {item._id}</ListGroup.Item>
            </ListGroup>
            <br />
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
