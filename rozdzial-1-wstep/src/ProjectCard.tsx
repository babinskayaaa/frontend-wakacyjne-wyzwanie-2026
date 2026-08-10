import { useState } from 'react';

export interface Technology {
  id: string;
  name: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
}

export const ProjectCard = ({ title, description, technologies }: ProjectCardProps) => {
  const [status, setStatus] = useState<'W trakcie' | 'Ukończony'>('W trakcie');

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === 'W trakcie' ? 'Ukończony' : 'W trakcie'));
  };

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '350px',
      backgroundColor: '#ffffff',
      textAlign: 'left'
    }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{title}</h3>
      <p style={{ color: '#4a5568', fontSize: '14px', marginBottom: '15px' }}>{description}</p>

      <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>Technologie:</h4>
      <ul style={{ paddingLeft: '20px', margin: '0 0 15px 0', fontSize: '14px' }}>
        {technologies.map((tech) => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>

      <p style={{ fontSize: '14px', marginBottom: '15px' }}>
        Status: <strong>{status}</strong>
      </p>

      <button 
        onClick={toggleStatus}
        style={{
          padding: '8px 16px',
          backgroundColor: '#3182ce',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Zmień status
      </button>
    </div>
  );
};