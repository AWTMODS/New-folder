import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text-box animate-fade-in">
          <h1 className="hero-title">
            Push Your <span className="text-red">Limits</span>.<br />
            Exceed Your <span className="text-red">Goals</span>.
          </h1>
          <p className="hero-subtitle delay-100 animate-fade-in">
            Welcome to Fitness Gym Malappuram. The ultimate training facility equipped with premium gear, expert trainers, and a community that pushes you forward.
          </p>
          <div className="hero-actions delay-200 animate-fade-in">
            <a href="#join" className="btn btn-primary">
              Start Your Journey <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Classes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
