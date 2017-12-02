import request from 'superagent';

export default class MarkersService {

    static getMarkers(callback){

			return request.
			//connection to web server Bluemix Node-Red
			get("https://conayu.mybluemix.net/traer").
			end(function(error, response){
				if(error) return callback(error);
				return callback(null, response.body);
			});
    }
}