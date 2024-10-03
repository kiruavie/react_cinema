import { NavLink } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <div className="header nav-active">
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={"/favorite"}>Coups de coeur</NavLink>
          </li>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};
