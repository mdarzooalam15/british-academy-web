function Admission() {
  return (
    <div className="admission-page">
      <section className="admission-hero">
        <p className="eyebrow">JOIN BRITISH ACADEMY</p>
        <h1>Begin Your Journey Towards a Brighter Future.</h1>
        <p>Admissions for Nursery to Class X.</p>
      </section>

      <section className="admission-process">
        <p className="eyebrow">HOW TO APPLY</p>
        <h2>Admission Process</h2>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Enquiry</h3>
            <p>Contact the school to enquire about admission.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Application</h3>
            <p>Complete the admission application form.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Confirmation</h3>
            <p>Contact the school for the next steps and confirmation.</p>
          </div>
        </div>
      </section>

      <section className="enquiry-section">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Admission Enquiry</h2>
        <p>
          Interested in British Academy? Fill out the admission enquiry form
          below.
        </p>

        <div className="google-form-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdCLGHHQOj2X1NgJLoN6BLX8JeEM0whqgm49MggJD6TNW6XtA/viewform?embedded=true"
            width="100%"
            height="1197"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="British Academy Admission Enquiry Form"
          >
            Loading…
          </iframe>
        </div>
      </section>

      <section className="admission-classes">
        <p className="eyebrow">CLASSES AVAILABLE</p>
        <h2>Nursery to Class X</h2>
        <p>Explore admission opportunities at British Academy.</p>
      </section>
    </div>
  );
}

export default Admission;
