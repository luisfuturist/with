type Page404Props = {
  is404: boolean;
};

export function Page({ is404 }: Page404Props) {
  if (is404) {
    //throw new Error()
    return (
      <div className="flex flex-col gap-1 justify-center items-center mt-20vh">
        <h1 className="text-5xl text-orange-2">404</h1>

        <p className="text-2xl text-gray-2 mb-2">Essa página não foi encontrada.</p>

        <a href="/" className="text-azure-2 border-1 border-azure-2 px-2 py-1">
          Acessar página inicial
        </a>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-1 justify-center items-center mt-20vh">
        <h1 className="text-5xl text-red-2">500</h1>
        <p className="text-2xl text-gray-2">Aconteceu algum erro no servidor.</p>
      </div>
    );
  }
}
