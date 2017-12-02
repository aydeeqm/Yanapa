import React from 'react';
import MarkersService from "./services/MarkersService";

const loadMaps = (cb) => {
    // window.google.maps script loading garbage
    const KEY = 'AIzaSyCsIUMjCPmZCK_CrP-7mTXPBQRZMNeYaU4'
    const URL = `https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=_mapsLoaded&libraries=places`
    window._mapsLoaded = cb
    const script = document.createElement('script')
    script.src = URL
    document.body.appendChild(script)

}
let icons = [{
        // green aceptable
        url: 'http://www.jambajuice.com/images/www/tempIMGs/icn_marker.png',
        size: new window.google.maps.Size(20, 55),
        // The origin for this image is (0, 0).
        origin: new window.google.maps.Point(0, -15),
        // The anchor for this image is the base of the cross at (11, 52).
        anchor: new window.google.maps.Point(11, 52),
    },
    {
        // yellow leve
        url: 'https://www.fpx.com/hubfs/_Success/_Images/Icons/location-map.png?t=1507908179820',
        size: new window.google.maps.Size(20, 55),
        // The origin for this image is (0, 0).
        origin: new window.google.maps.Point(0, -15),
        // The anchor for this image is the base of the cross at (11, 52).
        anchor: new window.google.maps.Point(11, 52),
    },
    {
        // orange moderada
        url: 'http://www.welcomecottages.com/assets/propdetails-map-indicator.png',
        size: new window.google.maps.Size(40, 55),
        // The origin for this image is (0, 0).
        origin: new window.google.maps.Point(0, 0),
        // The anchor for this image is the base of the cross at (11, 52).
        anchor: new window.google.maps.Point(11, 52),
    },
    {
        // red severa
        url: 'https://content.library.utoronto.ca/common/css/icons/map-pin-icon.png',
        size: new window.google.maps.Size(40, 55),
        // The origin for this image is (0, 0).
        origin: new window.google.maps.Point(0, 0),
        // The anchor for this image is the base of the cross at (11, 52).
        anchor: new window.google.maps.Point(11, 52),
    }
];

 class GoogleMaps extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			markers: [],
		};
		this.autocompleteDestino = null;
	}

	componentWillMount() {

		var self = this;

		if (!window.google) {
			loadMaps(() => {
				self.forceUpdate();
				console.log ('_mapsLoaded', window.google);
			})
		}
		
	}

	componentDidMount() {
		const { properties, activeProperty } = this.props;
		const { latitude, longitude } = activeProperty;
		var self = this;

		this.map = new window.google.maps.Map(this.refs.map, {
			center: { lat: latitude, lng: longitude },
			zoom: 10,
			mapTypeControl: false
		});

		this.directionsService = new window.google.maps.DirectionsService;
		this.directionsDisplay = new window.google.maps.DirectionsRenderer;
		this.directionsDisplay.setMap(this.map);

		MarkersService.getMarkers(function(err, data){
			console.log("MarkersService.getMarkers() :", err, data);
			self.createMarkers(properties, data);

		});
	}

	showInfoWindow(index) {
		const { markers } = this.state;

		markers[index] && markers[index].iw.open(this.map, markers[index]);
	}

	componentWillReceiveProps(nextProps) {
		const { activeProperty, filteredProperties, isFiltering } = nextProps;
		const { index } = activeProperty;

		// Hide all the other info boxes
		this.hideAll();

		// SHow info window of new active property
		if (isFiltering && filteredProperties.length === 0) {
			this.hideAll();
		} else {
			this.hideAll();
			this.showInfoWindow(index);
		}
	}

	componentDidUpdate() {
		const { filteredProperties, isFiltering, isRouting } = this.props;
		const { markers } = this.state;

		if (markers) {
			markers.forEach((marker) => {
				const { property } = marker; // Return associated property
				if (property){
					if (isFiltering) {
						// show markers of filtered properties and hide other markers
						if (filteredProperties.includes(property)) {
							markers[property.index].setVisible(true);
						} else {
							// Hide all the other markers
							markers[property.index].setVisible(false);
						}
					} else {
						// show all markers
						markers[property.index].setVisible(true);
					}
				}
			});
		}
	}
	 createMarkers(properties, data) {
		 const { setActiveProperty, activeProperty } = this.props;
		 const activePropertyIndex = activeProperty.index;
		 const { markers } = this.state;

		 var self = this;

		 console.log("propertis:", properties);
		 console.log('arrayDatas:', data);
		 
		properties.map((property, id) => {
				const { latitude, longitude, index, address } = property;

				//recover data from web server
				let provincia =  data[0].provincia;
				let place=data[0].distritos[id].nombre;
				let age=data[0].distritos[id].edad;
				let evaluate=data[0].distritos[id].Evaluados;
				let leve=data[0].distritos[id].leve;
				let moderada=data[0].distritos[id].moderada;
				let severa=data[0].distritos[id].severa;
				let percent=data[0].distritos[id].porcentaje;
				
				parseInt(percent);
				
				
				const iw = new window.google.maps.InfoWindow({
					
				   content: `<div><h5>${provincia}</h5><h6>Distrito: ${place}</h6><ul classname="points"><li><b>${age}</b></li><li>Total de evaluados: <b>${evaluate}</b></li><li><img src="http://www.uam.es/StaticFiles/UniversidadAutonomaMadrid//img/punto_verde.png"/> Anemia Leve: <b>${leve}</b></li><li><img src="http://www.gedhosa.es/wp-content/themes/volts/images/puntoAmarillo.png"/> Anemia Moderada: <b>${moderada}</b></li><li><img src="http://www.gedhosa.es/wp-content/themes/volts/images/puntoRojo.png"/> Anemia Severa: <b>${severa}</b></li><li>Promedio: <b>${percent+"%"}</b></li></ul></div>`,
		
				});

			 this.marker = new window.google.maps.Marker({
				 position: { lat: latitude, lng: longitude },
				 map: this.map,
				 label: {
					 color: '#56378a',
					 //text: `${index + 1}`,
				 },								
				icon:(percent<=5)?icons[0]:(percent<=5 && percent<20)?icons[1]:(percent>=20 && percent<40?icons[2]:(percent>40?icons[3]:"de")),			
				 property,		
				
			 });

			 this.marker.iw = iw;

			 this.marker.addListener('click', () => {
				 // Hide all markers
				 this.hideAll();
				 // Set active property, scroll to active property in list
				 setActiveProperty(property, true);
			 });

			 // Push marker on to state
			 markers.push(this.marker);

			 this.showInfoWindow(activePropertyIndex);
		 });
	 }

	hideAll() {
		const { markers } = this.state;

		markers.forEach((marker) => {
			marker.iw.close();
		});
	}

	render() {
		return (
			<div className="mapContainer">
				<div id="map" ref="map"></div>
			</div>
        );
    }
}

export default GoogleMaps;