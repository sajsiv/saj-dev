import linkedinIcon from "../img/LinkedIn_icon.svg.png";
import githubIcon from "../img/github-icon.png";
import youtubeIcon from "../img/youtube-icon.png";

export default function Profile(): JSX.Element {
  return (
    <div className="profileBox">
      <img
        alt="Saj Sivia's profile"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQFF2ectYami3w/profile-displayphoto-shrink_800_800/0/1651757858249?e=1657152000&v=beta&t=HHfbzHDVXO9TyNwToJOxwdBhksgFXiuZoejo3H7QlSk"
      ></img>
      <h2>Saj Sivia 👨‍💻</h2>
      <h4>Trainee Software Engineer</h4>
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
