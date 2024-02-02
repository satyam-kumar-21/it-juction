import React from 'react';

function ServicesSection() {
  const services = [
    {
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec efficitur quam.',
      imageUrl: 'https://placekitten.com/300/200', // Replace with your actual image URL
    },
    {
      title: 'Service 2',
      description: 'Vestibulum euismod lacinia metus, sit amet blandit magna eleifend vel.',
      imageUrl: 'https://placekitten.com/300/201', // Replace with your actual image URL
    },
    {
      title: 'Service 3',
      description: 'Integer eget arcu vel augue ullamcorper consectetur at in odio.',
      imageUrl: 'https://placekitten.com/300/202', // Replace with your actual image URL
    },
    {
      title: 'Service 4',
      description: 'Suspendisse sit amet nisi vitae justo sagittis auctor. Proin et ultricies quam.',
      imageUrl: 'https://placekitten.com/300/203', // Replace with your actual image URL
    },
    {
      title: 'Service 5',
      description: 'Duis fermentum elit non urna cursus, in porttitor sapien tincidunt.',
      imageUrl: 'https://placekitten.com/300/204', // Replace with your actual image URL
    },
    {
      title: 'Service 6',
      description: 'Praesent vitae elit nec orci euismod rhoncus. Nam malesuada auctor ex.',
      imageUrl: 'https://placekitten.com/300/205', // Replace with your actual image URL
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-900">What We Provide</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img
                src={service.imageUrl}
                alt={`Service ${index + 1}`}
                className="mb-4 rounded-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <h1 className="text-blue-900 text-bold text-xl font-semibold mb-4">{service.title}</h1>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
