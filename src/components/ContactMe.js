import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

Modal.setAppElement('#root');

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('✅ Message sent successfully!', {
      position: 'bottom-right',
      autoClose: 2500,
      theme: 'dark',
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
    });

    setTimeout(() => setIsModalOpen(false), 1000);
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="email-text">
          Reach me by contacting this email: {' '}
          <a
            href="mailto:patricia_gallego@dlsl.edu.ph"
            className="custom-email-link"
          >
            patricia_gallego@dlsl.edu.ph
          </a>
        </p>

        <button className="open-form-btn" onClick={() => setIsModalOpen(true)}>
          Message Me
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Contact Form Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-header">Let’s Talk</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Contact Number</label>
          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>

        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
      </Modal>

      <ToastContainer />
    </section>
  );
};

export default ContactMe;
