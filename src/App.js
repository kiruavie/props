import "./App.css";
import Profile from "./components/Profile";
import PropTypes from "prop-types";
import "../src/components/Profile.css";
function App() {
  const fullName = "Amani Magloire";
  const bio = "Je suis développeur";
  const profession = "Développeur web";

  const handleName = (name) => {
    alert(`Bonjour, Je m'appelle ${name}`);
  };

  Profile.propTypes = {
    props: PropTypes.string.isRequired,
  };
  return (
    <div>
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        handleName={handleName}
      />
    </div>
  );
}

export default App;
