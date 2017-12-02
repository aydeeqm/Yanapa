import React from 'react';
import data from './data/Data';

class Model {
	constructor () {
		this.notify = null;
		this.userInfo = {
			name: null,
			surname : null,
			email : null,
		}
		this.properties = data.properties;
		this.activeProperty = data.properties[0]
		this.filteredProperties = [];
		this.isFiltering = false;
		this.isRouting = false;
		this.targetPlace = null;
		console.log("filteredProperties",this.filteredProperties);
	}
	
	setUserInfo (info) {
		this.userInfo = info;
		this.notify();
	}

	subscribe (render) {
		this.notify = render;
	}
	setActiveProperty (property) {
		this.activeProperty = property;
		this.notify();
	}

	setTarget (targetPlace) {
		this.targetPlace  = targetPlace;
		this.notify();
	}
	//Fitro severo
	setFilter (param) {
		this.isFiltering = true;
		console.log ('before filter:', this.properties.length);
		this.filteredProperties = this.properties.filter( (item) =>  item.porcentaje > 40);
		console.log ('after filter:', this.filteredProperties);
		this.notify();
	}
	//Filtro moderado
	setFilterMo (param) {
		this.isFiltering = true;
		console.log ('before filter:', this.properties.length);
		this.filteredProperties = this.properties.filter( (item) =>   item.porcentaje < 40);		
		console.log ('after filter:', this.filteredProperties.length);	
	
		this.notify();
	}
	//filtro All
	setFilterAll (param) {
		this.isFiltering = true;
		console.log ('before filter:', this.properties.length);
		this.filteredProperties = this.properties;			
	
		this.notify();
	}
	//filtro leve
	setFilterAceptable (param) {
		this.isFiltering = true;
		console.log ('before filter:', this.properties.length);
		this.filteredProperties = this.properties.filter( (item) =>   item.porcentaje <5);;			
	
		this.notify();
	}

	setIsRouting ( ) {
		this.isRouting = true;
		this.notify();
	}
}

export default Model;
