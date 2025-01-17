import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import NotFound from "./pages/NotFound"
import SignUp from "./pages/auth/SignUp"
import Dashboard from "./pages/Dashboard"
import MeetingDashboard from "./pages/MeetingDashboard"
import Profile from "./pages/Profile"
import CreatorMeetingStatus from "./pages/status/CreatorMeetingStatus"
import ParticipantMeetingStatus from "./pages/status/ParticipantMeetingStatus"
import Email from "./pages/auth/forgotPassword/Email"
import Otp from "./pages/auth/forgotPassword/Otp"
import NewPassword from "./pages/auth/forgotPassword/NewPassword"
import OneVManyPage from "./pages/createMeetings/OneVManyPage"
import OneVOnePage from "./pages/createMeetings/OneVOnePage"
import FriendPage from "./pages/friend/FriendPage"
import CreatorJoin from "./pages/meetingJoin/CreatorJoin"


function App() {


  return (
    <Router>
      <Routes>
       
        {/* Dashboard */}
        <Route path="/" element={<Dashboard/>} />
        {/* login and signup */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        {/* user profile */}
        <Route path="/users/profile" element={<Profile />} />
        {/* meeting and status */}
        <Route path="/status/creator" element={<CreatorMeetingStatus />} />
        <Route path="/status/participant" element={<ParticipantMeetingStatus />} />
        <Route path="/meetings" element={<MeetingDashboard />} />
        <Route path="/meetings/create/one-v-one" element={<OneVOnePage />} />
        <Route path="/meetings/create/one-v-many" element={<OneVManyPage />} />
        <Route path="/meetings/creator/join/:meetingId" element={<CreatorJoin />} />
        
        {/* for password reset */}
        <Route path="/auth/forgot-password" element={<Email />} />
        <Route path="/auth/forgot-password/otp" element={<Otp />} />
        <Route path="/auth/forgot-password/new-password" element={<NewPassword />} />
        
        {/* Friends */}
        <Route path="/friends" element={<FriendPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
