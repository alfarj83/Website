import Navbar from '../components/Navbar';
import AuthCardSignUp from '../components/Cards';
import '../styles/signup.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <AuthCardSignUp />
    </>
  );
}