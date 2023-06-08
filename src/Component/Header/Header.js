import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
        <Link to="/" className="title">
            Quizz Question by Trung
        </Link>
    </div>
  )
}

export default Header;