import { useState } from "react";
import image from "./img/benz.jpg";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navigation />
      <Message setOpenModal={setOpenModal} />
      <ImageSetup />
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <nav>
        <div>Logo⚡</div>
        <ul className="nav-flex">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  );
}

function Message({ setOpenModal }) {
  return (
    <div className="message">
      <h2>Please click on the button to open up the Modal</h2>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        click me
      </button>
    </div>
  );
}

function ImageSetup() {
  return (
    <div className="image">
      <img src={image} alt="img of a boy"></img>
    </div>
  );
}

function Modal({ openModal, setOpenModal }) {
  return (
    <div
      className="modalBackground"
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer">
        <p>investor martin vibes on deck</p>

        <p className="copyright_text">
          &COPY; 2024 All Rights Reserved. <span>Designed</span> by{" "}
          <a href="https://html.design">Martin Vibes</a>
        </p>
      </div>
    </footer>
  );
}

export default App;
