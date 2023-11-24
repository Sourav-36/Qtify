import "./faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import axios from "axios";

const Faq = ({ url }) => {
  let [faqs, setFaqs] = useState([]);
  useEffect(() => {
    (async () => {
      let resFaq = await axios.get(url + "/faq");
      console.log(resFaq);
      let res = await resFaq.data;
      setFaqs(res.data);
    })();
  }, []);
  return (
    <div className="faqContainer">
      <div className="faqTitle">FAQs</div>
      <div style={{ padding: "6px 150px" }}>
        {faqs.map((faq, ind) => (
          <Accordion
            key={ind}
            sx={{ borderRadius: "0px 0px 10px 10px", margin: "10px 0px" }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: "var(--css-black)",
                border: "1px var(--css-white) solid",
                borderRadius: "6px",
              }}
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    fontSize: "50px",
                    fontWeight: "900",
                    color: "var(--css-primary)",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div style={{ fontSize: "18px", color: "var(--css-white)" }}>
                {faq.question}
              </div>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "var(--css-white)",
                borderRadius: "6px",
                padding: "16px",
              }}
            >
              <div style={{ fontWeight: "500" }}>{faq.answer}</div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
