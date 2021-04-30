const Contact = () => {
  return <>
    <div className="diff_colr">
      <div className="contact-page">
        <div className="contact-form">
          <div className="left-side-contact">
            <h2>Contact</h2>
            <div className="cont-inf">
              <h3>Contact information</h3>
              <span>77 Barker Street Bondowose. 876555 Indonesia.</span>
              <span>Call us: +62 81 334 61 00</span>
              <span>We are open from monedy - friday. 08.00 am - 5.00 pm</span>
            </div>
          </div>
          <div className="right-side-contact">
            <input className="name-input" name="name" id="name" placeholder="name" autoComplete="off" />
            <input className="e-input"  name="email" id="email" placeholder="email" autoComplete="off" />
            <textarea className="text-input" placeholder="message"></textarea>
            <button className="btn-send">Send</button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Contact;
