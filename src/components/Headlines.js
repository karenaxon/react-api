import React from "react";
import { connect } from "react-redux";
import { makeApiCall } from "./../actions";

class Headlines extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoaded, headlines } = this.props;
    if (error) {
      return <React.Fragment> Error: {error.message} </React.Fragment>;
    } else if (isLoaded) {
      return <React.Fragment> Loading... </React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Today's Headlines</h1>
        <p className="col-md-8 fs-4">Source: New York Times API</p>
      
      </div>
    </div>
          <ul>
            {headlines.map((headline, index) => (
              <lo key={index}>
                <div className="col">
                <div className="h-100 p-5 text-white bg-dark rounded-3 mb-3 mx-5">
                  <h2> {headline.title} </h2> <p> {headline.abstract} </p>
                  </div>
                </div>
              </lo>
            ))}
            </ul>
          <footer className="pt-3 mt-4 text-muted text-center"> <a href="https://developer.nytimes.com/" target="_blank">New York Times API</a> </footer>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    headlines: state.headlines,
    isLoaded: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Headlines);
