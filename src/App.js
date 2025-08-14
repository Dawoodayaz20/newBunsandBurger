import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/homepage/homePage.component';
import Header from './components/header/header.component';
import MenuPage from './pages/menupage/menupage.component';
import AboutPage from './pages/aboutpage/about.component';
import CartPage from './pages/cartpage/cartpage.component';
import ChatBotPage from './pages/chatpage/chatbotpage';
import DealsPage from './pages/dealspage/deals.component';
import LoginPage from './pages/loginpage/loginPage';
import ProfilePage from './pages/profilePage/Profile_Page';
import Footer from './components/footer/footer.component';
import { CartProvider } from './components/cart/cartcontext';
import { AuthProvider, useAuth } from './appwrite/auth-context';
import './App.css'

// class App extends React.Component {
//   constructor(){
//     super();

//     this.state={
//       currentUser: null,
//       loading: true
//     };
//   }


//   componentDidMount(){
//     this.setState = {
//       currentUser: ( () => useAuth()),
//       loading: false
//     }
//   }

//   render() {    
//     const {currentUser, loading} = this.state
//     if(loading) return (<p>Loading...</p>)

//     return (
//       <AuthProvider>
//         <CartProvider>
//           <Router>
//             <div>
//             <Header />
//               <BurgerChatWidget />
//                 <Routes>
//                   <Route path='/' element={currentUser? <HomePage /> : <Navigate to="/auth" replace /> } />
//                   <Route path='/chat' element={currentUser? <ChatBotPage /> : <Navigate to="/auth" replace /> } />
//                   <Route path='/menu' element={currentUser? <MenuPage /> : <Navigate to="/auth" replace /> } />
//                   <Route path='/cart' element={currentUser? <CartPage /> : <Navigate to="/auth" replace /> } />
//                   <Route path='/about' element={currentUser? <AboutPage /> : <Navigate to="/auth" replace />} />
//                   <Route path='/deals' element={currentUser? <DealsPage /> : <Navigate to="/auth" replace />} />
//                   <Route path='/auth' element={<LoginPage /> } />
//                   <Route path='/profile' element={currentUser? <ProfilePage /> : <Navigate to="/auth" replace />} />
//                 </Routes>
//             <Footer />
//             </div>
//           </Router>
//         </CartProvider>
//       </AuthProvider>
//     )
//   }
// }

// export default App

function AppContent() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" replace />} />
        <Route path="/chat" element={user ? <ChatBotPage /> : <Navigate to="/auth" replace />} />
        <Route path="/menu" element={user ? <MenuPage /> : <Navigate to="/auth" replace />} />
        <Route path="/cart" element={user ? <CartPage /> : <Navigate to="/auth" replace />} />
        <Route path="/about" element={user ? <AboutPage /> : <Navigate to="/auth" replace />} />
        <Route path="/deals" element={user ? <DealsPage /> : <Navigate to="/auth" replace />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/auth" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}