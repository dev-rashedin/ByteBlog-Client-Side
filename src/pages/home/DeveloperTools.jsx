const DeveloperTools = () => {
  const tools = [
    {
      name: 'Visual Studio Code',
      description:
        'Visual Studio Code is a free, lightweight code editor designed for web and cloud application development. It offers built-in support for JavaScript, TypeScript, and Node.js, along with a rich ecosystem of extensions for other programming languages. Its IntelliSense feature provides smart completions based on variable types and imported modules, making coding faster and more efficient.',
      link: 'https://code.visualstudio.com/',
      rating: 4.8,
      downloads: '20M+',
    },
    {
      name: 'Postman',
      description:
        'Postman is a collaboration platform for API development, enabling developers to build, test, and modify APIs quickly and effectively. With powerful features like automated testing, mock servers, and real-time collaboration, Postman simplifies the API workflow. It’s a must-have tool for developers working with RESTful APIs, streamlining the process from creation to deployment.',
      link: 'https://www.postman.com/',
      rating: 4.7,
      downloads: '15M+',
    },
    {
      name: 'Figma',
      description:
        'Figma is a web-based design tool that enables teams to collaborate on interface designs in real time. It supports vector editing, prototyping, and a powerful design system that ensures consistency across projects. Figma’s cloud-based approach allows for seamless integration with teams working remotely or across different locations.',
      link: 'https://www.figma.com/',
      rating: 4.9,
      downloads: '10M+',
    },
    {
      name: 'GitHub',
      description:
        'GitHub is the world’s leading platform for version control and collaborative coding. It allows developers to host and review code, manage projects, and collaborate on software development. GitHub supports both public and private repositories, offering seamless integration with Git and a range of tools to automate workflows.',
      link: 'https://github.com/',
      rating: 4.9,
      downloads: '30M+',
    },
  ];


  return (
    <section className='py-12'>
      <div className='mx- px-4'>
        <h2 className='text-3xl font-bold  mb-6'>
          Top Developer Tools & Resources
        </h2>
        <p className='mb-8'>
          Discover essential tools and resources to enhance your web development
          workflow.
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          {tools.map((tool, index) => (
            <div key={index} className='p-6  rounded-lg drop-shadow-xl'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                {tool.name}
              </h3>
              <p className='text-gray-600 mb-4'>{tool.description}</p>
              <a
                href={tool.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline'
              >
                Visit {tool.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
