import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                imageAlt="Alexa Logo"
                description="Alexa is a virtual assistant AI technology developed by Amazon."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                imageAlt="Cortana Logo"
                description="Cortana is a virtual assistant created by Microsoft for Windows."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                imageAlt="Siri Logo"
                description="Siri is a virtual assistant that is part of Apple Inc.'s iOS."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
