import useInView from "react-cool-inview"
import classnames from 'classnames'
import styles from './caseStudyImages.module.scss'

export default function CaseStudyImages({ images = [] }) {

  const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView(
    {
      threshold: 0.25, // Default is 0
      onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
        // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
      },
      onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
        // Triggered when the target enters the viewport
      },
      onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
        // Triggered when the target leaves the viewport
      },
      // More useful options...
    }
  );
  
  return (
    <ul
      ref={ref}
      className={
        classnames(
          styles.studyImages,
          styles[(inView) ? 'inView' : 'offScreen'],
        )
      }
    >
      {images.map((image, imageIndex) => (
        <li className={styles.singleImage} key={`studyImage-${imageIndex}`}>
          <img src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  )
}