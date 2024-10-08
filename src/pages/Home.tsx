import { Film } from "../components/Film";
import { FormHome } from "../components/FormHome";
import { Navigation } from "../components/Navigation";

export const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <FormHome />
      <Film />
    </>
  );
};
