import React, { useState } from 'react';
import Link from 'next/link';



const Modal = ({ show, onClose }) => {
    return (
      <div className={`modal ${show ? 'show' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>About Us</h2>
          {/* Add about-related content here */}
        </div>
      </div>
    );
  };
  
  // Main Content Component
  export default function MainContent(){
  
    const [showModal, setShowModal] = useState(false);
  
    const handleModal = () => {
      setShowModal(!showModal);
    };
  
    return (
      <main>
        <section id="home">
          <h2>Welcome to HealMedic</h2>
          <p>Your one-stop destination for comprehensive healthcare services.</p>
        </section>
        <section id="services">
        <h2>Services</h2>
        <Link href="/DrugPage">
        
            <button>Drug Info</button>
         
        </Link>
      </section>
        <section id="about">
          <button onClick={handleModal}>About Us</button>
          <Modal show={showModal} onClose={handleModal} />
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          {/* Add contact-related content here */}
        </section>
      </main>
    );
  };