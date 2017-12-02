import React, { Component } from 'react';
import './Feed.css';
import { NavLink} from 'react-router-dom'

// Component of health food recommendation
class BabyFeed extends Component {
		constructor (props) {
			super (props);
			this.state = {
			}
		}
		render () {
      const {model} = this.props;

      var images =  [];

      for(var i=1; i<=24; i++){
        images.push(
          <img src={"/images/" + i + "b.PNG"} />
        )
      }
    return (
        <div className="container text-center momFeed">
                <div id="transparent-background">

          <div className="btnVolver">
			      <NavLink to="/map"><i className="fa fa-angle-left backend" aria-hidden="true"></i>{<back/>}</NavLink>
		      </div>
          <h1>Alimentación del Bebé</h1>
          <h3 className="subtitulo">Con estos alimentos tú y tu bebé estarán sanos y fuertes</h3>
          

          <div id="background-img"><img className="img-fluid imgNutrifami" src="https://s3.amazonaws.com/nutrifami/training/images/201733113055758.png" /></div>
              <div id="transparent-background "  id="backgrount-mas" className="Hierro proporciones">
                <h3>Comidas espesas 5 veces al dia</h3>
                <p>papillas, Zapallo con lentejitas y papitas, papas con frejoles y zanahoria</p>
                <p>a cocción, picadas en rodajas o cuadradas</p>
              </div>
              <div id="transparent-background" id="backgrount-mas" className="Hierro">
                <h3>Incluye en tus comidas alimentos de origen animal ricos en hierro</h3>
                <p><label>Higado</label><label>Pescado</label><label>Sangrecita</label><label>Riñon</label><label>Bazo</label></p>
                <p><label>Lentejas</label><label>Habas</label><label>Frejol</label></p>
                <p className="p2"><strong>5 cucharadas por c/u</strong></p>
              </div>
              <div id="transparent-background" id="backgrount-mas" className="Verduras">
                <h3>Come verduras y frutas de colores cada día</h3>
                <p><label>Zapallo</label><label>Espinaca</label><label>Zanahoria</label><label>Tomate</label><label>Acelga</label></p>
                <p><label>Naranja</label><label>Mango</label><label>Limon</label></p>
              </div>
                    <div id="background-img">

                      <img className="imgNutrifami" src="https://s3.amazonaws.com/nutrifami/training/images/201733113113673.png" /></div>
                {/* <div className="row platos">
                  <div className="col col-sm-4  "><img className="img-fluid" src={"/images/" + "1m" + ".PNG"} /></div>
                  <div className="col col-sm-4"><img className="img-fluid" src={"/images/" + "2m" + ".PNG"} /></div>
                  <div className="col col-sm-4"><img className="img-fluid" src={"/images/" + "3m" + ".PNG"} /></div>
              </div> */}
      </div>
      </div>
    )
    }
}
export default BabyFeed;
