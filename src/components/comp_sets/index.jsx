import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

export const NCNHeader = () => {

function handleNavigation (e) {

}

    return (
        <header>
          <img src={logo} alt="Website Logo" />
          <nav aria-label="Main Navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/articles">All Articles</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }




