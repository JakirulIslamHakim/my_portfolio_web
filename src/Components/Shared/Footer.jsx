import ContactIcon from "../ContactIcon/ContactIcon";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="btn btn-ghost text-2xl md:text-4xl cursor-wait font-bold italic">
          H4K1[\/]
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <ContactIcon></ContactIcon>
        </div>
      </nav>
      <aside>
        <p className="md:text-base">Copyright © 2024 - All right reserved by -Jakirul Islam Hakim</p>
      </aside>
    </footer>
  );
};

export default Footer;
