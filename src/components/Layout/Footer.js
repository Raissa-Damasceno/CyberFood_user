import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <section className={classes.Footer}>
      <span>
        <br />
        Ramis Damasceno | Matheus Ausgusto | Gustavo Lemos <br />
        <br />
        &copy; 2022 reserved by Cyber Food
      </span>
    </section>
  );
};

export default Footer;
