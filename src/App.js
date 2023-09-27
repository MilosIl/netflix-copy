import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, SignIn, SignUp, Browse } from "./pages";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./Hooks";
import { ProtectedRoute } from "./Helpers/routes";

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Routes>
        <Route
          element={<ProtectedRoute user={user} loggedInPath={ROUTES.HOME} />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
