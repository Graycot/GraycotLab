import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/undraw_documentation.svg').default,
    description: (
      <>
        Graycot Lab is the home for all of my open source projects. Code, configuration, and instructions are all located here.
      </>
    ),
  },
  {
    title: 'Experimentation',
    Svg: require('@site/static/img/undraw_experiment.svg').default,
    description: (
      <>
        Graycot Lab is my laboratory! Experimental ideals and projects can be found linked throughout the website.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_publish_article.svg').default,
    description: (
      <>
        Whether it be a project tutorial or commentary on a failure, the blog is meant to help you avoid the same mistakes I made!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
