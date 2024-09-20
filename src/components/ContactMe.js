import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

// Set up the root element for the modal (required by react-modal)
Modal.setAppElement('#root');

const ContactMe = () => {
  // State to manage form input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
  });

  // State to manage modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contact info has been sent!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
    });
    // Close the modal after submission
    setIsModalOpen(false);
  };

  // Open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        You can reach me at{' '}
        <a href="mailto:patricia_gallego@dlsl.edu.ph">
          patricia_gallego@dlsl.edu.ph
        </a>
        .
      </p>

      {/* Button to open the modal */}
      <button onClick={openModal}>Open Contact Form</button>

      {/* Modal for the Contact Form */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        {/* Close button */}
        <button onClick={closeModal} className="modal-close-btn">Close</button>
      </Modal>
    </section>
  );
};

export default ContactMe;
