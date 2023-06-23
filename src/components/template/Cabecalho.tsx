import { useTheme } from "next-themes";
import Titulo from "./Titulo";

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <br />
        <button onClick={() => setTheme("light")}>Light</button>
      </div>
    </div>
  );
}
