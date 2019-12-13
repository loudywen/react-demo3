import React from "react";
import "./parallax.styles.scss";
import { Controller, Scene } from "react-scrollmagic";

const Parallax = () => (
  <div>
    <header>
      <h1>Parallax</h1>
    </header>
    <section className="about">
      <Controller>
        <Scene
          indicators={true}
          duration="100%"
          pin=".about-title"
          triggerElement=".about-title"
          triggerHook={0}
        >
          <div className="about-title">
            <h2>about me</h2>
          </div>
        </Scene>
      </Controller>

      <div className="about-pages">
        <div>
          <h1>some project1</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, quaerat? Corrupti esse odit facere modi dolor eligendi
            cupiditate soluta. Ut quaerat sit odit harum quibusdam incidunt nam
            recusandae explicabo vero.
          </p>
        </div>
        <div>
          <h1>some project2</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, quaerat? Corrupti esse odit facere modi dolor eligendi
            cupiditate soluta. Ut quaerat sit odit harum quibusdam incidunt nam
            recusandae explicabo vero.
          </p>
        </div>
        {/* <div>
          <h1>some project3</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, quaerat? Corrupti esse odit facere modi dolor eligendi
            cupiditate soluta. Ut quaerat sit odit harum quibusdam incidunt nam
            recusandae explicabo vero.
          </p>
        </div> */}
      </div>
    </section>
    <footer>
      <h1>Feelgood?</h1>
    </footer>
  </div>
);

export default Parallax;
