import React from "react";
import { ArrowRight, Facebook, Twitter } from "react-feather";
import { Link } from "react-router-dom";
import { site_title, Colors } from "@skill-mask/app";
import {
  Foot,
  FootBrand,
  FootCreator,
  FootLinks,
  FootWrapper,
} from "../styles/footer.stc";

const Footer = () => {
  return (
    <Foot>
      <FootWrapper>
        <FootBrand>
          <h1>{site_title}</h1>
          <p>
            An online learning platform to <br />
            accelerate your learning process.
          </p>
          <div className="links">
            <Link to="#">
              <Facebook size={20} color="#fff" />
            </Link>
            <Link to="#">
              <Twitter size={20} color="#fff" />
            </Link>
          </div>
        </FootBrand>
        <FootLinks>
          <Link to="/">Home</Link>
          <Link to="/support">Support</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/terms">
            Terms & <br />
            Conditions
          </Link>
          <Link to="/career" style={{ color: Colors.green }}>
            Career
          </Link>
        </FootLinks>
        <FootCreator>
          <h1>Become A Creator</h1>
          <p>
            Want to become a creator & start <br />
            teaching? Sign up as creator
          </p>
          <Link to="/creator/signup">
            <span>Become a creator</span>{" "}
            <ArrowRight color={Colors.black} size={20} />
          </Link>
        </FootCreator>
      </FootWrapper>
      <p
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: 12,
          margin: "20px 0",
          fontWeight: "lighter"
        }}
      >
        &copy; 2021 {site_title}
      </p>
    </Foot>
  );
};

export default Footer;
