import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'data:image/jpeg;base64,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', // Replace with the URL of John Doe's photo
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'data:image/jpeg;base64,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', // Replace with the URL of Jane Smith's photo
  },
  {
    id: 3,
    name: 'Jane Smith',
    role: 'CTO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'data:image/jpeg;base64,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', // Replace with the URL of Jane Smith's photo
  },
  
  // Add more team members as needed
];

function MeetOurTeamSection() {
  return (
    <div className="bg-green-400 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-900">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-6 rounded-lg shadow-md bg-white flex flex-col items-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl text-blue-900 font-bold mb-2">{member.name}</h3>
              <h3 className="text-gray-900 text-sm text-bold">{member.role}</h3>
              <p className="text-gray-900 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeamSection;
