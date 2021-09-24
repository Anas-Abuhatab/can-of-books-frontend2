import React from 'react';
import axios from 'axios';
// import { Card, ListGroup } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import Render from './Render';
// import Button from '@restart/ui/esm/Button';
// import cors from ''


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

  handleDelete = async(id) => {

    let config = {
      method: "DELETE",
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/books/${id}`
    }
    await axios(config).then(res => {
      this.setState({
       books: res.data
     })
   })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

       this.setState({
      title: e.target[0].value,
      email: e.target[1].value,
      status: e.target[2].value,
      description: e.target[3].value,
      
    })
     let config = {
      method: "POST",
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/books`,
      data: {
        title: this.state.title,
        email: this.state.email,
        description: this.state.description,
        status: this.state.status,
        id: this.state._id
      }
    }
    await axios(config).then(res => {
       this.setState({
        books: res.data
      })
    })
  }





  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <BookFormModal handleSubmit={this.handleSubmit}
         
          id={this.state.id}
        />


        {this.state.books.map((item, key) => {
          return <Render
            title={item.title}
            email={item.email}
            description={item.description}
            status={item.status}
            key2={key}
            length={this.state.books.length} 
            id={item._id}
            Delete={this.handleDelete}/>
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
