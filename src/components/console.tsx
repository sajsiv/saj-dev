import { useState } from "react";
import commands from "../utils/interfaces";
import FocusLock from "react-focus-lock";

export default function Console(): JSX.Element {
  const [log, setLog] = useState<string[]>([
    "Welcome to Saj.dev - type help for a list of supported commands",
  ]);
  const [input, setInput] = useState<string>("");

  const commandsResponses: commands[] = [
    {
      command: "help",
      response: "supported commands: about, experience, education, portfolio",
    },

    {
      command: "about",
      response:
        "Hey there wanderer! My name's Saj and I'm a trainee software engineer. I am finishing up a grant-funding graduate technology scheme at Academy. The scheme is funded by LocalGlobe and Emerge Education!",
    },
    {
      command: "experience",
      response:
        "Xceptor - delivered data automation projects for J.P. Morgan, Citi and Schroders",
    },
    {
      command: "education",
      response: "UCL BASc - Social Sciences and Mathematics with Arabic",
    },
    {
      command: "portfolio",
      response:
        "pastebin (github, documentation) TV App (github, documentation)",
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
      ? setLog([...log, "→$  " + terminalInput, response])
      : setLog([
          ...log,
          "→$  " + terminalInput,
          "Command not found, type help to see commands",
        ]);
  };

  console.log(log);

  return (
    <>
      <p className="topbar">
        Terminal <p className="minimise">- ◰ x</p>
      </p>
      <div className="terminal">
        {log.map((e) => (
          <p key={log.indexOf(e)}>{e}</p>
        ))}
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
