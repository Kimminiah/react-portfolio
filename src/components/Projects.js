import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

// Set up the root element for the modal (this is required for react-modal to work)
Modal.setAppElement('#root');

const Projects = () => {
  // State to manage the currently selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data (can be dynamic or fetched from an API)
  const projects = [
    {
      id: 1,
      title: 'Healthy Buddy',
      description: 'A nutritional guide geared towards children and young adults.',
      image: '/healthybuddy.png',
      details: 'This project helps kids and young adults track nutrition and find healthy recipes.',
    },
    {
      id: 2,
      title: 'InnoMove',
      description: 'Navigate smarter with the best routes and optimal travel times.',
      image: '/numba2.png',
      details: 'InnoMove optimizes travel times and routes using AI-driven algorithms.',
    },
    {
      id: 3,
      title: 'Night Bit Labs',
      description: 'A tech lab focused on innovative solutions and creative development.',
      image: '/numba3.png',
      details: 'This project is more likely used for the potential gamers that can be used as a way of communication to other players and for co-op purposes.',
    },
  ];

  // Function to open the modal for a specific project
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project" onClick={() => openModal(project)}>
            <img src={project.image} alt={`${project.title} Project`} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing project details */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>{selectedProject.title}</h2>
          <img src={selectedProject.image} alt={selectedProject.title} />
          <p>{selectedProject.details}</p>
          <button onClick={closeModal} className="modal-close-btn">Close</button>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
