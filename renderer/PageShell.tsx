import "@unocss/reset/tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import "virtual:uno.css";
import "./global.css";
import "./print.css";
import type { PageContext } from "./app";
import { PageContextProvider } from "../hooks/usePageContext";

export function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div style={{ minHeight: "calc(100vh - 3.5rem)" }}>
          <header className="fixed w-full z-2 top-0 left-0 bg-white border-b border-b-azure-1">
            <Nav />
          </header>

          <main className="mt-[3.5rem]">{children}</main>

          <Footer />
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Brand() {
  return (
    <a href="/" className="flex gap-2 items-center">
      <img
        src="/logo-light.png"
        width="24"
        height="24"
        alt="With Luis Float Logo"
      />
      <span className="flex gap-1 items-center whitespace-nowrap text-azure-1">
        <span className="font-bold">With</span> Luis Float
      </span>
    </a>
  );
}

function Nav() {
  const navItems = [
    {
      label: "Relatos",
      href: "#relatos",
    },
    {
      label: "Preços",
      href: "#precos",
    },
    {
      label: "Horários",
      href: "#horarios",
    },
    {
      label: "Contato",
      href: "#contato",
    },
  ];
  const [isVisible, setVisible] = useState(false);

  const toggle = () => setVisible((s) => !s);

  return (
    <nav className="max-w-[1000px] mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Brand />

        <div className="flex md:order-1">
          <button
            type="button"
            className="inline-flex items-center p-2 w-5 h-5 justify-center text-sm text-azure-1 rounded-[1px] md:hidden hover:text-azure-2"
            onClick={toggle}
            aria-label="Abrir menu"
          >
            <i
              className={`text-1xl ${isVisible ? "bi-dash-lg" : "bi-plus-lg"}`}
            />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-2 ${
            isVisible ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col mt-4 bg-white md:flex-row md:gap-4 md:mt-0 md:bg-white">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="block py-2 pr-4 text-azure-1 rounded hover:text-azure-2 md:hover:bg-transparent md:hover:text-azure-2 md:p-0"
                  onClick={toggle}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const footerLinks = [
    {
      href: "https://wa.me/5547999216685",
      icon: "bi-whatsapp",
      label: "47 99921-6685",
    },
    {
      href: "https://t.me/luisfloat",
      icon: "bi-telegram",
      label: "@luisfloat",
    },
    {
      icon: "bi-discord",
      label: "luisfloat",
    },
  ];

  return (
    <footer className="text-gray-1 py-4 sticky top-[100vh] border-t-1 border-t-azure-2">
      <div className="mx-auto flex flex-wrap gap-2 justify-between items-center max-w-[1000px] px-4">
        <div>
          <p className="flex items-center gap-1">
            W/ <i className="text-red bi-heart-fill text-sm"></i> by{" "}
            <a
              href="https://luisfloat.com"
              className="has-underline text-azure-1"
            >
              Luis Float
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link, i) =>
            React.createElement(
              link.href ? "a" : "span",
              {
                key: i,
                href: link.href,
                target: "_blank",
                className: `text-gray-1 flex gap-1 items-center ${
                  link.href ? "has-underline" : ""
                }`,
              },
              <i className={link.icon}></i>,
              link.label
            )
          )}
        </div>
      </div>
    </footer>
  );
}
