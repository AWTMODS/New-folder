import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹1499',
      period: '/month',
      features: ['Access to gym equipment', 'Locker facility', 'Free parking', '1 Fitness assessment'],
      recommended: false
    },
    {
      name: 'Pro',
      price: '₹2499',
      period: '/month',
      features: ['Everything in Basic', 'Group fitness classes', 'Nutrition plan', 'Guest passes (2/month)', 'Personal trainer (1 session)'],
      recommended: true
    },
    {
      name: 'Elite',
      price: '₹3999',
      period: '/month',
      features: ['Everything in Pro', 'Unlimited personal training', 'Massage therapy', 'Sauna access', 'Premium swag kit'],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="section-padding pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Membership <span className="text-red">Plans</span></h2>
          <p className="section-desc">Choose a plan that fits your goals and budget. No hidden fees.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card glass ${plan.recommended ? 'recommended' : ''}`}>
              {plan.recommended && <div className="recommended-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={20} className="text-red" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pricing-footer">
                <button className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} full-width`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
