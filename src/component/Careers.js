import React from "react";
import { Container } from "../Styles/StyledComponents";

const secondary = "#00bcd4";

const Careers = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <h1 style={{ color: secondary }}>CAREERS</h1>
      <h3>EVERY DAY SHOULD BE MEANINGFUL</h3>
      <p>
        By cutting out the overused, outdated model of hiring workers from the
        same pipeline we open the door to growth. Forget becoming another cog.
        Come to work and feel comfortable demonstrating your strengths and have
        the opportunity to learn from your failures. We hold ourselves to high
        standards and expect all to be accountable for their actions. Our
        greatest strength is the inclusiveness of our charter and of the talent
        that it draws.
      </p>
      <h3>
        HOW DO I JOIN THIS GROUP OF INNOVATORS, DEVELOPERS, MOONLIGHTERS, AND AN
        ENGLISH MAJOR
      </h3>
      <p>
        First, ask yourself what you bring to the table. Next, drop us a message
        on our contact page. We like résumés but we also don’t like résumés. If
        that’s your thing, fine, if it’s not, send us a link to your portfolio,
        blog, or whatever else you use to represent yourself. We’re looking for
        innovators in programming, design, and business. We also offer aid to
        bring you into our world. Inclusivity doesn’t happen overnight and we
        feel a responsibility to create doors not walls. So please don’t
        hesitate to drop us a message and start a conversation.
      </p>
      <button>View our Code of Conduct</button>
    </Container>
  );
};
export default Careers;
