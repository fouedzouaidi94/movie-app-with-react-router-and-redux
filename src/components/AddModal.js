import { Button, Modal } from "react-bootstrap";
import React, { Component } from "react";
import Rating from "./RatingModal";
import { connect } from "react-redux";
import { addMovie, editMovie } from "../actions/actionMovie";

class AddModal extends Component {
  state = {
    nameFilm: "",
    imgURL: "",
    Rate: 0,
    showModal:false,
  };



  AddMovie = () => {
    this.state.imgURL &&
      this.state.nameFilm &&
      this.props.addMovie(
       {id:Math.random(),
        img:this.state.imgURL,
        name:this.state.nameFilm,
        rate:this.state.Rate+1}
      ) &&
      this.setState({
        nameFilm:"",
        Rate:0,
        imgURL:'',
        showModal:false})
  };
  handleEdit=()=>{
    this.props.editMovie(this.props.film.id,
                        this.state.imgURL,
                        this.state.nameFilm,
                        this.state.Rate)
    this.setState({
      showModal:false
    })
  }
initialEditModal=()=>{
  this.setState({
    showModal:true,
    nameFilm: this.props.film.name,
    imgURL:this.props.film.img,
    Rate: this.props.film.rate,
  })
}
  render() {
    return (
      <div>
        {this.props.modalType==="Edit"?
        <Button variant="outline-warning" onClick={this.initialEditModal}> Edit </Button>
        :<span className="add-btn" onClick={()=>this.setState({showModal:true})}>+</span>
        }

        <Modal show={this.state.showModal}>
          <Modal.Header  style={{background: "#343a40", color:'white'}}>{this.props.modalType!=="Edit"? 'Add Movie' : 'Edit Movie' }</Modal.Header>
          <Modal.Body>
            <label> Movie Name : </label>
            <br />
            <input
              value={this.state.nameFilm}
              type="text"
              onChange={e => this.setState({ nameFilm: e.target.value })}
            ></input>
            <br />
            <label> Image URL : </label>
            <br />
            <input
              value={this.state.imgURL}
              type="text"
              onChange={e => this.setState({ imgURL: e.target.value })}
            ></input>
            <br />
            <br />
            <label>Movie Rating : </label>
            <Rating
              rate={this.state.Rate}
              changeRate={value => this.setState({ Rate: value })}
              size={"40px"}
            />
          </Modal.Body>
          <Modal.Footer>
            {this.props.modalType!=='Edit'?<>
            <Button onClick={()=>this.setState({showModal:false})}> Close</Button>
            <Button onClick={this.AddMovie}>Add</Button></>
            :<><button type="button" className="btn btn-outline-danger" onClick={()=>this.setState({showModal:false})}>Cancel</button>
            <button type="button" className="btn btn-outline-success" onClick={this.handleEdit}>Confirm</button>
            </>}
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return { addMovie: (payload) => dispatch(addMovie(payload)),
           editMovie:(id,img,name,rate)=> dispatch(editMovie(id,img,name,rate))
  };
};
export default connect(null, mapDispatchToProps)(AddModal);
