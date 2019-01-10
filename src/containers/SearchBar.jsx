import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            term: '',
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.setState({
            term: event.target.value,
        });
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState(
            {term: ''}
        );
    }

    render(){
        return(
            <form
                className="input-group"
                onSubmit={this.handleOnSubmit}
            >
                <input
                    className="form-control"
                    name="term"
                    placeholder="Give a five-day forecast in your favorite cities."
                    onChange={this.handleInputChange}
                    value={this.state.term}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Search City</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);