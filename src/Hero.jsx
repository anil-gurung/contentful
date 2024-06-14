import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby everyday carry skateboard yes plz, pok pok deep v gastropub
            chicharrones adaptogen. Brunch quinoa artisan forage. Banjo whatever
            live-edge humblebrag fixie kombucha pickled bespoke. Tattooed hot
            chicken subway tile distillery. Deep v hell of austin microdosing
            taiyaki Brooklyn.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
