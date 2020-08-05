import React from "react";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchStyles.css";

function SearchBox(props) {
  const loadMore = () => {
    if (props.loadMore) props.loadMore();
  };

  const sendQuery = (query) => {
    console.log(`Querying for ${query}`);
  };

  const delayedQuery = _.debounce((q) => sendQuery(q), 500);
  const handleChange = (_e) => {
    delayedQuery(_e.target.value);
    if (props.handleCountries) props.handleCountries(_e.target.value);
  };

  const handleSelection = (val) => {
    if (props.handleSelectionData) props.handleSelectionData(val);
  };

  const login = () => {
    if (props.handlelogin) props.handlelogin();
  };
  const logout = () => {
    if (props.handlelogout) props.handlelogout();
  };

  return (
    <div className="app">
      <div className="container">
        {!props.isLoggedIn ? (
          <div className="auth-container">
            You are not logged-in, please Login to add more countries.{" "}
            <button type="button" class="btn btn-primary" onClick={login}>
              Login
            </button>
          </div>
        ) : (
          <div className="auth-container">
            Welcome..{" "}
            <button type="button" class="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </div>
        )}
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>

          <input
            type="text"
            class="form-control"
            placeholder="Search"
            value={props.countrySelected}
            onChange={handleChange}
          />
        </div>
        <div
          className={`data-container ${
            props.showData &&
            props.countriesList.length > props.maxValue &&
            "more"
          }`}
        >
          {props.showData &&
            props.countriesList.map((row, index) => {
              if (index <= props.maxValue - 1) {
                return (
                  <div
                    className="clist"
                    key={index}
                    onClick={() => handleSelection(row.label)}
                  >
                    {row.label}
                  </div>
                );
              }
            })}
          {props.showData &&
            props.countriesList.length > props.maxValue &&
            props.countriesList.length !== props.maxValue && (
              <div className="load-more" onClick={loadMore}>
                {props.countriesList.length - props.maxValue} more..
              </div>
            )}
          {props.showData && !props.countriesList.length && (
            <div className="add-container">
              <div className="not-found">
                "{props.countrySelected}" not found
              </div>
              {props.isLoggedIn && (
                <div className="add-more">
                  <button type="button" class="btn btn-primary">
                    Add & Select
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
