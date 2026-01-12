import gamestackTexture2Large from '~/assets/bank2.png';
import gamestackTexture2Placeholder from '~/assets/bank2.png';
import gamestackTexture2 from '~/assets/bank2.png';
import gamestackTextureLarge from '~/assets/bank1.png';
import gamestackTexturePlaceholder from '~/assets/bank1.png';
import gamestackTexture from '~/assets/bank1.png';

import markscalTexture2Large from '~/assets/marks2.png';
import markscalTexture2Placeholder from '~/assets/marks2.png';
import markscalTexture2 from '~/assets/marks2.png';
import markscalTextureLarge from '~/assets/marks1.png';
import markscalTexturePlaceholder from '~/assets/marks1.png';
import markscalTexture from '~/assets/marks1.png';

import foodAppTexture2Large from '~/assets/food1.png';
import foodAppTexture2Placeholder from '~/assets/food1.png';
import foodAppTexture2 from '~/assets/food1.png';
import foodAppTextureLarge from '~/assets/food2.png';
import foodAppTexturePlaceholder from '~/assets/food2.png';
import foodAppTexture from '~/assets/food2.png';

import covidAppTexture2Large from '~/assets/Covid01.png';
import covidAppTexture2Placeholder from '~/assets/Covid01.png';
import covidAppTexture2 from '~/assets/Covid01.png';

import covidAppTextureLarge from '~/assets/Covid02.png';
import covidAppTexturePlaceholder from '~/assets/Covid02.png';
import covidAppTexture from '~/assets/Covid02.png';


import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/NeuroStack Landing Page.png';
//import sprTextureLarge from '~/assets/NeuroStack Landing Page.png';
import sprTexturePlaceholder from '~/assets/NeuroStack Landing Page.png';
// import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/NeuroStack Landing Page.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Portfolio',
    description: `Design portfolio of ${config.name} — a Software or Code designer working on web & mobile apps with a focus on UI/UX, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectfour = useRef();
  const projectfive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree,projectfour,projectfive, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  const projects = [
    {
      id: 'project-1',
      ref: projectOne,
      index: 1,
      title: 'Neurostack Landing Page',
      description:
        'Created a React-based landing page for NeuroStack with team info, project highlights, and contact section.',
      buttonText: 'View project',
      buttonLink: '/projects/neurostack',
      stack: ['React', 'Remix', 'Three.js', 'Framer Motion', 'Vite'],
      model: {
        type: 'laptop',
        alt: 'Smart Sparrow lesson builder',
        textures: [
          {
            srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
            placeholder: sprTexturePlaceholder,
          },
        ],
      },
    },
    {
      id: 'project-2',
      ref: projectTwo,
      alternate: true,
      index: 2,
      title: 'Bank Application ',
      description:
        'A modern banking app clone built with Java, Kotlin, and Jetpack Compose, featuring improved UI/UX and added functionalities.',
      buttonText: 'View Application',
      buttonLink: '/projects/bankapp',
      stack: ['Java', 'Kotlin', 'Jetpack Compose', 'Firebase', 'Android Studio'],
      model: {
        type: 'phone',
        alt: 'App login screen',
        textures: [
          {
            srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
            placeholder: gamestackTexturePlaceholder,
          },
          {
            srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
            placeholder: gamestackTexture2Placeholder,
          },
        ],
      },
    },
    {
      id: 'project-3',
      ref: projectThree,
      index: 3,
      title: 'Food Catering',
      description:
        'An online food catering app built with Java and PHP, featuring a sleek UI, user login, and admin panel for managing orders and menus.',
      buttonText: 'View project',
      buttonLink: '/projects/foodapp',
      stack: ['Java', 'PHP', 'MySQL', 'REST APIs', 'Responsive UI'],
      model: {
        type: 'phone',
        alt: 'Annotating a biomedical image in the Slice app',
        textures: [
          {
            srcSet: `${foodAppTexture} 375w, ${foodAppTextureLarge} 750w`,
            placeholder: foodAppTexturePlaceholder,
          },
          {
            srcSet: `${foodAppTexture2} 800w, ${foodAppTexture2Large} 1920w`,
            placeholder: foodAppTexture2Placeholder,
          },
        ],
      },
    },
    {
      id: 'project-4',
      ref: projectfour,
      alternate: true,
      index: 4,
      title: 'Student Marks Calculator',
      description:
        'A GTU marks calculator app built for students to quickly compute SPI, CPI, CGPA, and percentage with a clean and easy-to-use interface.',
      buttonText: 'View Application',
      buttonLink: '/projects/foodappd',
      stack: ['Java', 'Android', 'SQLite', 'Material UI'],
      model: {
        type: 'phone',
        alt: 'App login screen',
        textures: [
          {
            srcSet: `${markscalTexture2} 375w, ${markscalTexture2Large} 750w`,
            placeholder: markscalTexture2Placeholder,
          },
          {
            srcSet: `${markscalTexture} 375w, ${markscalTextureLarge} 750w`,
            placeholder: markscalTexturePlaceholder,
          },
        ],
      },
    },
    {
      id: 'project-5',
      ref: projectfive,
      index: 5,
      title: 'Covid Soft Test',
      description:
        'A simple and responsive Android app providing real-time COVID-19 updates, safety guidelines, and nearby healthcare info. Built using Java, RESTful APIs, and SQL for reliable performance and accessibility.',
      buttonText: 'View project',
      buttonLink: '/projects/foodappd',
      stack: ['Java', 'REST APIs', 'SQL', 'Android', 'Material UI'],
      model: {
        type: 'phone',
        alt: 'Annotating a biomedical image in the Slice app',
        textures: [
          {
            srcSet: `${covidAppTexture} 800w, ${covidAppTextureLarge} 1920w`,
            placeholder: covidAppTexturePlaceholder,
          },
          {
            srcSet: `${covidAppTexture2} 375w, ${covidAppTexture2Large} 750w`,
            placeholder: covidAppTexture2Placeholder,
          },
        ],
      },
    },
  ];

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      {projects.map(project => (
        <ProjectSummary
          key={project.id}
          id={project.id}
          alternate={project.alternate}
          sectionRef={project.ref}
          visible={visibleSections.includes(project.ref.current)}
          index={project.index}
          title={project.title}
          description={project.description}
          buttonText={project.buttonText}
          buttonLink={project.buttonLink}
          model={project.model}
          stack={project.stack}
        />
      ))}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
