import * as React from "react";
import "../styles/index.css"
import sunImage from '../images/sun.png';

import SunInfo from "../components/SunInfo";

const sunTimeSection = {
  position: "relative",
  height: "100vh",
  width: "100vw"
}

const sunTimeBackground = {
  background: "linear-gradient(196.75deg, #FDC830 0%, #F37335 100%)"
}

const sunTime = {
  position: "absolute",
  bottom: 0,
  left: 0,
  padding: "1em"
}

const sunImageStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  maxWidth: 268,
  maxHeight: 268
}

const additionalInfo = {
  display: "grid",
  gridGap: "1em",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px , 1fr))",
  margin: "1em 1em 0 1em",
  borderTop: "1px solid rgba(255, 255, 255, 0.5)",
  padding: "1em 0 2em 0"
}

//Sthlm
const lat = 59.3293;
const long = 18.0686;

// markup
const IndexPage = () => {
  return (
    <div style={sunTimeBackground}>
      <img src={sunImage} style={sunImageStyles} alt="Illustration av solen" />
      <main>
        <title>Soluppgång och solnedgång</title>
        <section style={sunTimeSection}>
          <div style={sunTime}>
            <SunInfo lat={lat} long={long} />
          </div>
        </section>
      </main>
      <aside style={additionalInfo}>
        <section>
          <h3>Om fenomenet solnedgång</h3>
          <p>Solnedgång är det dagliga inträffandet av att solen försvinner under horisonten på grund av jordens rotation. Tiden för solnedgång, enligt astronomi, räknas som när den över kroppen av solen sjunker under horistonen.</p>
        </section>
        <section>
          <h3>Om Stockholm</h3>
          <p>Stockholm är Sveriges huvudstad och etablerades 1187. Idag har stockholms tätort över 1,5 miljoner invånare. <a href="https://miljobarometern.stockholm.se/klimat/klimat-och-vaderstatistik/soltimmar/">År 2021 hade Stockholm totalt 1961 timmar under hela året</a>.</p>
        </section>
      </aside>
    </div>
  );
};

export default IndexPage;
