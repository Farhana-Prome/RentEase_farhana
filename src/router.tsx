// src/router.tsx
import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import App from "./App";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import Tenants from "./pages/Tenants";
import Payments from "./pages/Payments";
import Utilities from "./pages/Utilities";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

// Root layout route
const rootRoute = createRootRoute({
  component: App,
});

// All pages
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const propertiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/properties",
  component: Properties,
});

const tenantsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tenants",
  component: Tenants,
});

const paymentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payments",
  component: Payments,
});

const utilitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/utilities",
  component: Utilities,
});

const analyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/analytics",
  component: Analytics,
});

// Catch-all (404) route
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

// Build the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  signupRoute,
  dashboardRoute,
  propertiesRoute,
  tenantsRoute,
  paymentsRoute,
  utilitiesRoute,
  analyticsRoute,
  notFoundRoute,
]);

// Router instance
export const router = createRouter({ routeTree });

// TS module declaration
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
