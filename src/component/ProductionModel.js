import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardGroup,
  Text,
  IconMobile,
  IconGroup,
  Mobile,
  Bold
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
const black = "#212121";

const styles = {
  containerStyle: {
    paddingBottom: "2em",
    maxWidth: "1090px",
    margin: "auto"
  },
  title: {
    color: black,
    textAlign: "center"
  }
};

const ProductionModel = () => {
  return (
    <div style={{ background: primary }}>
      <Container style={styles.containerStyle}>
        <div style={{ padding: ".5em" }}>
          <h2 style={styles.title}>OUR STANDARDIZED MODEL FOR PRODUCTION</h2>
        </div>
        <CardGroup>
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              <Bold>Conversation </Bold>
              <FontAwesomeIcon icon={faCommentDots} size="3x" />
              <div>
                <Text>
                  We start off with a simple conversation. We want to know your
                  problems, your needs, and your objective, which may or may not
                  be identical. Through a conscientious process we help identify
                  all three and ultimately your solution.
                </Text>
              </div>
            </CardContent>
          </Card>
          <IconMobile
            icon={faArrowRight}
            type="right"
            size="3x"
            style={{ alignSelf: "center" }}
            color={secondary}
          />
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              <Bold>Assessment </Bold>
              <FontAwesomeIcon icon={faTasks} size="3x" />
              <div>
                <Text>
                  We welcome all clients but we also pride ourselves on honesty.
                  If your solution doesn’t require an original build, we will
                  discourage the unnecessary investment. Our objective is to
                  find you the right solution.
                </Text>
              </div>
            </CardContent>
          </Card>
        </CardGroup>
        <IconGroup style={{ maxWidth: "830px", margin: "auto" }}>
          <FontAwesomeIcon icon={faArrowUp} size="3x" color={secondary} />
          <Bold>
            We iterate through each step until we get it right for you.
          </Bold>
          <FontAwesomeIcon icon={faArrowDown} size="3x" color={secondary} />
        </IconGroup>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <IconMobile
            icon={faArrowDown}
            size="3x"
            color={secondary}
            type="mobile"
          />
        </div>
        <CardGroup>
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              <Bold>Build </Bold>
              <FontAwesomeIcon icon={faFileCode} size="3x" />
              <div>
                <Text>
                  Investment is not a four-step process. You invest in our team
                  and we invest in your future. We follow through with quality
                  software trackmanship by unit testing, analytics, and alerts.
                </Text>
              </div>
            </CardContent>
          </Card>
          <IconMobile
            icon={faArrowLeft}
            type="left"
            size="3x"
            color={secondary}
            style={{ alignSelf: "center" }}
          />
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              <Bold>Mockups </Bold>
              <FontAwesomeIcon icon={faPencilRuler} size="3x" />
              <div>
                <Text>
                  Rome was not built in a day so why should your software. We
                  believe in taking the iterative approach to building original
                  products. We will provide mockups of your product and have
                  another conversation and then repeat the process until we’re
                  in line to meet your objective.
                </Text>
              </div>
            </CardContent>
          </Card>
        </CardGroup>
        <Mobile>
          <Bold>
            We iterate through each step until we get it right for you.
          </Bold>
        </Mobile>
      </Container>
    </div>
  );
};

export default ProductionModel;
