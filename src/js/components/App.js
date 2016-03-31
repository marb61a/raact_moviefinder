var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');

function getAppState(){
	return {
		movies: AppStore.getMovieResults()
	}
}

var App = React.createClass({
	render: function(){
		return(
			<div>
				MY APP
			</div>
		);
	}
});

module.exports = App;