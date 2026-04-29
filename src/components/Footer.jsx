import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <a href="#" className="logo">
              <Dumbbell className="text-red" size={32} />
              <span>FITNESS<span className="text-red">GYM</span><span className="subtitle">MALAPPURAM</span></span>
            </a>
            <p className="footer-desc">
              Elevate your fitness journey at the premier training facility in Malappuram. Train hard, train right.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Classes & Services</a></li>
              <li><a href="#pricing">Membership Plans</a></li>
              <li><a href="#trainers">Our Trainers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={20} className="text-red" />
                <span>123 Fitness Street, Malappuram, Kerala</span>
              </li>
              <li>
                <Phone size={20} className="text-red" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={20} className="text-red" />
                <span>info@fitnessgymmalappuram.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fitness Gym Malappuram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
