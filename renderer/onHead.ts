import { PageContext } from "./App";

export default (pageContext: PageContext) => {
  const title = pageContext.config.title || "With";
  const desc =
    pageContext.config.description ||
    "Aulas online e particular de Inglês Básico para adultos.";
  const keywords =
    pageContext.config.keywords ||
    "English, Inglês, tutor, básico, aula, aprender, começar";

  return { title, desc, keywords };
}
