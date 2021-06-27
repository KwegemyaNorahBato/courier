import React, { Component } from 'react';
import {ResponsiveEmbed} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

export default class AppStatus extends Component{
    state = {
        height: 10,
        width: 10,
    }
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }
    shouldComponentUpdate() {
        return false
    }
    render(){
        return(
           <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div style={ { display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: this.state.height  } }>
                        <div style={ { width: this.state.width * .8, height: this.state.height * .5,marginBottom:180 } } >
                            <ResponsiveEmbed a16by9 >
                                <embed type="image/svg+xml" src="" />
                            </ResponsiveEmbed>
                        </div>
                    </div>
                </MediaQuery>

                <MediaQuery query="(max-device-width: 1224px)">
                    <div style={ { display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: this.state.height * .4 } }>
                        <div style={ { width: this.state.width * .8, height: this.state.height * .3, } } >
                            <ResponsiveEmbed a16by9 >
                                <embed type="image/svg+xml" src="" />
                            </ResponsiveEmbed>
                        </div>
                    </div>
                </MediaQuery>
           </div>
        )
    }
}