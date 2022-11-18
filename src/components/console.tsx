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
          My name's <b>Saj</b> and I'm a fullstack software engineer👨‍💻. Over the
          past 4 months, I've been working at
          <b>
            {" "}
            <a
              className="link"
              href="https://www.luminance.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Luminance
            </a>
          </b>{" "}
          - building the leading AI NLP product for legal contracts.
          <br></br>
          <br></br>
          I've been using <b>Object-Orientated JavaScript</b>, <b>Express.js</b>
          , <b>PostgreSQL</b>, <b>Java</b> and <b>ElasticSearch</b> to build
          products for the world's largest Law Firms and Private Equity firms.
          <br></br>
          <br></br>I am looking for a new opportunity to build and grow - feel
          free to reach out to me on{" "}
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
          <b>Luminance, July 2022 - November 2022</b>
          <br></br>- Full Stack engineer on NLP AI product for legal contracts,
          used by <b>BlackRock</b>, <b>Clifford Chance</b>, <b>Tesco</b> etc.
          <br></br>- Working with Backbone.js (OOP Frontend framework),
          Express.js, ElasticSearch, Java, PostgreSQL and Linux
          <br></br>- Created backend polling process to automatically change
          status of legal tasks
          <br></br>- Built and designed new interactive troubleshooter system,
          which auto populates support tickets and tracks data on version
          numbers and product areas clients are experiencing difficulty with
          <br></br>- Delivered backend hotfixes for our largest clients in
          ambiguous and time pressured conditions
          <br></br>- Self-taught to engineer solutions for a Microsoft Word
          plugin and a backend automated email system
          <br></br>
          <br></br>
          <b>Academy, Feb 2022 - July 2022</b>
          <br></br>- 5 month highly-selective grant funded programme with less
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
          <b>Quo Vadis, Oct 2021 - Nov 2021</b>
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
            University College London (UCL) BASc - Mathematics and Politics with
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
          -built using Postgres, Express, React, TypeScript, Cypress, Jest, HTML
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
          <br></br> -a fullstack app to save pieces of text and code<br></br>
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
            href="https://linear-binary-search.netlify.app/"
            rel="noreferrer"
          >
            <b>Linear and Binary Search</b>
          </a>
          <br></br> -a small app I built to demonstrate the speed of different
          search algorithms in an workshop I hosted<br></br>
          -built using React, TypeScript, HTML and CSS
          <br></br>-{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sajsiv/Linear-and-Binary-Search-Demo-Website"
          >
            GitHub
          </a>{" "}
          <br></br> -{" "}
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=6_ipZYav8zY&ab_channel=saj-dev"
          >
            Here's a link to the workshop!
          </a>
        </p>
      ),
    },
    {
      command: "ls",
      response: (
        <p>
          <b>Nice try!</b>
        </p>
      ),
    },
    {
      command: "cd",
      response: (
        <p>
          <b>Nice try!</b>
        </p>
      ),
    },
    {
      command: "git branch",
      response: (
        <p>
          <b>No branches here!</b>
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
            Command not found, type <b>help</b> to see commands
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
