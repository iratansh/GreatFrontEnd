import {useState} from "react";

export default function Accordion() {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div>
      <div>
        <button onClick={() => setOpenSection(openSection === "div1" ? null : "div1")}/>
        <div>
          HTML <span aria-hidden={true} className="accordion-icon" id="icon1" />
        </div>
        {openSection === "div1" && (
          <div id="div1">The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.</div>
        )}
      </div>
      <div>
        <button onClick={() => setOpenSection(openSection === "div2" ? null : "div2")}/>
        <div>
          CSS <span aria-hidden={true} className="accordion-icon" id="icon2" />
        </div>
        {openSection === "div2" && (
          <div id="div2">Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.</div>
        )}
      </div>
      <div>
        <button onClick={() => setOpenSection(openSection === "div3" ? null : "div3")}/>
        <div>
          JavaScript <span aria-hidden={true} className="accordion-icon" id="icon3" />
        </div>
        {openSection === "div3" && (
          <div id="div3">JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.</div>
        )}
      </div>
    </div>
  );
