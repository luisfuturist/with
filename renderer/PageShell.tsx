import "@unocss/reset/tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
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
        <div className="min-h-screen">
          <header className="fixed top-0 w-full h-min py-2 bg-white z-2 text-gray-9 border-b-1 border-b-azure-2">
            <div className="px-4 max-w-[1000px] mx-auto flex justify-between items-center py-2">
              <Logo />
              <Nav />
            </div>
          </header>

          <main className="mt-[73px]">{children}</main>

          <Footer />
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Logo() {
  return (
    <div>
      <a
        href="/"
        className="text-1xl text-azure-2 font-400 flex gap-2 items-center"
      >
        <img src="/logo-light.png" width="24" height="24" />
        <span className="flex gap-1">
          <span className="font-bold">With</span> Luis Float
        </span>
      </a>
    </div>
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

  return (
    <nav>
      <ul className="flex space-x-4">
        {navItems.map((item, i) => (
          <li key={i}>
            <a
              href={item.href}
              className="no-print has-underline text-md text-gray-1 hover:text-azure-2"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
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
      <div className="mx-auto flex justify-between items-center max-w-[1000px] px-4">
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
        <div className="flex space-x-4">
          {footerLinks.map((link, i) => (
            <a
              href={link.href}
              target="_blank"
              className={`text-gray-1 flex gap-1 items-center ${link.href ? "has-underline" : ""}`}
              key={i}
            >
              <i className={link.icon}></i>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
