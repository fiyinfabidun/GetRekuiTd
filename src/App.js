import './App.css';
import Home from './Pages/Home';
import { Route,Routes, BrowserRouter,useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Sign from './Pages/Sign';
import OtpVerification from './Pages/OtpVerification';
import ForgotPassword from './Pages/ForgotPassword';
import AccountCreated from './Pages/AccountCreated';
import { useEffect } from 'react';
import Assesment from './Pages/Assesment';
import TailoredJobs from './Pages/TailoredJobs';
import LimitedUser from './Pages/LimitedUser';
import ResumeFeedback from './Pages/ResumeFeedback';
import PaymentSucess from './Pages/PaymentSucess';
import './dashboard.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Jobtracker from './Pages/Dashboard/Jobtracker';
import Myprofile from './Pages/Dashboard/Myprofile';
import Myschedule from './Pages/Dashboard/Myschedule';
import Overview from './Pages/Dashboard/Overview';
import AssesmentComponent from './Components/AssesmentComponent';
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
      }, [pathname])}

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
      <Route path='/' element={<Home /> }></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='/sign' element={<Sign/>}></Route>
      <Route path='/OtpVerify' element={<OtpVerification/>}></Route>
      <Route path='/forgotpass' element={<ForgotPassword/>}></Route>
      <Route path='/acctCreate' element={<AccountCreated/>}></Route>
      <Route path='/assesment' element={<Assesment/>}></Route>
      <Route path='/tailoredJobs' element={<TailoredJobs/>}></Route>
      <Route path='/limitedUser' element={<LimitedUser/>}></Route>
      <Route path='/Resumefeedback' element={<ResumeFeedback/>}></Route>
      <Route path='/Paysucess' element={<PaymentSucess/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/jobtracker' element={<Jobtracker/>}></Route>
      <Route path='/myprofile' element={<Myprofile/>}></Route>
     <Route path='/myschedule' element={<Myschedule/>}></Route>
     <Route path='/overview' element={<Overview/>}></Route>
     <Route path='/assesmentComponent' element={<AssesmentComponent/>}></Route>
    </Routes>
      
       
      </BrowserRouter>
   
    </div>
  );
}

export default App;
