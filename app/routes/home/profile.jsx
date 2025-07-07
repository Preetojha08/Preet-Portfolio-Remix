import profileImgLarge from '~/assets/MyProfile.png';
import profileImgPlaceholder from '~/assets/MyProfile.png';
import profileImg from '~/assets/MyProfile.png';
// import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import hindi from './hindi.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (

<Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m <Link href="https://www.linkedin.com/in/developer-preet-ojha/">Preet Ojha</Link>, a skilled Android and Full-Stack Developer based in Canada. I specialize in crafting efficient mobile and web apps using Kotlin, Java, Android SDK, Jetpack Compose, and RESTful APIs. My portfolio features projects like the GTU Marks Calculator and Covid Application System, available on <Link href="https://play.google.com">Play Store</Link> and <Link href="https://github.com">GitHub</Link>, showcasing my ability to deliver scalable solutions. I hold a B.Tech in Computer Science and recently completed my Postgraduate Diploma in Full Stack Software Development at Lambton College, keeping me aligned with the latest industry trends.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      When I’m not coding, I’m exploring AWS, brainstorming new project ideas, enjoying movies, or engaging with the dev community. Let’s collaborate on something innovative !
    </Text>
</Fragment>

);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="https://preetojha08.github.io/ScanMe_Social_Connectivity-/"
                icon="send"
              >
                Catch me on YOUR Favorite SOCIAL Platforms!
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${hindi}#hindi-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
