import React, { Component } from 'react';
import './Home.css';
import {
    NavLink,
} from 'react-router-dom'

class Home extends Component {
	
    constructor (props) {
        super (props);
        this.state = {
        }
    }
    render () {
        const {model} = this.props;
            return (
                    <div id="with-div">
                        <div id="transparent-background">
                            <div id="divtransparencia">
                                <div className=" form first">
                                    <h2 className="conayus-home yanapafirst">YANAPA</h2>
                                    <h4 className="home-p">#Teayudamosaayudar</h4>
                                </div>
                                <section section-form>
                                    <NavLink to={"/signUp"} className="btn btn-lg btn-block btn-ingresar">Empezar</NavLink>
                                </section>
                                <div>
                                    <h5 className="home-p text-vida">Tu cuerpo es tu compañero de vida cuidalo escuchalo entiendelo.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
    }
}

export default Home;
