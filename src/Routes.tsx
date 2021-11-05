import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const Home = React.lazy(() => import("./routes/Home"));
const Search = React.lazy(() => import("./routes/Search"));
const Login = React.lazy(() => import("./routes/Login"));
const AdminRoutes = React.lazy(() => import("./routes/Admin"));
const TermsOfService = React.lazy(() => import("./routes/ToS"));
const PrivacyPolicy = React.lazy(() => import("./routes/PrivacyPolicy"));
const PushSignUpForm = React.lazy(() => import("./routes/PushSubscription"));

export function Routes() {
  return (
    <React.Suspense fallback={null}>
      <Route exact path="/" component={Home} />
      <Route exact path="/tos" component={TermsOfService} />
      <Route exact path="/privacypolicy" component={PrivacyPolicy} />
      <Route exact path="/search/:postalCode" component={Search} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/pushsubscribe" component={PushSignUpForm} />
      <PrivateRoute path="/admin" render={() => <AdminRoutes />} />
    </React.Suspense>
  );
}
