export default function ExperienceItems({ item }) {
  return (
    <article className="exp">
      <div className="exp__head">
        <div>
          <h3 className="h3">{item.title}</h3>
          <p className="muted">{item.company}</p>
        </div>
        <p className="exp__period">{item.period}</p>
      </div>
      <ul className="exp__list">
        {item.bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </article>
  )
}
