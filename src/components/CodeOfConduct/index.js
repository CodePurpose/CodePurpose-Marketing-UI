import React from "react";
import {
  ConductModal,
  ConductBackdrop,
  ConductContent,
  ConductCloseBtn,
  ConductBtnContainer,
  ConductCloseX,
  ConductText,
  ConductTitle,
  ConductHeader
} from "./conductStyles";

const CodeOfConduct = props => (
  <ConductBackdrop>
    <ConductModal>
      <ConductCloseX onClick={props.click}>&times;</ConductCloseX>
      <ConductContent>
        <ConductTitle>CODE OF CONDUCT</ConductTitle>
        <ConductHeader>PREAMBLE</ConductHeader>
        <ConductText>
          The CodePurpose Code of Conduct defines the standard of environment
          CodePurpose as a whole including but not limited to every employee,
          volunteer, or affiliate working within the organization must achieve
          in order to produce an acceptable environment.
        </ConductText>
        <ConductText>
          Any companies affiliated or working in unison with CodePurpose must
          comply with all applicable labor laws within the country or state
          workers are contracted and must apply CodePurpose Code of Conduct in
          their facilities.
        </ConductText>
        <ConductHeader>ANTI-HARASSMENT POLICY</ConductHeader>
        <ConductText>
          We are dedicated to providing a harassment-free experience for
          everyone, regardless of gender, gender identity and expression, sexual
          orientation, disability, physical appearance, body size, race,
          religion, native language, operating system choice, prior experience,
          and immigration status within documented bounds. We do not tolerate
          harassment of participants in any form. Sexual language and imagery is
          not appropriate in CodePurpose facilities or any event the
          organization hosts or participates within.
        </ConductText>
        <ConductText>
          Employees, volunteers, or any affiliate working within or outside of
          the organization found violating these rules may be given a warning
          for the first violation, depending on the severity of the misconduct,
          which will be judged by the director and human resources, and have
          their employment or participation terminated if the misconduct
          continues.
        </ConductText>
        <ConductText>
          Harassment includes offensive verbal comments related to gender,
          gender identity and expression, sexual orientation, disability,
          physical appearance, body size, race, religion, native language,
          operating system choice, prior experience, and immigration status
          within documented bounds.
        </ConductText>
        <ConductText>
          Harassment also includes sexual images in public spaces, deliberate
          intimidation, stalking, following, harassing photography or recording,
          sustained disruption of talks or other events, inappropriate physical
          contact, and unwelcome sexual attention. Participants asked to stop
          any harassing behavior must comply immediately or risk the appropriate
          disciplinary measures.
        </ConductText>
        <ConductText>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact your supervisor, human
          resources, and/or CodePurpose director.
        </ConductText>
        <ConductHeader>RETALIATION PROHIBITED</ConductHeader>
        <ConductText>
          Individuals who make complaints or bring charges against another
          CodePurpose employee or volunteers for violation of the Code of
          Conduct, including complaints regarding sexual misconduct, dating
          violence, stalking, harassment, or discrimination, may not be
          subjected to retaliation of any sort, whether verbal, physical or in
          any other manner, for having done so. Any CodePurpose employee who
          retaliates against another individual in violation of this rule will
          be subject to disciplinary action through the disciplinary procedures
          established by CodePurpose. The process for investigation and
          adjudication for charges of retaliation will be that relevant to the
          original report. That is, complaints of retaliation against those
          reporting or participating in investigations regarding sexual
          misconduct, dating/domestic violence, or stalking will be heard under
          the disciplinary process established for those conduct violations.
        </ConductText>
        <ConductHeader>BUSINESS</ConductHeader>
        <ConductText>
          Employees may engage in other forms of business outside of CodePurpose
          without consent from the company as long as said business isn’t
          conducted using CodePurpose’s resources without the consent of the
          acting director. CodePurpose aims to empower every employee,
          contractor, and protégé by providing as many resources available, but
          such resources must be used responsibly and with consent of
          CodePurpose.
        </ConductText>
        <ConductBtnContainer>
          <ConductCloseBtn onClick={props.click}>Close</ConductCloseBtn>
        </ConductBtnContainer>
      </ConductContent>
    </ConductModal>
  </ConductBackdrop>
);

export default CodeOfConduct;
