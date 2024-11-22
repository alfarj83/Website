import Navbar from '../components/Navbar';
import AuthCardLogIn from '../components/Cards';
import '../styles/login.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <AuthCardLogIn />
    </>
  );
}
