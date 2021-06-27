import React, { Component } from 'react';
import {
    Form,
    FormControl,
    ControlLabel,
    FormGroup,
} from 'react-bootstrap';
import Button from '../../component/Button';
import { Animated } from 'react-animated-css';
import {animateScroll as scroll} from 'react-scroll';

export default class ContactUs extends Component {
    render() {
        var { visibility } = this.props;
        return (
            <Animated
                animationIn="fadeInDownBig"
                animationOut="zoomOutDown"
                animationInDelay={ 800 }
                isVisible={ visibility }
            >
                <div>
                    <div style={ { paddingBottom: 20, fontWeight: 'bold', fontSize: 24 } }>
                        USER/ADMIN LOGIN
                    </div>
                        <Form horizontal>
                            Admin Login
                            <FormGroup  >
                                <ControlLabel>ID NO</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="#####"
                                />
                            </FormGroup>
                            <FormGroup >
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="abc@example.com" />
                            </FormGroup>
                            USER LOGIN
                            <FormGroup >
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="ew@u.gmail.com" />
                            </FormGroup>
    
                            <FormGroup >
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="123444" />
                            </FormGroup>
    
                            
                        </Form>
                        <Button label={ 'LOGIN' }bsStyle="info" onClick={ () => scroll.scrollToTop() } />
                </div>
            </Animated>
        )
    }
}