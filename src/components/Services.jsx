import React from 'react';
import { Activity, Users, Zap, HeartPulse } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Weightlifting',
      description: 'Build strength and muscle with our premium free weights and machines.',
      icon: <Activity size={32} className="text-red" />,
      image: '/assets/gym_weightlifting.png'
    },
    {
      title: 'Cardio Zones',
      description: 'High-end treadmills, ellipticals, and bikes for ultimate endurance training.',
      icon: <HeartPulse size={32} className="text-red" />,
      image: '/assets/gym_cardio.png'
    },
    {
      title: 'Personal Training',
      description: 'Achieve your goals faster with our certified, expert personal trainers.',
      icon: <Users size={32} className="text-red" />,
      image: null
    },
    {
      title: 'High-Intensity',
      description: 'Push your limits with our specialized HIIT functional training areas.',
      icon: <Zap size={32} className="text-red" />,
      image: null
    }
  ];

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-red">Classes</span> & Services</h2>
          <p className="section-desc">We provide everything you need to transform your body and mind.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              {service.image && (
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="image-overlay"></div>
                </div>
              )}
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
