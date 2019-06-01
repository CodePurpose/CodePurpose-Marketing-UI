import React from "react";
import { Container, Card, CardContent } from "../Styles/StyledComponents";

const ProductionModel = () => (
  <div>
    <Container style={{ paddingBottom: "2em" }}>
      <div sytle={{ paddingBottom: "2em" }}>
        <h3>Our standardized model for production:</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <h3>Conversation </h3>
            <div>icon</div>
            <div>
              <p>
                We start off with a simple conversation. We want to know your
                problems, your needs, and your objective, which may or may not
                be identical. Through a conscientious process we help identify
                all three and ultimately your solution.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <h3>Assessment </h3>
            <div>icon</div>
            <div>
              <p>
                We welcome all clients but we also pride ourselves on honesty.
                If your solution doesn’t require an original build, we will
                discourage the unnecessary investment. Our objective is to find
                you the right solution.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <h3>Build </h3>
            <div>icon</div>
            <div>
              <p>
                Investment is not a four-step process. You invest in our team
                and we invest in your future. We follow through with quality
                software trackmanship by unit testing, analytics, and alerts.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent style={{ textAlign: "center" }}>
            <h3>Mockups </h3>
            <div>icon</div>
            <div>
              <p>
                Rome was not built in a day so why should your software. We
                believe in taking the iterative approach to building original
                products. We will provide mockups of your product and have
                another conversation and then repeat the process until we’re in
                line to meet your objective.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  </div>
);

export default ProductionModel;
