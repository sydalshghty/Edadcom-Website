import LoginPage from "./pages/login";
import SignUp from "./pages/sign-up";
import SignUp1 from "./pages/sign-up-1";
import { Routes,Route } from "react-router-dom";
import SignUPPage2 from "./pages/sign-up-2";
function App() {
  return (
      <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/signup" element={ <SignUp/>} />
        <Route path="/signup1" element={ <SignUPPage2/> } />
        <Route path="/signup2" element={<SignUp1/>} />
      </Routes>
  )
}
export default App;
