const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "30px",
      padding: "15px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/GayashanDeshapriya">
        <i className="fa-brands fa-github" aria-hidden="true" title="Gayashan Deshapriya' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/gayashan-deshapriya-9a121b1b1/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Gayashan Deshapriya' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://instagram.com/__mr_deshz19__?igshid=Mzc1MmZhNjY=">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Gayashan Deshapriya' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/mr_deshz19">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Gayashan Deshapriya' Twitter Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.behance.net/gayashan_96">
        <i className="fa-brands fa-behance" aria-hidden="true" title="Gayashan Deshapriya' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
