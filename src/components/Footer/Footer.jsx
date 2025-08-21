import './footer.css'
import { Link } from "react-router-dom";
import logoTopShelf from "../../assets/logoTopShelf.png";
import bitcoinLogo from "../../assets/bitcoinLogo.png";
import interacLogo from "../../assets/interacLogo.png";
import visaLogo from "../../assets/visaLogo.png";
import mastercardLogo from "../../assets/mastercardLogo.png";

const Footer = () => {
  return (
    <footer  className="bg-gradient-to-b from-[#1A1E26] to-[#01100B] w-full font-lexend text-base text-[#9D9EA2] px-8 py-12">
        <div className=" max-w-[1500px] mx-auto flex flex-col justify-between gap-12">
            <section className="flex flex-col lg:flex-row gap-12 lg:gap-32 xl:gap-120">
                {/* Logo y descripcion */}
                <div className="max-w-[300px]"> 
                    <Link to="/">
                        <img src={logoTopShelf} alt="Logo-Footer" className="cursor-pointer brightness-0 invert mb-6" width="173px" height="42px"/>
                    </Link>
                    <p className="text-sm">#1 Canadian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you’ll ever find.</p>
                </div>

                {/* Links */}
                <div className="flex flex-col justify-between flex-wrap gap-12">
                    <div  className="flex flex-col gap-3 min-w-[150px]">
                        <h3 className="text-xl font-medium text-white">QUICK LINK</h3>
                        <div className='flex flex-col md:flex-row lg:flex-row gap-6 min-[770px]:gap-52 max-[px]:gap-47md:gap-20 lg:gap-32 2xl:gap-56 flex-wrap'>
                            <ul className="flex flex-col gap-2">
                                <li>Track Your Order</li>
                                <li>Shop All</li>
                                <li>Flower</li>
                                <li>Edibles</li>
                                <li>Concentrates</li>
                                <li>Refunds</li>
                            </ul >
                            <ul className="flex flex-col gap-2">
                                <li>Mushrooms</li>
                                <li>Promotions/Bundles</li>
                                <li>Support</li>
                                <li>Reward</li>
                                <li>Blog</li>
                                <li>Shippong Faq</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col gap-3 min-w-[150px]">
                        <h3 className="text-xl font-medium text-white">CONTACT US</h3>
                        <p>info@topshelfbc.cc</p>
                    </div>

                    {/* Más */}
                    <div className="flex flex-col gap-3 min-w-[150px]">
                        <h3 className="text-xl font-medium text-white">MORE</h3>
                        <div className="flex flex-row gap-8 flex-wrap">
                            <ul className="flex flex-col gap-2">
                                <li>Buy weed online in Canada</li>
                                <li>Buy weed online in New Brunswick</li>
                                <li>Buy weed online in Prince Edward Island</li>
                                <li>Buy weed online in Northwest Territories</li>
                                <li>Buy weed online in Saskatchewan</li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>Buy weed online in Manitoba</li>
                                <li>Buy weed online in Quitebec</li>
                                <li>Buy weed online in British Columbia</li>
                                <li>Buy weed online in Ontario</li>
                                <li>Buy weed online in Alberta</li>
                            </ul>
                        </div>
                    </div>

                    {/* Formas de pago */}
                    <div className="flex flex-row gap-10 items-center">
                        <img src={visaLogo} alt="Forma de pago visa" className="cursor-pointer" width="56px" height="32px"/>
                        <img src={mastercardLogo} alt="Forma de pago mastercard" className="cursor-pointer" width="56px" height="32px"/>
                        <img src={bitcoinLogo} alt="Forma de pago bitcoin" className="cursor-pointer" width="56px" height="32px"/>
                        <img src={interacLogo} alt="Forma de pago interac" className="cursor-pointer" width="56px" height="32px"/>
                    </div>
                </div>
            </section>

            <section className="mt-12 border-t border-gray-[#46494F] pt-4 flex flex-row justify-between items-center gap-4 text-sm">
                <p>© 2022 Top Shelf BC. All Rights Reserved</p>
                <ul className="flex flex-row gap-4 flex-wrap justify-center ">
                    <li>Out Of Stock</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </section>
        </div>
    </footer>
  )
}

export default Footer