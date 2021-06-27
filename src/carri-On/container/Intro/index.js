import React, { Component } from 'react';
import Button from '../../component/Button';
import {
    Image
} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import bgmain from '../../templates/img/images (18).jpg';
import {animateScroll as scroll} from 'react-scroll';
//import { Link } from 'react-router-dom';
//import { Route } from 'react-router';

export default class Intro extends Component {
    state = {
        height: 10,
    }
    componentWillMount() {
        this.setState({ height: window.innerHeight });
    }
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <Animated animationIn="pulse" animationOut="lightSpeedOut" animationInDelay={500} isVisible={ true }>
                <div style={ { height: this.state.height, backgroundImage: "url(" + bgmain + ")", overflow: 'hidden', backgroundSize: 'cover', paddingLeft: 10, paddingRight: 4 } }>
                    <div style={ { display: 'flex', flex: 1, paddingTop: 100, flexDirection: 'row' } }>
                        <div style={ { flex: 3 } }>
                        </div>
                        <div style={ { flex: 2, paddingRight: 15 } }>
                         
         <Button label={ 'View orders' } > 
         <table id="displaytable" style={{display: 'none', width: 100 , cellpadding:1, cellspacing:"0" ,border:"3"}}>
    <tr align="center">
      <td class="lbl">column1</td>
      <td class="lbl">column2</td>
      <td class="lbl">column3</td>
    </tr>
    <tr>
      <td align="center">1</td>
      <td align="center">2</td>
      <td align="center">33</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">5</td>
      <td align="center">6</td>
    </tr>
  </table>      
  </Button>
                        </div>
                        <div style={ { flex: 2 } }>
                            <Button label={ 'Make Order' }bsStyle="info" onClick={ () => scroll.scrollToBottom() } />
                        </div>
                    </div>
    
                    <div style={ { display: 'flex', flex: 1, flexDirection: 'row', paddingLeft: 40 } }>
                        <div style={ { flex: 1, paddingTop: 100, } }>
                            <div>
                                <Button label={ 'Admin Login' }bsStyle="info" onClick={ () => scroll.scrollToBottom()} />
                            </div>
                            <div style={ { paddingTop: 20 } }>
                                <Button label={ 'User Login' }bsStyle="info" onClick={ () => scroll.scrollToBottom()}  />
                            </div>
                        </div>
                        <div style={ { flex: 4, alignItems: 'center', justifyContent: 'center', paddingTop: 50 } }>
                            <Image src={ require('../../templates/img/deli.png') } alt="Carri-On" style={ { height: 400,color:'#fff' } } responsive/>
                        </div>
                    </div>
                    
                </div>
            </Animated>
        )
    }
}