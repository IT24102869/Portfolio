function Tag({ children }) {
  return <span className="tag">{children}</span>
}

export default function CertificateCard({ certificate }) {
  return (
    <article className="card">
      {certificate.image && (
        <img className="card__media" src={certificate.image} alt="" loading="lazy" />
      )}
      <div className="card__body">
        <h3 className="h3">{certificate.title}</h3>
        <p className="muted">{certificate.issuer}</p>
        {certificate.description && (
          <p className="body" style={{ marginTop: '0.5rem' }}>{certificate.description}</p>
        )}
        {certificate.date && (
          <p className="muted" style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
            Issued: {certificate.date}
          </p>
        )}
        {certificate.expiryDate && (
          <p className="muted" style={{ fontSize: '0.875rem' }}>
            Expires: {certificate.expiryDate}
          </p>
        )}
        {certificate.tags && certificate.tags.length > 0 && (
          <div className="tags" aria-label="Certificate tags" style={{ marginTop: '1rem' }}>
            {certificate.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
        <div className="card__actions">
          {certificate.credentialUrl && (
            <a className="btn btn--primary" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
              View credential
            </a>
          )}
          {certificate.verifyUrl && (
            <a className="btn btn--ghost" href={certificate.verifyUrl} target="_blank" rel="noreferrer">
              Verify
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
