import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Hero from "./components/Hero/Hero";
import PastTrials from "./pages/PastTrialsPage";
import HowItWorks from "./pages/HotItWorks";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    name: "home",
    layout: "/",
    component: HomePage,
  },
  {
    path: "/",
    name: "pastTrilas",
    layout: "/past-trials",
    component: PastTrials,
  },
  {
    path: "/",
    name: "howItWorks",
    layout: "/how-it-works",
    component: HowItWorks,
  },
  {
    path: "/",
    name: "login",
    layout: "/login",
    component: Login,
  },
];

const switchRoutes = (
  <Switch>
    {routes.map(route => (
      <Route
        path={`${route.layout}${route.path}`}
        component={route.component}
        key={route.name}
        exact
      />
    ))}
  </Switch>
);

export default function Routes(): JSX.Element {
  return (
    <>
      <Hero />

      <main className="bg-white flex h-screen">{switchRoutes}</main>
    </>
  );
}
