import { useState, useEffect } from 'react';
import { Resume } from '../types/resume';
import { useAuth } from './useAuth';

export const useResumes = () => {
  const { user } = useAuth();
  const [resumes, setResumes] = useState<Resume[]>([]);

  useEffect(() => {
    if (user) {
      const allResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
      const userResumes = allResumes.filter((resume: Resume) => 
        user.resumes.includes(resume.id)
      );
      setResumes(userResumes);
    }
  }, [user]);

  const saveResume = (resume: Resume) => {
    const allResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    const existingIndex = allResumes.findIndex((r: Resume) => r.id === resume.id);
    
    if (existingIndex >= 0) {
      allResumes[existingIndex] = { ...resume, updatedAt: new Date().toISOString() };
    } else {
      allResumes.push({ ...resume, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
      
      // Update user's resume list
      if (user) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex((u: any) => u.id === user.id);
        if (userIndex >= 0) {
          users[userIndex].resumes.push(resume.id);
          localStorage.setItem('users', JSON.stringify(users));
          localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
        }
      }
    }
    
    localStorage.setItem('resumes', JSON.stringify(allResumes));
    setResumes(prev => {
      const updated = [...prev];
      const index = updated.findIndex(r => r.id === resume.id);
      if (index >= 0) {
        updated[index] = resume;
      } else {
        updated.push(resume);
      }
      return updated;
    });
  };

  const deleteResume = (id: string) => {
    const allResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    const filtered = allResumes.filter((r: Resume) => r.id !== id);
    localStorage.setItem('resumes', JSON.stringify(filtered));
    setResumes(prev => prev.filter(r => r.id !== id));
  };

  return {
    resumes,
    saveResume,
    deleteResume,
  };
};