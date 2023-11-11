import React from 'react'
import { FiCode, FiMonitor, FiGlobe, FiRefreshCcw, FiLayout, FiMessageCircle } from 'react-icons/fi';
import '../styles/Services.css';

import {Link } from 'react-router-dom';

export default function Services() {
    const servicesList = [
        {
          title: 'Web Development',
          description: 'Custom web development solutions tailored to your business needs.',
          icon: <FiCode />,
        },
        {
          title: 'Digital Card For your Business',
          description: 'Engaging and visually appealing Digital card for your brand. That will work like mobile app plus dashboard',
          icon: <FiMessageCircle />,
        },
        {
          title: 'Dashboard Creation',
          description: 'Create intuitive and interactive dashboards for your data visualization.',
          icon: <FiMonitor />,
        },
        {
          title: 'API/Backend Creation',
          description: 'Develop robust APIs and backend systems to power your applications.',
          icon: <FiGlobe />,
        },
        {
          title: 'Redesign Website',
          description: 'Give your website a fresh and modern look with our redesign services.',
          icon: <FiRefreshCcw />,
        },
        {
          title: 'Consultancy',
          description: 'Expert advice and guidance to optimize your digital strategy.',
          icon: <FiLayout />,
        },
      ];
  return (
 
    <div className="service-section" id="services">
        <h2 className = "alignCentre heading-color m-5 ">Sevices we provice</h2>
    <div className="container">
      <div className="row">
        {servicesList.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="service-card card m-3">
              <div className="card-body">
                <div className="card-icon">{service.icon}</div>
                <h5 className="card-title subheading">{service.title}</h5>
                <p className="card-text description">{service.description}</p>
                <Link className='btn botton' to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
