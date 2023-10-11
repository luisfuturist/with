export default () => {
  return (
    <div className="py-16 grid-container h-200 w-200 relative">
      <div className="container mx-auto text-center max-w-[1000px]">
        <header className="absolute w-full z-2 top-0 left-0 bg-white">
          <div className="p-6">
            <a href="/" className="flex gap-2 items-center text-2xl w-fit">
              <span className="flex gap-1 items-center whitespace-nowrap text-gray-2">
                <img
                  src="/logo-light.png"
                  width="24"
                  height="24"
                  alt="With Luis Float Logo"
                  className="mr-1"
                />
                <span className="font-bold text-1xl text-gray-1">With</span>
                Luis Float
              </span>
            </a>
          </div>
        </header>

        <h1 className="text-5xl mb-8 text-black">
          Você quer aprender <strong className="text-azure-2">inglês</strong>,
          <br />
          Mas não sabe por onde começar?
        </h1>

        <p className="text-4xl mb-8 text-gray-1">
          Aprenda inglês <span className="text-black">básico</span>,{" "}
          <span className="text-black1">online</span> e{" "}
          <span className="text-black">particular</span>!
        </p>

        <div className=" flex flex-col gap-2 w-full">
          <p className="text-azure-2 mb-0 text-2xl">Entre em contato agora</p>
          <div className="flex gap-2 justify-center flex-wrap text-4xl">
            <a
              href="https://wa.me/5547999216685"
              className="font-400 hover:border-green-4 text-gray-1 py-2 px-4 rounded-[1px] flex gap-1 items-center"
            >
              <i className="bi-whatsapp text-green-2" />
              <span className="text-green-2 mr-2">Whats:</span>
              <span className="text-black">(47) 9 9921-6685</span>
            </a>
          </div>
        </div>

        <footer className="absolute w-full z-2 bottom-0 left-0 bg-white">
          <div className="p-4">
            <a href="/" className="flex gap-2 items-center text-2xl">
              Acesse <span className="text-azure-1">with.luisfloat.com</span>{" "}
              para mais informações.
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
