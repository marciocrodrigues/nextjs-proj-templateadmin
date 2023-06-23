import { ReactNode } from "react";

interface ConteudoProps {
  children?: ReactNode;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
       flex flex-col mt-7
       dark:text-gray-200
    `}
    >
      {props.children}
    </div>
  );
}
