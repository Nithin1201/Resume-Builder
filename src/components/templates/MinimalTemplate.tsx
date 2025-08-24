import React from 'react';
import { Resume } from '../../types/resume';

interface MinimalTemplateProps {
  resume: Resume;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ resume }) => {
  const { personalInfo, workExperience, education, skills, projects } = resume;

  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="p-12 text-center border-b border-gray-200">
        <h1 className="text-5xl font-light text-gray-900 mb-4">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="flex justify-center space-x-8 text-gray-600">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </div>

      <div className="p-12 space-y-12">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
              "{personalInfo.summary}"
            </p>
          </section>
        )}

        {/* Experience */}
        {workExperience.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Experience</h2>
            <div className="space-y-8">
              {workExperience.map((exp) => (
                <div key={exp.id} className="text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.position}</h3>
                  <p className="text-lg text-gray-700 mb-2">{exp.company} • {exp.location}</p>
                  <p className="text-gray-600 mb-4">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                  <div className="max-w-2xl mx-auto">
                    {exp.description.map((item, index) => (
                      <p key={index} className="text-gray-700 mb-2">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Education</h2>
            <div className="space-y-6 text-center">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-1">{edu.school} • {edu.location}</p>
                  <p className="text-gray-600">{edu.field}</p>
                  <p className="text-gray-600">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">Skills</h2>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="text-center">
                    <div className="flex justify-center items-center space-x-4">
                      <span className="font-medium text-gray-800 w-32 text-right">{skill.name}</span>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`w-3 h-3 rounded-full ${
                              level <= (skill.level === 'Expert' ? 5 :
                                       skill.level === 'Advanced' ? 4 :
                                       skill.level === 'Intermediate' ? 3 : 2)
                                ? 'bg-gray-900'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">Projects</h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {project.startDate} - {project.endDate}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate;