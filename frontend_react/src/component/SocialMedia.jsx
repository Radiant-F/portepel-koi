import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
}
