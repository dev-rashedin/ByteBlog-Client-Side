import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {
  FaGithub,
  FaFigma,
  FaDownload,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';


AOS.init();

const DeveloperTools = () => {
 
  const tools = [
    {
      icon: <VscVscode color='blue' />,
      name: 'Visual Studio Code',
      description:
        'Visual Studio Code is a free, lightweight code editor for web and cloud applications. It supports JavaScript, TypeScript, and Node.js, with extensions for many languages and features like IntelliSense for smarter coding.',
      link: 'https://code.visualstudio.com/',
      rating: 4.9,
      downloads: '20M+',
    },
    {
      icon: <SiPostman color='orange' />,
      name: 'Postman',
      description:
        'Postman is an API development platform for building, testing, and documenting APIs. Its tools streamline the API lifecycle with automated testing, collaboration, and mock servers for efficient development.',
      link: 'https://www.postman.com/',
      rating: 4.3,
      downloads: '15M+',
    },
    {
      icon: <FaFigma color='red' />,
      name: 'Figma',
      description:
        'Figma is a collaborative design tool for creating user interfaces. It supports real-time collaboration, vector editing, and prototyping, making it ideal for designing web and mobile interfaces with design system consistency.',
      link: 'https://www.figma.com/',
      rating: 4.6,
      downloads: '10M+',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      description:
        'GitHub is a platform for version control and collaboration, supporting both public and private repositories. It integrates with Git and offers tools for automation, project management, and reviewing code efficiently.',
      link: 'https://github.com/',
      rating: 4.8,
      downloads: '30M+',
    },
  ];

  return (
    <section className='pt-8'>
      <div className=' px-4'>
        <div className='text-center'>
          <div
            data-aos='flip-left'
            data-aos-duration='3000'
            data-aos-delay='300'
            data-aos-easing='ease-out-cubic'
            className='text-3xl md:text-4xl lg:text-5xl font-bold  mb-4'
          >
            Top Developer Tools & Resources
          </div>
          <p className='mb-8'>
            Discover essential tools and resources to enhance your web
            development workflow.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 mt-10'>
          {tools.map((tool, index) => (
            <div
              key={index}
              className='p-6  drop-shadow-sm border-2 border-b-4  border-golden-saffron mx-auto border-dashed rounded-xl '
            >
              <div className='text-2xl font-semibold mb-4 flex items-center gap-2'>
                <span>{tool.icon}</span>
                <span> {tool.name}</span>
              </div>
              <p className=' mb-4'>{tool.description}</p>
              <div className='flex justify-between mb-3'>
                <p className='flex'>
                  <span> Developer Rating:</span>
                  <span className='font-extrabold ml-2 inline'>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={tool.rating}
                      readOnly={true}
                    />
                  </span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaDownload color='purple' />
                  Total Download :
                  <span className='font-extrabold'>{tool.downloads}</span>
                </p>
              </div>
              <div className='flex gap-2 text-lg items-center'>
                <p>Visit</p>
                <FaExternalLinkAlt />
                <a
                  href={tool.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-royal-amethyst 
                hover:underline font-semibold'
                >
                  {tool.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
