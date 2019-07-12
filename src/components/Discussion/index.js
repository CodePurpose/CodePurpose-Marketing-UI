import React from "react";
import {
  DiscussionBackground,
  DiscussionContainer,
  DiscussionTextContainer
} from "../../StyledComponents";

const Discussion = () => (
  <DiscussionBackground>
    <DiscussionContainer>
      <h3>THERE IS ALWAYS ROOM FOR DISCUSSION</h3>
      <DiscussionTextContainer>
        <p style={{ marginTop: "0" }}>
          Our objective in striving for identity equity is never to exclude an
          employee, client, or anyone else. We are aspiring to start a
          conversation for change first and foremost. We expect to make mistakes
          because they are a benchmark of progress. But all progress is gradual,
          and solutions are only found through an iterative approach.
        </p>
      </DiscussionTextContainer>
    </DiscussionContainer>
  </DiscussionBackground>
);

export default Discussion;
