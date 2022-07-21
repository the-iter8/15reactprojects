import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div id="iter8-container">
          <h1>
            Made with ❤️ by
            <a
              href="https://www.linkedin.com/in/ankit-sharma-561b291b0/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Iter8.
            </a>
          </h1>
          <div id="iter8-components">
            <div id="contact-iter8">
              <div id="c-email">
                <p>randomdweller.me@gmail.com</p>
              </div>
              <div id="v-rule"></div>

              <div id="insta">
                <a
                  href="https://instagram.com/numismatic_tendencies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Instagram</p>
                </a>
              </div>

              <div id="github">
                <p>
                  <a
                    href="https://github.com/the-iter8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
