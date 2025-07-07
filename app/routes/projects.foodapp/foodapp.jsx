import sliceAnnotationLarge from '~/assets/bankfirebaseSS.png';
import sliceAnnotationPlaceholder from '~/assets/bankfirebaseSS.png';
import sliceAnnotation from '~/assets/bankfirebaseSS.png';

import sliceAppLarge from '~/assets/foodapp.png';
import sliceAppPlaceholder from '~/assets/foodapp.png';
import sliceApp from '~/assets/foodapp.png';  

import sliceBackgroundBarLarge from '~/assets/foodmain.png';
import sliceBackgroundBarPlaceholder from '~/assets/foodmain.png';
import sliceBackgroundBar from '~/assets/foodmain.png';


import sliceBackgroundLarge from '~/assets/foodbg.png';
import sliceBackgroundPlaceholder from '~/assets/foodbg.png';
import sliceBackground from '~/assets/foodbg.png';

import sliceIrlPlaceholder from '~/assets/foodProject.png';
import sliceIrl from '~/assets/foodProject.png';

import sliceSidebarAnnotationsLarge from '~/assets/foodop.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/foodop.png';
import sliceSidebarAnnotations from '~/assets/foodop.png';

import sliceSidebarLayersLarge from '~/assets/foodsign.png';
import sliceSidebarLayersPlaceholder from '~/assets/foodsign.png';
import sliceSidebarLayers from '~/assets/foodsign.png';

import sliceSlidesLarge from '~/assets/foodwireframe.png';
import sliceSlidesPlaceholder from '~/assets/bankwireframe.png';
import sliceSlides from '~/assets/foodwireframe.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Model } from '~/components/model'; // assuming this exists
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './foodapp.module.css';

const title = 'Food Catering Application ';
const description =
  'I developed a visually engaging and intuitive Food Catering Android Application that simplifies the process of browsing, ordering, and managing food catering services for various events. Built with Java in Android Studio and powered by Retrofit and SQL, the app offers users an immersive and efficient experience. The project supports both guest and authenticated users, integrating animations and responsive UI/UX for a rich user journey.';
const roles = ['Frontend: Java, Kotlin, XML Layouts', 'Backend: SQL Database, Retrofit RESTful APIs', 'Admin Panel: PHP, JSON, XAMPP', 'Tools & Libraries: Gradle, GitHub, Android Studio, Postman'];


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="NeuroStack Landing Page Project to display its core features and services to the users"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Food enthusiasts and event planners needed a centralized platform to discover and book catering services with ease. Many platforms were outdated, cluttered, or lacked real-time updates. To fill this gap, I created a responsive Android application that offers a clean, modern UI, dynamic content, and secure backend interactions using SQL and Retrofit APIs. 
              </ProjectSectionText>
              <ProjectSectionText>
                The app caters to both casual visitors and registered users. While guests can browse available food and services, advanced features—like placing orders, contacting vendors, and accessing custom inquiries—are reserved for logged-in users.
              </ProjectSectionText>
              <ProjectSectionText>
                ♤ Persistent user sessions for seamless access.<br></br> ♡ Dynamic theme switching for easy accessibility.
              </ProjectSectionText>

            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={650}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />

              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={650}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
        
            </div>
    
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                The wireframe layout for this application showcases five core screens—Home, Menu, Order Summary, Contact Us, and the Admin Dashboard. These screens were carefully designed using XML layouts and animated elements to make the interface vibrant and user-friendly. The admin panel, developed using PHP and XAMPP, allows backend users to monitor inquiries, track orders, and manage content dynamically.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
             
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={340}
                  height={390}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              {/* <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={140}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div> */}
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful Details</ProjectSectionHeading>
              <ProjectSectionText>
               The Home screen highlights a categorized display of food items with prices and images. Users can add items to their cart, view summaries, and schedule orders. The backend ensures that orders are stored securely in a SQL database, with real-time updates made possible using Retrofit RESTful APIs.
              </ProjectSectionText>
                <ProjectSectionText>
                The app supports session management and stores temporary user preferences using SharedPreferences, ensuring smooth navigation even after relaunches. The responsive layout ensures functionality across various screen sizes.
              </ProjectSectionText>

            </div>

            
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The Food Catering Application significantly streamlines the catering experience. From exploring services to placing orders and managing backend data, users enjoy a seamless process. Admins benefit from a robust dashboard for operational control. With an eye for UI/UX design, smooth animations, and secure API integration, this project strengthens my Android development portfolio and demonstrates my ability to build end-to-end functional apps.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
