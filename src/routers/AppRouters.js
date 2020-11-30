import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import Home from '../components/Home';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItems from '../components/PortfolioItems';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route path="/portfolio/:id" component={PortfolioItems} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
