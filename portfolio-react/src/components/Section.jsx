export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="section" aria-label={title}>
      <div className="container">
        <div className="section__head">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="h2">{title}</h2>
        </div>
        <div className="section__body">{children}</div>
      </div>
    </section>
  )
}
