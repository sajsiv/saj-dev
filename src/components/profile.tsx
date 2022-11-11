import linkedinIcon from "../img/LinkedIn_icon.svg.png";
import githubIcon from "../img/github-icon.png";
import youtubeIcon from "../img/youtube-icon.png";
import profile from "../img/profile.jpg";

export default function Profile(): JSX.Element {
  return (
    <div className="profileBox">
      <img className="profilepic" alt="Saj Sivia's profile" src={profile}></img>
      <h2>Saj Sivia 👨‍💻</h2>
      <h4>Fullstack Software Engineer</h4>
      <div className="iconsBox">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=6_ipZYav8zY&ab_channel=saj-dev"
        >
          <img
            className="icons"
            alt="Saj's Sivia's YouTube"
            src={youtubeIcon}
          ></img>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sajjan-sivia-212647192/"
        >
          <img
            className="icons"
            alt="Saj's Sivia's LinkedIn"
            src={linkedinIcon}
          ></img>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/sajsiv/">
          <img
            className="icons"
            alt="Saj's Sivia's GitHub"
            src={githubIcon}
          ></img>
        </a>
      </div>
    </div>
  );
}
