import { reports } from "../../data/reports";

export function Page() {
  const featuresData = [
    {
      label: "Horário Flexível",
      description:
        "Adapte as aulas ao seu horário. Escolha o momento que melhor se ajusta à sua rotina.",
    },
    {
      label: "Diversos Canais",
      description:
        "Tenha flexibilidade na comunicação. Utilize Discord, Telegram e WhatsApp para facilitar seu aprendizado.",
    },
    {
      label: "Particular",
      description:
        "Aulas personalizadas para atender às suas preferências de aprendizado, focando nas suas necessidades específicas.",
    },
    {
      label: "Online",
      description:
        "Aprenda de qualquer lugar. As aulas acontecem online, proporcionando conveniência e acessibilidade.",
    },
  ];

  const pricingOptions = [
    {
      title: "Primeira Aula",
      description: "Experimente uma aula de 1 hora para conhecer meu método.",
      price: "R$50",
    },
    {
      title: "Pacote de 4 horas",
      description:
        "Economize e profunde seu aprendizado com meu pacote de 4 horas.",
      price: "R$200",
      promo: "R$175",
    },
  ];

  const email = "contato@luisfloat.com";

  return (
    <>
      <header className="py-16 grid-container min-h-[20rem]">
        <div className="container mx-auto text-center max-w-[1000px]">
          <h1 className="text-4xl mb-4 text-gray-2">
            Precisando de um tutor de Inglês?
          </h1>
          <p className="text-2xl mb-8 text-gray-3">
            Aprenda Inglês <span className="text-azure-2">básico</span>,{" "}
            <span className="text-azure-2">online</span> e{" "}
            <span className="text-azure-2">particular</span>!
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            <a
              href="https://wa.me/5547999216685"
              className="border-green-2 font-400 border-1 hover:border-green-4 text-gray-2 py-1 px-2 rounded-[1px]"
            >
              WhatsApp <span className="underline">47 99921-6685</span>
            </a>

            <a
              href="https://wa.me/5547999216685"
              className="border-azure-2 font-400 border-1 hover:border-azure-4 text-gray-2 py-1 px-2 rounded-[1px]"
            >
              Telegram <span className="underline">luisfloat</span>
            </a>

            <span className="border-blue-2 font-400 border-1 text-gray-2 py-1 px-2 rounded-[1px]">
              Discord <span>luisfloat</span>
            </span>
          </div>
        </div>
      </header>

      <div className="px-4 max-w-[1000px] mx-auto mb-4">
        <section className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 border-1 border-gray-8 rounded-[4px]"
              >
                <p className="text-2xl text-azure-2">{feature.label}</p>
                <p className="text-1xl text-gray-3 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8" id="relatos">
          <h2 className="text-2xl text-azure-2 mb-2">Relatos Sobre Mim</h2>

          <p className="text-1xl text-gray-3 mb-4">
            Confira o que dizem sobre mim e minha experiência no aprendizado de
            Inglês.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {reports.map((person, index) => (
              <div
                key={index}
                className="bg-white p-4 flex flex-col gap-2 rounded-[4px] border-1 border-gray-8"
              >
                <p className="text-md text-gray-3 mt-2">{person.feedback}</p>
                <a href={person.website} className="text-sm text-azure-1 w-max">
                  — {person.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8" id="precos">
          <h2 className="text-2xl mb-6 text-azure-2">Opções de Preços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-[4px] border-1 border-gray-8 border-b-4"
              >
                <h3 className="text-xl mb-2 text-azure-2">{option.title}</h3>

                <p className="text-gray-600">{option.description}</p>

                <p className="text-2xl font-bold text-azure-4 mt-4 flex gap-1 font-mono">
                  {option.promo ? (
                    <>
                      <span className="text-red-2 line-through">
                        {option.price}
                      </span>
                      <span className="text-azure-4">{option.promo}</span>
                    </>
                  ) : (
                    <>{option.price}</>
                  )}
                </p>
              </div>
            ))}
            <div />
            <div />
          </div>
        </section>

        <section className="py-4" id="horarios">
          <h2 className="text-2xl text-azure-2 mb-4">
            Horários Flexíveis para Você
          </h2>

          <p className="mb-4 text-gray-2">
            Se sabe que sua agenda é ocupada. É por isso que ofereço horários
            flexíveis que se adaptam à sua vida.
          </p>

          <ul className="list-disc pl-4 mb-4">
            <li className="mb-1 text-gray-2">
              Escolha o horário que melhor se ajusta a você, seja de manhã,
              tarde ou noite.
            </li>
            <li className="mb-1 text-gray-2">
              Você também pode escolher o dia ou dias da semana que deseja fazer
              suas aulas.
            </li>
          </ul>

          <p className="text-gray-2">
            O aprendizado de Inglês deve ser conveniente para você!
          </p>
        </section>

        <hr className="border-b-gray-7 border-b-1 mt-4" />

        <section className="py-8" id="contato">
          <h2 className="text-2xl text-azure-2 mb-4">Contato</h2>

          <p className="mb-4 text-gray-1">
            Estou aqui para ajudar. Se tiver alguma dúvida, precisar de
            informações adicionais ou quiser começar suas aulas, entre em
            contato comigo através dos seguintes canais:
          </p>

          <ul className="list-disc pl-4 w-max">
            <li className="mb-2">
              <a
                href="https://wa.me/5547999216685"
                target="_blank"
                className="text-gray-2 hover:text-azure-2 flex items-center gap-1"
              >
                <i className="bi-whatsapp"></i> Whatsapp: (47) 99921-6685
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://t.me/luisfloat"
                target="_blank"
                className="text-gray-2 hover:text-azure-2 flex items-center gap-1"
              >
                <i className="bi-telegram"></i> Telegram: (47) 99921-6685
              </a>
            </li>
            <li className="mb-2">
              <span className="text-gray-2 flex items-center gap-1">
                <i className="bi-discord"></i> Discord: luisfloat
              </span>
            </li>
            <li className="mb-2">
              <a
                href="mailto:contato@luisfloat.com"
                target="_blank"
                className="text-gray-2 hover:text-azure-2 flex items-center gap-1"
              >
                <i className="bi-envelope"></i> E-mail: {email}
              </a>
            </li>
          </ul>

          <p className="mt-4 text-gray-1">
            Estou ansiosos para ouvir de você e ajudá-lo no começo da sua
            jornada de aprendizado de Inglês!
          </p>
        </section>
      </div>
    </>
  );
}
