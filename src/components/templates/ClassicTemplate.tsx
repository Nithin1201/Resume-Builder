import React from 'react';
import { Resume } from '../../types/resume';
import { Mail, Phone, MapPin, Globe, Calendar } from 'lucide-react';

interface ClassicTemplateProps {
  resume: Resume;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ resume }) => {
  const { personalInfo, workExperience, education, skills, projects } = resume;

  return (
    <div className="bg-white shadow-lg">
      {/* Header */}
      <div className="border-b-4 border-gray-800 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
            {personalInfo.website && (
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {workExperience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <div className="text-right text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700 font-medium">{edu.school}</p>
                    <p className="text-gray-600">{edu.field}</p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <div className="text-right text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                Technical Skills
              </h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex justify-between">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
                Notable Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id}>
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <p className="text-gray-700 mb-2">{project.description}</p>
                    <div className="text-gray-600 text-sm mb-1">
                      <strong>Technologies:</strong> {project.technologies.join(', ')}
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600 text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
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

export default ClassicTemplate;