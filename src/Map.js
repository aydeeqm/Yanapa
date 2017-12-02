import React, {Component} from 'react';
import GoogleMaps from './GoogleMaps';
import HeaderMap from './HeaderMap';
import './Map.css'

const DataMap = ({model}) => {
	const state = {
		properties: model.properties,
		activeProperty: model.activeProperty,
		filterIsVisible: false,
		filteredProperties: model.filteredProperties,
		isFiltering: model.isFiltering,
		isRouting: model.isRouting
	};
	const {
		properties,
		activeProperty,
		filterIsVisible,
		filteredProperties,
		isFiltering,
		isRouting
	} = state;
	const propertiesList = isFiltering ? filteredProperties : properties;

	const setActiveProperty = (property, scroll) => {
		model.setActiveProperty(property);
		const {index} = property;
		// Scroll to active property
		if (scroll) {
			const target = `#card-${index}`;
		}
	}
	const onPathBntClick = () => {
		model.setFilter(10);
		
	}
	const onPathMoBntClick = () => {
		
		model.setFilterMo(10);
	}

	const onPathAllBntClick = () => {
		
		model.setFilterAll(10);
	}

	const onPathleveBntClick = () => {
		
		model.setFilterAceptable(10);
	}

	return (<div>
		<HeaderMap />
		<h1 className="conayus-name">YANAPA</h1>
		<div className="filtro">
			<button id="all_point" className="btn btn-info anemia" onClick={onPathAllBntClick}>Total</button>
			<button id="point_severo" className="btn btn-success anemia" onClick={onPathleveBntClick}>Leve</button>
			<button id="point_moderada" className="btn btn-warning anemia" onClick={onPathMoBntClick}>Moderada</button>
			<button id="point_severo" className="btn btn-danger anemia" onClick={onPathBntClick}>Severa</button>
		</div>
		<GoogleMaps
			model = {model}
			properties = {properties}
			activeProperty={activeProperty}
			setActiveProperty={setActiveProperty}
			filteredProperties={filteredProperties}
			isFiltering={isFiltering}
			isRouting={isRouting}
		/>
	</div>);
}

export default DataMap;