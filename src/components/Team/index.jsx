import "./Team.css";

const Team = ({ children, title }) => {
  return (
    <section className="team">
      <h2>{title}</h2>
      <div className="cards_container">{children}</div>
    </section>
  );
};

export { Team };
