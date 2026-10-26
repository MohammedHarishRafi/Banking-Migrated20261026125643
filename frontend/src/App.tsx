import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/modern-ui.css';
import './styles/original-jsp-styles.css';
import AdminAuditsComponent from './components/AdminAuditsComponent';
import HeaderComponent from './components/HeaderComponent';
import ResetPasswordComponent from './components/ResetPasswordComponent';
import PayComponent from './components/PayComponent';
import MfaEnrollComponent from './components/MfaEnrollComponent';
import ForgotPasswordComponent from './components/ForgotPasswordComponent';
import AdminRemindersComponent from './components/AdminRemindersComponent';
import MfaComponent from './components/MfaComponent';
import LoanAccountDetailsComponent from './components/LoanAccountDetailsComponent';
import DashboardComponent from './components/DashboardComponent';
import AdminStaffComponent from './components/AdminStaffComponent';
import LoginComponent from './components/LoginComponent';
import IndexComponent from './components/IndexComponent';
import ApplyloanComponent from './components/ApplyloanComponent';
import RegisterComponent from './components/RegisterComponent';
import CustomerProfileComponent from './components/CustomerProfileComponent';
import LoanSearchComponent from './components/LoanSearchComponent';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminaudits" element={<AdminAuditsComponent />} />
        <Route path="/header" element={<HeaderComponent />} />
        <Route path="/resetpassword" element={<ResetPasswordComponent />} />
        <Route path="/pay" element={<PayComponent />} />
        <Route path="/mfaenroll" element={<MfaEnrollComponent />} />
        <Route path="/forgotpassword" element={<ForgotPasswordComponent />} />
        <Route path="/adminreminders" element={<AdminRemindersComponent />} />
        <Route path="/mfa" element={<MfaComponent />} />
        <Route path="/loanaccountdetails" element={<LoanAccountDetailsComponent />} />
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/adminstaff" element={<AdminStaffComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/index" element={<IndexComponent />} />
        <Route path="/applyloan" element={<ApplyloanComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/customerprofile" element={<CustomerProfileComponent />} />
        <Route path="/loansearch" element={<LoanSearchComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;