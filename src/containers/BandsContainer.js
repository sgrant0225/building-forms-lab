import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch({ type: "ADD_BAND", payload: band})
  };
};

const mapStateToProps = (state) => {
  // return state
  return {
    bands: state.bands
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

//conncts to redux store and should be a child of the app component
//dispatch should be setup so they can be passed down to other components