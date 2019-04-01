import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import Carousel from './components/Carousel/Carousel';
import Row from './components/Row/Row';
import DatePicker from './components/DatePicker/DatePicker';
import CreativeCommonsImageSpinner from './components/CreativeCommonsImageSpinner/CreativeCommonsImageSpinner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      date: ""
    }
  }
  render() {
    return (
      <>
        <h1>Infinity Module</h1>
        <Modal isOpen={ this.state.isOpen } onClose={ () => this.setState({ isOpen: false }) }>
          <Modal.Title>My modal title</Modal.Title>
          <Modal.Body>My modal body</Modal.Body>
          <Modal.Footer>My modal footer</Modal.Footer>
        </Modal>

        <h4>Carousel</h4>
        
          <Carousel
          images={[
            "https://tse1.mm.bing.net/th?id=OIP.3QhhykNIL2TTbSb4-zuo_wHaEo&pid=Api",
            "https://tse1.mm.bing.net/th?id=OIP.aJiB2yrjvU5m8S5wTmBTHgHaEo&pid=Api",
            "https://tse2.mm.bing.net/th?id=OIP.whYid2jKN-8c3BUhtIoSTgHaEK&pid=Api",
            "https://ki.se/sites/default/files/styles/adaptive/public/2018/10/19/istock_host_autumn_fall_water.jpg?itok=j4g1ciLW"
          ]}
          size="large"/>
        
        <h4>Row</h4>
        <Row></Row>
        <h4>Date picker</h4>
        <DatePicker 
          onDatePick={ date => this.setState({ date }) }
          locale="en-EN"/>
          <h4>Creative commons image spinner</h4>
          <CreativeCommonsImageSpinner interval={ 3 } />
      </>
    );
  }
}

export default App;