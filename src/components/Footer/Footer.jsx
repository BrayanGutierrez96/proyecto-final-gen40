import './footer.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import logoTopShelf from "../../assets/logoTopShelf.png";
import bitcoinLogo from "../../assets/bitcoinLogo.png";
import interacLogo from "../../assets/interacLogo.png";
import visaLogo from "../../assets/visaLogo.png";
import mastercardLogo from "../../assets/mastercardLogo.png";

// Configuración de enlaces centralizada
const footerLinks = {
  quickLinks: [
    { label: "Track Your Order", path: "/track-order" },
    { label: "Shop All", path: "/shop-all" },
    { label: "Flower", path: "/flower" },
    { label: "Edibles", path: "/edibles" },
    { label: "Concentrates", path: "/concentrates" },
    { label: "Refunds", path: "/refunds" },
    { label: "Mushrooms", path: "/mushrooms" },
    { label: "Promotions/Bundles", path: "/promotions" },
    { label: "Support", path: "/support" },
    { label: "Reward", path: "/reward" },
    { label: "Blog", path: "/blog" },
    { label: "Shipping Faq", path: "/shipping-faq" },
  ],
  more: [
    { label: "Buy weed online in Canada", path: "/regions/canada" },
    { label: "Buy weed online in New Brunswick", path: "/regions/new-brunswick" },
    { label: "Buy weed online in Prince Edward Island", path: "/regions/prince-edward-island" },
    { label: "Buy weed online in Northwest Territories", path: "/regions/northwest-territories" },
    { label: "Buy weed online in Saskatchewan", path: "/regions/saskatchewan" },
    { label: "Buy weed online in Manitoba", path: "/regions/manitoba" },
    { label: "Buy weed online in Quebec", path: "/regions/quebec" },
    { label: "Buy weed online in British Columbia", path: "/regions/british-columbia" },
    { label: "Buy weed online in Ontario", path: "/regions/ontario" },
    { label: "Buy weed online in Alberta", path: "/regions/alberta" },
  ],
  legal: [
    { label: "Out Of Stock", path: "/out-of-stock" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-conditions" },
  ],
};

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@topshelfbc.cc").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1A1E26] to-[#01100B] w-full font-lexend text-base text-[#9D9EA2] px-8 py-12">
      <div className="max-w-[1500px] mx-auto flex flex-col justify-between gap-12">
        
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-32 xl:gap-120">
          
          {/* Logo y descripcion */}
          <div className="max-w-[300px]"> 
            <Link to="/">
              <img 
                src={logoTopShelf} 
                alt="Logo-Footer" 
                className="cursor-pointer brightness-0 invert mb-6" 
                width="173px" height="42px"
              />
            </Link>
            <p className="text-sm">
              #1 Canadian top rated online dispensary that meets the customers needs 
              in every single medical marijuana aspect. The team here at TopShelfBC is 
              heavily involved in the Canadian cannabis industry for over 15 years. 
              We strive to provide the top quality products, service and care at the 
              lowest prices you’ll ever find.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col justify-between flex-wrap gap-12">
            
            {/* QUICK LINK */}
            <div className="flex flex-col gap-3 min-w-[150px]">
              <h3 className="text-xl font-medium text-white">QUICK LINK</h3>
              <div className='flex flex-col md:flex-row lg:flex-row gap-6 min-[770px]:gap-52 flex-wrap'>
                <ul className="flex flex-col gap-2">
                  {footerLinks.quickLinks.slice(0, 6).map(link => (
                    <li key={link.label}>
                      <Link to={link.path} className="hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-2">
                  {footerLinks.quickLinks.slice(6).map(link => (
                    <li key={link.label}>
                      <Link to={link.path} className="hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-3 min-w-[150px]">
              <h3 className="text-xl font-medium text-white">CONTACT US</h3>
              <button
                onClick={handleCopyEmail}
                className="hover:text-white underline text-left"
              >
                info@topshelfbc.cc
              </button>
              {copied && (
                <span className="text-green-400 text-sm">✅ Copiado al portapapeles</span>
              )}
            </div>

            {/* Más */}
            <div className="flex flex-col gap-3 min-w-[150px]">
              <h3 className="text-xl font-medium text-white">MORE</h3>
              <div className="flex flex-row gap-8 flex-wrap">
                <ul className="flex flex-col gap-2">
                  {footerLinks.more.slice(0, 5).map(link => (
                    <li key={link.label}>
                      <Link to={link.path} className="hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-2">
                  {footerLinks.more.slice(5).map(link => (
                    <li key={link.label}>
                      <Link to={link.path} className="hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formas de pago */}
            <div className="flex flex-row gap-10 items-center">
              <img src={visaLogo} alt="Visa" width="56" height="32" />
              <img src={mastercardLogo} alt="Mastercard" width="56" height="32" />
              <img src={bitcoinLogo} alt="Bitcoin" width="56" height="32" />
              <img src={interacLogo} alt="Interac" width="56" height="32" />
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="mt-12 border-t border-[#46494F] pt-4 flex flex-row justify-between items-center gap-4 text-sm">
          <p>© 2022 Top Shelf BC. All Rights Reserved</p>
          <ul className="flex flex-row gap-4 flex-wrap justify-center">
            {footerLinks.legal.map(link => (
              <li key={link.label}>
                <Link to={link.path} className="hover:text-white">{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer;
