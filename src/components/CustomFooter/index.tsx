import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import TwitterIcon from "@site/static/icons/twitter.svg";
import LinkedInIcon from "@site/static/icons/linkedin.svg";
import YoutubeIcon from "@site/static/icons/youtube.svg";
import styles from "./styles.module.scss";

const CustomFooter = () => (
<footer className={styles["custom-footer-wrapper"]}>
  <div className={styles["logo-wrapper"]}>
    <img src={useBaseUrl("/img/logo/logo_dark.png")} className={styles["dark-theme-logo"]} />
    <img src={useBaseUrl("/img/logo/logo_light.png")} className={styles["light-theme-logo"]} />
  </div>
  <div className={styles["copyright"]}>
    {`© ${new Date().getFullYear()} Haltdos, Inc. All rights reserved`}
  </div>
  <div className={styles["footerSocialIconsWrapper"]}>
    <div className={styles["socialBrands"]}>
      <Link
        href={"https://twitter.com/halt_dos"}
        rel="noopener noreferrer"
        aria-label={"Twitter"}
      >
        <TwitterIcon />
      </Link>
    </div>
    <div className={styles["socialBrands"]}>
      <Link
        href={"https://www.youtube.com/@Haltdoscybersecurity"}
        rel="noopener noreferrer"
        aria-label={"Youtube"}
      >
        <YoutubeIcon />
      </Link>
    </div>
    <div className={styles["socialBrands"]}>
      <Link
        href={"https://www.linkedin.com/company/haltdos"}
        rel="noopener noreferrer"
        aria-label={"Linkedin"}
      >
        <LinkedInIcon />
      </Link>
    </div>
  </div>
</footer>
);

export default CustomFooter;
