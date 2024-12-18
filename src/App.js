import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import BlogDetails from "./pages/BlogDetails";
import Bloglist from "./pages/Bloglist";
import Homepage from "./pages/Homepage";
import Homepage2 from "./pages/Homepage2";
import Homepage2Dark from "./pages/Homepage2Dark";
import Homepage2Light from "./pages/Homepage2Light";
import Homepage3 from "./pages/Homepage3";
import Homepage3Dark from "./pages/Homepage3Dark";
import Homepage3Light from "./pages/Homepage3Light";
import HomepageDark from "./pages/HomepageDark";
import HomepageLight from "./pages/HomepageLight";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/dark" exact>
          <HomepageDark />
        </Route>
        <Route path="/light" exact>
          <HomepageLight />
        </Route>
        <Route path="/index-2" exact>
          <Homepage2 />
        </Route>
        <Route path="/index-2-light" exact>
          <Homepage2Light />
        </Route>
        <Route path="/index-2-dark" exact>
          <Homepage2Dark />
        </Route>
        <Route path="/index-3" exact>
          <Homepage3 />
        </Route>
        <Route path="/index-3-light" exact>
          <Homepage3Light />
        </Route>
        <Route path="/index-3-dark" exact>
          <Homepage3Dark />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
