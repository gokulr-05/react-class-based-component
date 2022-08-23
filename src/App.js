import Users from "./components/Users";
import UserFinder from "./components/UserFinder";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <UserFinder />
    </ErrorBoundary>
  );
}

export default App;
