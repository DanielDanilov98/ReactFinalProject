import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";

const AboutPage = () => {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          Welcome to my About Page! I'm thrilled to have the opportunity to
          share a little bit about myself and what I do. My name is Daniel
          Danilov. Whether you stumbled upon my business card or found me
          online, I'm excited to connect with you and tell you more about my
          journey. Throughout my life, I have always had a deep fascination with
          [Your Field of Expertise]. It started as a hobby and quickly evolved
          into a burning passion. I've spent countless hours honing my skills
          and acquiring knowledge to become proficient in my craft. With 10
          years of experience in [Your Field of Expertise], I have had the
          privilege of working with a diverse range of clients and projects.
          Each opportunity has allowed me to refine my skills and broaden my
          perspective, enabling me to deliver exceptional results every time.
          What truly sets me apart is my unwavering commitment to excellence. I
          believe in going the extra mile to ensure that my clients receive the
          highest level of service and satisfaction. I approach every project
          with meticulous attention to detail, creativity, and a deep
          understanding of my clients' unique needs and aspirations. My work is
          not just a job; it's a labor of love. I take immense pride in helping
          my clients achieve their goals and exceed their expectations. Whether
          it's creating stunning visual designs, developing innovative
          solutions, or crafting compelling content, I strive for nothing less
          than perfection. Beyond my professional pursuits, I am a firm believer
          in continuous learning and personal growth. I am always seeking new
          challenges and opportunities to expand my knowledge and skills. I stay
          up-to-date with the latest industry trends and technologies to ensure
          that I can deliver cutting-edge solutions to my clients. Collaboration
          and communication are the cornerstones of my approach. I believe in
          building strong relationships with my clients, fostering an
          environment of trust and open dialogue. By truly understanding their
          vision, I can translate their ideas into reality, delivering results
          that surpass their expectations.
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
