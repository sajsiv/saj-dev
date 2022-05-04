import { useState } from "react";
import commands from "../utils/interfaces";
import FocusLock from "react-focus-lock";

export default function Console(): JSX.Element {
  const [log, setLog] = useState<JSX.Element[]>([
    <p key="start">Welcome to Saj.dev - type <b>help</b> for a list of supported commands</p>,
  ]);
  const [input, setInput] = useState<string>("");

  const commandsResponses: commands[] = [
    {
      command: "help",
      response: <p>supported commands: <b>about, experience, education, portfolio</b></p>
    },

    {
      command: "about",
      response:
        <p>Hey there wanderer! My name's <b>Saj</b> and I'm a trainee software engineer. I am finishing up a grant-funding graduate technology scheme at <a href="https://academy.tech/">Academy</a>. The scheme is funded by LocalGlobe and Emerge Education!</p>,
    },
    //{
    //   command: "experience",
    //   response:
    //     "Xceptor - delivered data automation projects for J.P. Morgan, Citi and Schroders",
    // },
    // {
    //   command: "education",
    //   response: "UCL BASc - Social Sciences and Mathematics with Arabic",
    // },
    // {
    //   command: "portfolio",
    //   response:
    //     "pastebin (github, documentation) TV App (github, documentation)",
    // },
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
      ? setLog([...log, <p key={terminalInput}>→$ {terminalInput} </p>, response])
      : setLog([
          ...log,
          <p key={terminalInput}>→$  {terminalInput} </p>,
          <p key={terminalInput + "not found"}>Command not found, type help to see commands</p>,
        ]);
  };

  console.log(log);

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
      </div>
    </>
  );
}
