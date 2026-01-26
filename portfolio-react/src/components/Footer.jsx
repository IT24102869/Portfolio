export default function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="muted">© {year} {name}. All rights reserved.</p>
        <a className="footer__top" href="#top">Back to top</a>
      </div>
    </footer>
  )
}
