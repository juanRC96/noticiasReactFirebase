import React from "react";
import { Accordion } from "react-bootstrap";
import "./../styles/components/pages/NosotrosPage.css"

const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis
          interdum tincidunt. Etiam sagittis lacinia sodales. Suspendisse
          aliquet metus eu sollicitudin aliquet. Sed erat ex, hendrerit sit amet
          odio sed, laoreet interdum nibh. Praesent suscipit, nisl nec tempor
          ultricies, justo sapien imperdiet metus, ac tincidunt quam enim non
          sem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
          Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
          hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
          suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
          ac tincidunt quam enim non sem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis
          interdum tincidunt. Etiam sagittis lacinia sodales. Suspendisse
          aliquet metus eu sollicitudin aliquet. Sed erat ex, hendrerit sit amet
          odio sed, laoreet interdum nibh. Praesent suscipit, nisl nec tempor
          ultricies, justo sapien imperdiet metus, ac tincidunt quam enim non
          sem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
          Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
          hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
          suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
          ac tincidunt quam enim non sem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis
          interdum tincidunt. Etiam sagittis lacinia sodales. Suspendisse
          aliquet metus eu sollicitudin aliquet. Sed erat ex, hendrerit sit amet
          odio sed, laoreet interdum nibh. Praesent suscipit, nisl nec tempor
          ultricies, justo sapien imperdiet metus, ac tincidunt quam enim non
          sem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
          Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
          hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
          suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
          ac tincidunt quam enim non sem.
        </p>
      </div>
      <div className="staff">
            <h2>Quienes somos</h2>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Juan Gomez</Accordion.Header>
                <Accordion.Body>
                  <div className="persona">
                    <img
                      src="images/nosotros/juangomez.jpg"
                      alt="Juan Gomez"
                      style={{ borderRadius: "50%" }}
                    />
                    <h6>Gerente General</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec iaculis interdum tincidunt. Etiam sagittis lacinia
                      sodales. Suspendisse aliquet metus eu sollicitudin
                      aliquet. Sed erat ex, hendrerit sit amet odio sed, laoreet
                      interdum nibh. Praesent suscipit, nisl nec tempor
                      ultricies, justo sapien imperdiet metus, ac tincidunt quam
                      enim non sem.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Vanesa Hernandez</Accordion.Header>
                <Accordion.Body>
                  <div className="persona">
                    <img
                      src="images/nosotros/vanesahernandez.jpg"
                      alt="Vanesa Hernandez"
                      style={{ borderRadius: "50%"}}
                    />
                    <h6>Periodista</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec iaculis interdum tincidunt. Etiam sagittis lacinia
                      sodales. Suspendisse aliquet metus eu sollicitudin
                      aliquet. Sed erat ex, hendrerit sit amet odio sed, laoreet
                      interdum nibh. Praesent suscipit, nisl nec tempor
                      ultricies, justo sapien imperdiet metus, ac tincidunt quam
                      enim non sem.

                      

                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Thiago Prieto</Accordion.Header>
                <Accordion.Body>
                  <div className="persona">
                    <img
                      src="images/nosotros/thiagoprieto.jpg"
                      alt="Thiago Prieto"
                    />
                    <h6>Periodista</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec iaculis interdum tincidunt. Etiam sagittis lacinia
                      sodales. Suspendisse aliquet metus eu sollicitudin
                      aliquet. Sed erat ex, hendrerit sit amet odio sed, laoreet
                      interdum nibh. Praesent suscipit, nisl nec tempor
                      ultricies, justo sapien imperdiet metus, ac tincidunt quam
                      enim non sem.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
    </main>
  );
};

export default NosotrosPage;
