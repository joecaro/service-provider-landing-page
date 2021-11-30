import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import LinkSmoothScroll from "../components/LinkSmoothScroll";
import Fade from "react-reveal/Fade";

export default function Home() {
  const [openDetail, setOpenDetail] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [nav, setNav] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPos);

    return () => {
      window.removeEventListener("scroll", updateScrollPos);
    };
  }, []);

  const updateScrollPos = () => {
    setScrollPos(window.scrollY);
    console.log(window.scrollY);
  };

  const handleDetailButtonClick = (num) => {
    if (openDetail === num) setOpenDetail(null);
    else setOpenDetail(num);
    console.log(num);
  };

  const handleFaqButtonClick = (num) => {
    if (openFaq === num) setOpenFaq(null);
    else setOpenFaq(num);
    console.log(num);
  };

  const handleToggleNav = () => {
    setNav(!nav);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll talk soon.");
  };

  return (
    <main id='main'>
      <Head>
        <title>Template Landing Page</title>
        <meta name='description' content='Template Landing Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Fade bottom when={scrollPos >= 160}>
        <div className='top-right'>
          <LinkSmoothScroll loc='header'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z'
              />
            </svg>
          </LinkSmoothScroll>
        </div>
      </Fade>
      <header id='header'>
        <div className='desktop-header'>
          <div className='logo styled-font'>Company Name</div>
          <nav className='desktop-nav'>
            <LinkSmoothScroll loc='services'>Services</LinkSmoothScroll>
            <LinkSmoothScroll loc='about'>About</LinkSmoothScroll>
            <LinkSmoothScroll loc='pricing'>Pricing</LinkSmoothScroll>
            <LinkSmoothScroll loc='faq'>FAQ</LinkSmoothScroll>
          </nav>
          <div className='actions'>
            <div className='icon'>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='26'
                  fill='currentColor'
                  viewBox='0 0 16 16'>
                  <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                </svg>
              </a>
            </div>
            <div className='icon'>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='26'
                  fill='currentColor'
                  viewBox='0 0 16 16'>
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                </svg>
              </a>
            </div>
            <div className='login'>
              <a>
                <button className='button-inverted'>Contact</button>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className='mobile-header'>
          <div className='logo styled-font'>Company Name</div>
          <div onClick={handleToggleNav} className='hamburger'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </div>
          <nav open={nav ? "open" : ""} className='mobile-nav'>
            <div className='mobile-links'>
              <LinkSmoothScroll onClick={handleToggleNav} loc='services'>
                Services
              </LinkSmoothScroll>
              <LinkSmoothScroll onClick={handleToggleNav} loc='about'>
                About
              </LinkSmoothScroll>
              <LinkSmoothScroll onClick={handleToggleNav} loc='pricing'>
                Pricing
              </LinkSmoothScroll>
              <LinkSmoothScroll onClick={handleToggleNav} loc='faq'>
                FAQ
              </LinkSmoothScroll>
            </div>
            <div className='mobile-actions'>
              <div className='mobile-icon'>
                <a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='26'
                    height='26'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                  </svg>
                </a>
              </div>
              <div className='mobile-icon'>
                <a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='26'
                    height='26'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='login'>
              <a>
                <button className='button'>Contact</button>{" "}
              </a>
            </div>
          </nav>
        </div>
      </header>
      <section className='two-col'>
        <div className='section-text'>
          <h1 className='styled-font'>Company Name</h1>

          <p className='hero-text'>
            Cupidatat duis ipsum non eiusmod. Duis non id magna sint ex aute.
            Veniam in aliquip anim velit id cillum enim et irure magna
            exercitation quis ad duis.
          </p>
          <a>
            <button className='button styled-font'>Get Started</button>
          </a>
        </div>
        <div className='section-image'>
          <Image
            placeholder='blur'
            blurDataURL='https://res.cloudinary.com/joecarothers/image/upload/v1638252275/misc/s1_small_ie0ozw.jpg'
            src='https://res.cloudinary.com/joecarothers/image/upload/v1638252188/misc/s1_ubb8bo.jpg'
            layout='fill'
            alt='picture'></Image>
        </div>
      </section>
      <section className='centered'>
        <div className='details-container'>
          <div className='details'>
            <h2 className='styled-font text-c' id='services'>
              What is My Service?
            </h2>
            <p className='text-c'>
              In id anim nostrud sunt et magna mollit commodo officia. Est
              laboris qui aute enim consectetur dolor duis in nisi minim id
              veniam occaecat ullamco. Et sit labore est amet veniam laboris ad
              velit et. Consequat elit deserunt reprehenderit commodo dolore est
              mollit deserunt non cillum culpa consequat laboris.
            </p>
            <div>
              <button
                onClick={() => handleDetailButtonClick(1)}
                className='details-button text-l'>
                Service Topic
                {openDetail !== 1 && <span>+</span>}
                {openDetail === 1 && <span>-</span>}
              </button>
              <p className='detail-text' open={openDetail === 1 ? "open" : ""}>
                Some details here. Eu proident aute commodo cupidatat fugiat
                pariatur aliquip voluptate labore est mollit.
              </p>
              <button
                onClick={() => handleDetailButtonClick(2)}
                className='details-button text-l'>
                Service Topic
                {openDetail !== 2 && <span>+</span>}
                {openDetail === 2 && <span>-</span>}
              </button>
              <p className='detail-text' open={openDetail === 2 ? "open" : ""}>
                Some details here. Eu proident aute commodo cupidatat fugiat
                pariatur aliquip voluptate labore est mollit.
              </p>
              <button
                onClick={() => handleDetailButtonClick(3)}
                className='details-button text-l'>
                Service Topic
                {openDetail !== 3 && <span>+</span>}
                {openDetail === 3 && <span>-</span>}
              </button>
              <p className='detail-text' open={openDetail === 3 ? "open" : ""}>
                Some details here. Eu proident aute commodo cupidatat fugiat
                pariatur aliquip voluptate labore est mollit.
              </p>
              <button
                onClick={() => handleDetailButtonClick(4)}
                className='details-button text-l'>
                Service Topic
                {openDetail !== 4 && <span>+</span>}
                {openDetail === 4 && <span>-</span>}
              </button>
              <p className='detail-text' open={openDetail === 4 ? "open" : ""}>
                Some details here. Eu proident aute commodo cupidatat fugiat
                pariatur aliquip voluptate labore est mollit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='two-col'>
        <div className='section-image'>
          <Image
            placeholder='blur'
            blurDataURL='https://res.cloudinary.com/joecarothers/image/upload/v1638252072/misc/s2_small_jx45do.jpg'
            src='https://res.cloudinary.com/joecarothers/image/upload/v1638252079/misc/s2_n5hsrb.jpg'
            layout='fill'
            alt='picture'></Image>
        </div>
        <div className='section-text'>
          <h2 id='about'>Hi, we&rsquo;re team.</h2>
          <p>
            Laboris culpa et nulla cupidatat et cupidatat duis voluptate
            consequat aute sint et laborum. Dolor Lorem ea minim velit
            exercitation eu anim sint cillum. Anim eiusmod ipsum quis ad sunt
            aute quis ex. Adipisicing culpa cupidatat adipisicing dolor est ad
            nostrud.
          </p>
          <p>
            Laboris culpa et nulla cupidatat et cupidatat duis voluptate
            consequat aute sint et laborum. Dolor Lorem ea minim velit
            exercitation eu anim sint cillum. Anim eiusmod ipsum quis ad sunt
            aute quis ex. Adipisicing culpa cupidatat adipisicing dolor est ad
            nostrud.
          </p>
          <p>
            Laboris culpa et nulla cupidatat et cupidatat duis voluptate
            consequat aute sint et laborum. Dolor Lorem ea minim velit
            exercitation eu anim sint cillum. Anim eiusmod ipsum quis ad sunt
            aute quis ex. Adipisicing culpa cupidatat adipisicing dolor est ad
            nostrud.
          </p>
          <a>
            <button className='button styled-font'>Learn About Us</button>
          </a>
        </div>
        <div className='accolades'>
          <ul>
            <li>Trusted Partner</li>
            <li>Trusted Partner</li>
            <li>Trusted Partner</li>
            <li>Trusted Partner</li>
            <li>Trusted Partner</li>
          </ul>
        </div>
      </section>
      <section className='section-white'>
        <div className='centered '>
          <div className='pricing-section-container'>
            <h2 className='styled-font text-c' id='pricing'>
              Pricing - Simple and Fair
            </h2>
            <p className='text-c hero-text'>
              Nulla proident veniam consectetur ad labore pariatur ea qui.
              Consectetur fugiat ut aliquip qui et sunt anim. Commodo velit
              proident deserunt sint nisi Lorem officia sit amet eu ipsum ad
              aliquip.
              <br />
              <br />
              See pricing details below:
            </p>
          </div>
          <div className='pricing-container'>
            <div className='pricing'>
              <h3 className='styled-font m0'>Affordable Option</h3>
              <p className='price'> $50/hr</p>
              <ul>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                  </svg>
                  <p className='m0'>service</p>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                  </svg>
                  <p className='m0'>service</p>
                </li>

                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                  </svg>
                  <p className='m0'>service</p>
                </li>
              </ul>
            </div>
            <div className='pricing'>
              <h3 className='styled-font m0'>Premium Option</h3>
              <p className='price'>$150/hr</p>
              <ul>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                  </svg>
                  <p className='m0'>service</p>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                  </svg>
                  <p className='m0'>service</p>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                  </svg>
                  <p className='m0'>service</p>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                  </svg>
                  <p className='m0'>extra service</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='contact'>
          <h2 className='styled-font m0' style={{ fontSize: "2.5rem" }}>
            Ready to talk?
          </h2>
          <form>
            <label>
              First Name:
              <input type='text' placeholder='First Name' required></input>
            </label>
            <label>
              Last Name:
              <input type='text' placeholder='Last Name' required></input>
            </label>
            <label>
              Email:<input type='email' placeholder='Email' required></input>
            </label>
            <button
              className='button styled-font end'
              onClick={handleSubmit}
              type='submit'>
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className='two-col section-light'>
        <div className='section-text'>
          <h2 className='styled-font' id='faq'>
            Frequently Asked Questions
          </h2>
          <div>
            <button
              onClick={() => handleFaqButtonClick(1)}
              className='details-button text-l'>
              What is this Service?
              {openFaq !== 1 && <span>+</span>}
              {openFaq === 1 && <span>-</span>}
            </button>
            <p className='detail-text' open={openFaq === 1 ? "open" : ""}>
              Some details here. Eu proident aute commodo cupidatat fugiat
              pariatur aliquip voluptate labore est mollit.
            </p>
            <button
              onClick={() => handleFaqButtonClick(2)}
              className='details-button text-l'>
              how does this Service Work?
              {openFaq !== 2 && <span>+</span>}
              {openFaq === 2 && <span>-</span>}
            </button>
            <p className='detail-text' open={openFaq === 2 ? "open" : ""}>
              Some details here. Eu proident aute commodo cupidatat fugiat
              pariatur aliquip voluptate labore est mollit.
            </p>
            <button
              onClick={() => handleFaqButtonClick(3)}
              className='details-button text-l'>
              What is included in this Service?
              {openFaq !== 3 && <span>+</span>}
              {openFaq === 3 && <span>-</span>}
            </button>
            <p className='detail-text' open={openFaq === 3 ? "open" : ""}>
              Some details here. Eu proident aute commodo cupidatat fugiat
              pariatur aliquip voluptate labore est mollit.
            </p>
            <button
              onClick={() => handleFaqButtonClick(4)}
              className='details-button text-l'>
              How much does this Service cost?
              {openFaq !== 4 && <span>+</span>}
              {openFaq === 4 && <span>-</span>}
            </button>
            <p className='detail-text' open={openFaq === 4 ? "open" : ""}>
              Some details here. Eu proident aute commodo cupidatat fugiat
              pariatur aliquip voluptate labore est mollit.
            </p>
          </div>
        </div>
        <div className='small-image'>
          <Image
            placeholder='blur'
            blurDataURL='https://res.cloudinary.com/joecarothers/image/upload/v1638252289/misc/s3_small_worxik.jpg'
            src='https://res.cloudinary.com/joecarothers/image/upload/v1638252128/misc/pexels-monstera-6373309_wwptg4.jpg'
            layout='fill'
            alt='picture'></Image>
        </div>
      </section>
      <footer>
        <div className='company-details'>
          <h3 className='styled-font m0'>Company Name</h3>
          <p>Company Name is a great company based out of city, USA.</p>
          <p>Company Name ©️ 2021 | </p>
        </div>
        <div className='sitemap'>
          <ul>
            <h4 className='text-grey'>Sitemap</h4>
            <li>
              <a>link</a>
            </li>
            <li>
              <a>link</a>
            </li>
            <li>
              <a>link</a>
            </li>
            <li>
              <a>link</a>
            </li>
            <li>
              <a>link</a>
            </li>
          </ul>
          <ul>
            <h4 className='text-grey'>Contact</h4>
            <li>
              <a>link</a>
            </li>
            <li>
              <a>link</a>
            </li>
            <li>
              <a>link</a>
            </li>
            <li>
              <a>link</a>
            </li>
            <li>
              <a>link</a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
