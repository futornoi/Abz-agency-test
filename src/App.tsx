import { useEffect, useState } from "react";
import { getToken } from "./Api/users";
import HeaderSection from "./Components/Sections/Header/HeaderSection";
import IntroSection from "./Components/Sections/Intro/IntroSection";
import UsersSection from "./Components/Sections/Users/UsersSection";
import SignUp from "./Components/Sections/SignUp/SignUpSection";

const App = () => {
  const [isSuccess, setSuccess] = useState(false);
  const handleOnSuccess = () => setSuccess(prevState => !prevState)

  const getAuthToken = async () => {
    const tokenData = await getToken();
    window.localStorage.setItem('Token', tokenData.token)
  }

  useEffect(() => {
    getAuthToken()
  }, [])

  return (
    <div className="app">
      <HeaderSection/>
      <IntroSection/>
      <UsersSection isSuccess={isSuccess}/>
      <SignUp isSuccess={isSuccess} setSuccess={handleOnSuccess}/>
    </div>
  )
};

export default App;
