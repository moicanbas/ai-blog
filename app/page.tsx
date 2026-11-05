import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Mail } from "lucide-react";
import { FaTiktok, FaYoutube } from "react-icons/fa6";
import ContactForm from "@/components/home/ContactForm";

const emailHref =
  "mailto:mocadevia@gmail.com?subject=Quiero%20contactar%20tus%20servicios&body=Hola%20Mois%C3%A9s%2C%20me%20gust%C3%B3%20tu%20perfil%20y%20quisiera%20contactarte%20para%20conversar%20sobre%20tus%20servicios.";

export default function HomePage() {
  return (
        <div className="home-page">
          <div className="home-shell">
            <section className="home-intro" aria-labelledby="home-title">
              <div className="home-profile">
                <Image
                  src="/avatar_2.jpeg"
                  alt="Moisés Cantillo"
                  width={112}
                  height={112}
                  priority
                  className="home-avatar"
                />
                <span className="home-availability"><span /> Backend + IA</span>
              </div>
              <p className="home-eyebrow">HOLA, SOY MOISÉS CANTILLO</p>
              <h1 id="home-title">Código, ideas y un poco de <em>inteligencia artificial.</em></h1>
              <p className="home-description">
                Desarrollo soluciones backend y comparto lo que aprendo sobre IA, Python y tecnología.
              </p>
              <Link className="home-about" href="/about">Conoce más sobre mí <ArrowRight size={17} /></Link>
            </section>

            <section className="home-links" aria-labelledby="links-title">
              <div className="home-section-heading">
                <div><span>EXPLORA</span><h2 id="links-title">Vamos al grano.</h2></div>
                <span className="home-index">01 / 02</span>
              </div>
              <div className="link-list">
                <Link href="/blog" className="home-link home-link-featured">
                  <span className="link-icon"><BookOpen size={21} /></span>
                  <span className="link-copy"><strong>Lee el blog</strong><small>IA y tecnología, sin enredos</small></span>
                  <ArrowRight className="link-arrow" size={19} />
                </Link>
                <a href="https://www.tiktok.com/@mocadevia" target="_blank" rel="noopener noreferrer" className="home-link">
                  <span className="link-icon"><FaTiktok size={20} /></span>
                  <span className="link-copy"><strong>TikTok</strong><small>@mocadevia</small></span>
                  <ArrowRight className="link-arrow" size={19} />
                </a>
                <a href="https://www.youtube.com/@mocadevia?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="home-link">
                  <span className="link-icon"><FaYoutube size={21} /></span>
                  <span className="link-copy"><strong>YouTube</strong><small>Suscríbete a @mocadevia</small></span>
                  <ArrowRight className="link-arrow" size={19} />
                </a>
                <a href={emailHref} className="home-link">
                  <span className="link-icon"><Mail size={21} /></span>
                  <span className="link-copy"><strong>Escríbeme un correo</strong><small>Hablemos de tu proyecto</small></span>
                  <ArrowRight className="link-arrow" size={19} />
                </a>
              </div>
              <a href="#contacto" className="home-contact-jump">O déjame un mensaje aquí <ArrowDown size={16} /></a>
            </section>
          </div>
          <section id="contacto" className="contact-section" aria-labelledby="contact-title">
            <div className="contact-intro">
              <span className="home-eyebrow">CONTACTO / 02</span>
              <h2 id="contact-title">¿Tienes algo en mente?</h2>
              <p>Cuéntame un poco sobre tu proyecto y conversemos.</p>
              <a href={emailHref}>Prefiero escribir un correo <ArrowRight size={16} /></a>
            </div>
            <ContactForm />
          </section>
        </div>
  );
}