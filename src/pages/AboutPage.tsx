import Page from '../components/Page.tsx';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Page>
      <h1>About</h1>
      <p>Hello there! I'm Lester — a student, a software engineer, and a hobbyist photographer, based in Singapore.</p>
      <p>
        This website serves to bring together my passion in software development and photography. With almost a
        decade of event photography experience, I have photographed many events, most recently the Children Cancer
        Foundation's Survivors Day 2023.
      </p>
      <p>
        If you like my photography work and would like to work with me, you can contact me&nbsp;
        <Link to="/contact">
        here
        </Link>
        . You can also find me on my&nbsp;
        <a href="https://www.lesterong.com">personal website</a>
        &nbsp;and my&nbsp;
        <a href="https://github.com/lesterong" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
      <p>

      </p>
    </Page>
  )
}

export default AboutPage;
