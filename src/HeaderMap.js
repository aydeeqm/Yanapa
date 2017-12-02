import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';
import usuario from './img/usuario.png';
import './App.css';
import './Map.css';

import { NavLink } from 'react-router-dom'
class HeaderMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}
	render() {
		const { model } = this.props;
		const open = () => {
			this.setState({
				show: true
			})
		}
		const close = () => {
			this.setState({
				show: false
			})
		}
		return (
			<header id="mapa_header">
				<img className="img-responsive" id='usuario_logo' onClick={open} src={usuario} alt="" />
				<h1 className="conayus-map">YANAPA</h1>
				<div id="mySidenav" className="sidenav" style={{ width: this.state.show ? '190px' : 0 }}>
					<a href="javascript:void(0)" className="closebtn" onClick={close}>&times;</a>
					<div id="datos_usuario">
					<div><img className="img-fluid mama" src="https://s3.amazonaws.com/nutrifami/training/images/201733113129701.png" /></div>
						<NavLink to={"/momFeed"} className="btn btn-warning recomendation">Alimentate Mamá</NavLink>
						<NavLink to={"/babyFeed"} className="btn btn-warning recomendation">Alimentate Bebe </NavLink>
					</div>
				</div>
			</header>
		);
	}
}
export default HeaderMap;