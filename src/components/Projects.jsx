const PROJECTS = [
  {
    name: "Battleship",
    tags: ["HTML", "CSS", "Javascript", "Node.js"],
    desc: "Used components of Javascript to implement basic data structures through the game of Battleship. Used a terminal to display ships and tracked where ships are hit or missed.",
    reverse: false,
    preview: "terminal",
  },
  {
    name: "Movie Titles API",
    tags: ["HTML", "CSS", "Javascript", "API", "Version control"],
    desc: "Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user's favorite movies into another container.",
    reverse: true,
    preview: "movie",
  },
  {
    name: "Javascript Calculator",
    tags: ["HTML", "CSS", "Javascript", "Node.js"],
    desc: "Uses simple algorithm concepts in Javascript to produce an arithmetic result in a terminal.",
    reverse: false,
    preview: "code",
  },
];

function TerminalPreview() {
  return (
    <div className="terminal">
      <span className="hit">Hit!</span><br />
      <span className="prompt">Enter a location to strike i.e., 'A2' from A-J and 0-9 F2</span><br />
      <span className="miss">Miss!</span><br />
      <span className="prompt">Enter a location to strike i.e., 'A2' from A-J and 0-9 F1</span><br />
      <span className="miss">Miss!</span><br />
      <span className="prompt">Enter a location to strike i.e., 'A2' from A-J and 0-9 E3</span><br />
      <span className="hit">Hit!</span><br />
      <span className="prompt">Enter a location to strike i.e., 'A2' from A-J and 0-9 D3</span><br />
      <span className="hit">Hit!</span><br />
      <span className="win">You sunk a Cruiser. There are 4 ships left!</span>
    </div>
  );
}

function MoviePreview() {
  return (
    <div className="movie-grid">
      <div className="movie-slot">
        🎬
        <div className="movie-slot-label">The Godfather</div>
      </div>
      <div className="movie-slot">
        ✈️
        <div className="movie-slot-label">Top Gun: Maverick</div>
      </div>
    </div>
  );
}

function CodePreview() {
  return (
    <div className="code-block">
      <span className="cmt">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;console.<span className="fn">log</span>(<span className="str">'The result is '</span> + (a * b));</span><br />
      <span className="op">&nbsp;&nbsp;&nbsp;&nbsp;{"}"} <span className="kw">else if</span> (prompt === <span className="str">'/'</span>) {"{"}</span><br />
      <span className="cmt">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;console.<span className="fn">log</span>(<span className="str">'The result is '</span> + (a / b));</span><br />
      <span className="op">&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</span><br />
      <span className="op">{"}"}</span><br /><br />
      <span className="cmt">{"// "}trying to get the operation from user</span><br />
      <span className="kw">if</span>{" "}
      <span className="op">(prompt === <span className="str">'+'</span> || prompt === <span className="str">'-'</span> || prompt === <span className="str">'*'</span> ||</span><br />
      <span className="op">prompt === <span className="str">'/'</span>) {"{"}</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">twoInput</span><span className="op">();</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">calculateNum</span><span className="op">(num1, num2);</span><br />
      <span className="op">{"}"} <span className="kw">else</span> {"{"}</span>
    </div>
  );
}

const PREVIEW_MAP = {
  terminal: <TerminalPreview />,
  movie: <MoviePreview />,
  code: <CodePreview />,
};

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-divider">
          <div className="proj-vline" />
          <div className="proj-dot" />
        </div>
      </div>

      {PROJECTS.map((project) => (
        <div
          key={project.name}
          className={`project-row${project.reverse ? " reverse" : ""}`}
        >
          <div className="project-text">
            <div className="project-name">{project.name}</div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-actions">
              <button className="btn-github">View Github</button>
              <button className="btn-viewproject">
                View project <span className="arrow">↗</span>
              </button>
            </div>
          </div>

          <div className="project-preview">
            {PREVIEW_MAP[project.preview]}
          </div>
        </div>
      ))}
    </section>
  );
}
