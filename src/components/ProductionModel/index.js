import React from "react";
import {
  Card,
  PMCardContent,
  CardGroup,
  Text,
  IconMobile,
  ProductionModelHeader,
  ProductionModelContainer,
  ProductionModelBackground,
  ProductionModelTitle,
  ProductionMobileOnly,
  CenterGroup,
  MobileOnlyArrow
} from "../../StyledComponents";
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

const secondary = "#00bbd3";

const ProductionModel = () => {
  return (
    <ProductionModelBackground>
      <ProductionModelContainer>
        <ProductionModelTitle>
          OUR STANDARDIZED MODEL FOR PRODUCTION
        </ProductionModelTitle>
        <CardGroup>
          <Card>
            <PMCardContent>
              <ProductionModelHeader>Conversation </ProductionModelHeader>
              <FontAwesomeIcon icon={faCommentDots} size="3x" />
              <Text>
                We start off with a simple conversation. We want to know your
                problems, your needs, and your objective, which may or may not
                be identical. Through a conscientious process we help identify
                all three and ultimately your solution.
              </Text>
            </PMCardContent>
          </Card>
          <IconMobile
            icon={faArrowRight}
            type="right"
            size="3x"
            color={secondary}
          />
          <Card>
            <PMCardContent>
              <ProductionModelHeader>Assessment </ProductionModelHeader>
              <FontAwesomeIcon icon={faTasks} size="3x" />
              <Text>
                We welcome all clients but we also pride ourselves on honesty.
                If your solution doesn’t require an original build, we will
                discourage the unnecessary investment. Our objective is to find
                you the right solution.
              </Text>
            </PMCardContent>
          </Card>
        </CardGroup>
        <CenterGroup>
          <FontAwesomeIcon icon={faArrowUp} size="3x" color={secondary} />
          <ProductionModelHeader>
            We iterate through each step until we get it right for you.
          </ProductionModelHeader>
          <FontAwesomeIcon icon={faArrowDown} size="3x" color={secondary} />
        </CenterGroup>
        <MobileOnlyArrow>
          <IconMobile
            icon={faArrowDown}
            size="3x"
            color={secondary}
            type="mobile"
          />
        </MobileOnlyArrow>
        <CardGroup>
          <Card>
            <PMCardContent>
              <ProductionModelHeader>Build </ProductionModelHeader>
              <FontAwesomeIcon icon={faFileCode} size="3x" />
              <Text>
                Investment is not a four-step process. You invest in our team
                and we invest in your future. We follow through with quality
                software trackmanship by unit testing, analytics, and alerts.
              </Text>
            </PMCardContent>
          </Card>
          <IconMobile
            icon={faArrowLeft}
            type="left"
            size="3x"
            color={secondary}
          />
          <Card>
            <PMCardContent>
              <ProductionModelHeader>Mockups </ProductionModelHeader>
              <FontAwesomeIcon icon={faPencilRuler} size="3x" />
              <Text>
                Rome was not built in a day so why should your software. We
                believe in taking the iterative approach to building original
                products. We will provide mockups of your product and have
                another conversation and then repeat the process until we’re in
                line to meet your objective.
              </Text>
            </PMCardContent>
          </Card>
        </CardGroup>
        <ProductionMobileOnly>
          <ProductionModelHeader>
            We iterate through each step until we get it right for you.
          </ProductionModelHeader>
        </ProductionMobileOnly>
      </ProductionModelContainer>
    </ProductionModelBackground>
  );
};

export default ProductionModel;
