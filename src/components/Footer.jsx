import {useState} from 'react'

const Footer = () => {
  const [title, setTitle] = useState("")
  return (  
    <footer>
    <p className="copyright">&copy; 2021, <i>  JasminAghayan</i></p>
  </footer>
  );
}
 
export default Footer;