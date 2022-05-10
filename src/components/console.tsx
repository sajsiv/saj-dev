import { useState, useRef, useEffect } from "react";
import commands from "../utils/interfaces";
import FocusLock from "react-focus-lock";

export default function Console(): JSX.Element {
  const [log, setLog] = useState<JSX.Element[]>([
    <p key="start">
      Welcome to saj-dev - type <b>help</b> for a list of supported commands
    </p>,
  ]);
  const [input, setInput] = useState<string>("");
  const bottomRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [log]);

  const commandsResponses: commands[] = [
    {
      command: "help",
      response: (
        <p>
          supported commands: <b>about, experience, education, portfolio</b>
        </p>
      ),
    },

    {
      command: "about",
      response: (
        <p>
          Hey wanderer👋
          <br></br>
          <br></br>
          My name's <b>Saj</b> and I'm a trainee fullstack software engineer👨‍💻.
          I am a scholar on{" "}
          <b>
            <a
              className="link"
              href="https://academy.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Academy's
            </a>
          </b>{" "}
          Tech Leadership graduate scheme. <br></br>
          <br></br> Over the past 4 months, I've been building projects and
          learning <b>React</b>, <b>TypeScript</b>, <b>Express</b>,{" "}
          <b>Postgresql</b> and <b>JavaScript</b>. Feel free to reach out to me
          on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sajjan-sivia-212647192/"
            className="link"
          >
            LinkedIn!
          </a>
        </p>
      ),
    },
    {
      command: "experience",
      response: (
        <p>
          {" "}
          <b>Academy, Feb 2022 - Present</b>
          <br></br>- 4 month highly-selective grant funded programme with less
          than a 1% acceptance rate, funded by <b>LocalGlobe</b>
          <br></br>- Built fullstack projects in agile teams using TypeScript,
          React, Node.js, SQL, Express, Jest and Cypress
          <br></br>
          <br></br>
          <b>Xceptor, Nov 2021 - Feb 2022</b>
          <br></br>- delivered data automation projects for <b>J.P. Morgan</b>,{" "}
          <b>Citi</b> and <b>Schroders</b>
          <br></br>- worked in Agile teams using <b>C#</b>, <b>XML</b> and{" "}
          <b>SQL</b> to configure products to client needs
          <br></br>
          <br></br>
          <b>Quo Vadis, Nov 2021 - Feb 2022</b>
          <br></br>- worked 12 hour night shifts as the receptionist of a lively
          restaurant/bar
          <br></br>- befriended the <b>director of Mr Bean's Holiday</b>
          <br></br>
          <br></br>
          <b>Design and Artist's Copyright Society, Oct 2020 - Jan 2021</b>
          <br></br>- produced report on tech-driven change in the art market for
          the UK’s largest artists’ rights organisation
          <br></br>- predicted the <b>NFT boom</b> and influenced the
          organisation to research their effects on artists’ rights
        </p>
      ),
    },
    {
      command: "education",
      response: (
        <p>
          <b>
            University College London (UCL) BASc - Politics and Mathematics with
            Arabic
          </b>
        </p>
      ),
    },
    {
      command: "portfolio",
      response: (
        <p>
          <a
            className="link"
            target="_blank"
            href="https://saj-zeri-patelman-dogvotes.netlify.app/"
            rel="noreferrer"
          >
            <b>Dog Voting App</b>
          </a>
          <br></br> -a fullstack app to vote for your favourite dog breeds{" "}
          <br></br>
          -built using Postgres, Express, React, TypeScript, Cypress, Jest HTML
          and CSS
          <br></br> -built REST API, database and interacted with a public API
          <br></br>-{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sajsiv/DogBreedFrontend"
          >
            Frontend GitHub
          </a>
          ,
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/roshnihpatel/Dog-Breed-Voting-Backend"
          >
            Backend GitHub
          </a>
          <br></br>
          <br></br>
          <a
            className="link"
            target="_blank"
            href="https://incredible-kulfi-5ae6a9.netlify.app/"
            rel="noreferrer"
          >
            <b>Pastebin App</b>
          </a>
          <br></br> -an fullstack app to save pieces of text and code<br></br>
          -built using Postgres, Express, React, TypeScript, HTML and CSS
          <br></br>-{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sajsiv/pastebin-frontend/"
          >
            Frontend GitHub
          </a>
          ,{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/arshaikhh/pastebin-team"
          >
            Backend GitHub
          </a>
          <br></br>
          <br></br>
          <a
            className="link"
            target="_blank"
            href="https://academy-jacobcutts13-tv-shows.netlify.app/"
            rel="noreferrer"
          >
            <b>TV App</b>
          </a>
          <br></br>
          -an app to find information and memes about TV episodes
          <br></br>
          -built using React, TypeScript, HTML, Jest and CSS
          <br></br>-fetched data from public API
          <br></br>-{" "}
          <a
            className="link"
            target="_blank"
            href="https://github.com/JacobCutts13/academy-tv-shows"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
        </p>
      ),
    },
  ];

  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      createLogValue(input);
      setInput("");
    }
  };

  const createLogValue = (terminalInput: string) => {
    const response = commandsResponses.find(
      (element) => element.command === terminalInput.toLowerCase()
    )?.response;
    response
      ? setLog([
          ...log,
          <p key={terminalInput}>→$ {terminalInput} </p>,
          response,
        ])
      : setLog([
          ...log,
          <p key={terminalInput}>→$ {terminalInput} </p>,
          <p key={terminalInput + "not found"}>
            Command not found, type help to see commands
          </p>,
        ]);
  };

  return (
    <>
      <p className="topbar">
        Terminal <p className="minimise">- ◰ x</p>
      </p>
      <div className="terminal">
        {log}
        <p className="dollarInput">→$</p>
        <FocusLock className="inputWrapper">
          <input
            className="consoleInput"
            value={input}
            onKeyDown={(e) => handleEnter(e)}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </FocusLock>
        <div ref={bottomRef} />
      </div>
    </>
  );
}
