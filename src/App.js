import React from "react";
import "./scss/App.scss";
import Home from "./components/Home/Home";
import { Helmet, HelmetProvider } from "react-helmet-async";

class App extends React.Component {
  render() {
    return (
      <div>
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Alan Jones - Frontend v2.1-1</title>
            <meta
              name="description"
              content="ANSWER YOUR BODY'S NEEDS - Alan Jones"
              keywords="ANSWER YOUR BODY'S NEEDS, ALL THE LATEST FROM AEG"
            />
          </Helmet>
          <Home />
        </HelmetProvider>
      </div>
    );
  }
}

export default App;
