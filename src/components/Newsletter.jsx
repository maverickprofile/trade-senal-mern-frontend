import React from 'react';
// import '../styles/newsletter.css';

const Newsletter = () => {
  return (
    <section className="subscription bg-dark py-5" id="contact-us">
      <div className="container-fluid p-0 m-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="subscription-wrapper">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start subscription-content">
                <h3 className="flex-fill text-white mb-4 mb-md-0">
                  Subscribe <br /> to our newsletter
                </h3>
                <form className="row flex-fill">
                  <div className="col-lg-7 col-12 my-2">
                    <input
                      type="email"
                      className="form-control px-4 border-0 w-100 text-center text-md-start"
                      id="email"
                      placeholder="Your Email"
                      name="email"
                    />
                  </div>
                  <div className="col-lg-5 col-12 my-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg border-0 w-100"
                      onClick={() => window.open('YOUR_GOOGLE_FORM_LINK', '_blank')}
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;