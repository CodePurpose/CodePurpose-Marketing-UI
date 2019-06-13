import React from "react";
import {
  Container,
  Card,
  CardContent,
  MetaText
} from "../Styles/StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faArrowUp,
  faCommentDots,
  faTasks,
  faPencilRuler,
  faFileCode
} from "@fortawesome/free-solid-svg-icons";

const primary = "#fafafa";
const secondary = "#00bbd3";

const ProductionModel = () => (
  <div style={{ background: primary }}>
    <Container style={{ paddingBottom: "2em" }}>
      <div sytle={{ paddingBottom: "2em" }}>
        <h3>Our standardized model for production:</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <h3>Conversation </h3>
            <FontAwesomeIcon icon={faCommentDots} size="3x" />
            <div>
              <MetaText>
                We start off with a simple conversation. We want to know your
                problems, your needs, and your objective, which may or may not
                be identical. Through a conscientious process we help identify
                all three and ultimately your solution.
              </MetaText>
            </div>
          </CardContent>
        </Card>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="3x"
          style={{ alignSelf: "center" }}
          color={secondary}
        />
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <h3>Assessment </h3>
            <FontAwesomeIcon icon={faTasks} size="3x" />
            <div>
              <MetaText>
                We welcome all clients but we also pride ourselves on honesty.
                If your solution doesn’t require an original build, we will
                discourage the unnecessary investment. Our objective is to find
                you the right solution.
              </MetaText>
            </div>
          </CardContent>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "2em",
          paddingBottom: "2em"
        }}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          size="3x"
          style={{ paddingRight: "3em" }}
          color={secondary}
        />
        <FontAwesomeIcon
          icon={faArrowDown}
          size="3x"
          style={{ paddingLeft: "3em" }}
          color={secondary}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <h3>Build </h3>
            <FontAwesomeIcon icon={faFileCode} size="3x" />
            <div>
              <MetaText>
                Investment is not a four-step process. You invest in our team
                and we invest in your future. We follow through with quality
                software trackmanship by unit testing, analytics, and alerts.
              </MetaText>
            </div>
          </CardContent>
        </Card>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="3x"
          style={{ alignSelf: "center" }}
          color={secondary}
        />
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <h3>Mockups </h3>
            <FontAwesomeIcon icon={faPencilRuler} size="3x" />
            <div>
              <MetaText>
                Rome was not built in a day so why should your software. We
                believe in taking the iterative approach to building original
                products. We will provide mockups of your product and have
                another conversation and then repeat the process until we’re in
                line to meet your objective.
              </MetaText>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  </div>
);

export default ProductionModel;
