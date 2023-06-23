import Link from "next/link";
import { ReactNode } from "react";

interface MenuItemProps {
  texto: string;
  icone: ReactNode;
  url?: string;
  className?: string;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarConteudo() {
    return (
      <span
        className={`
            flex flex-col justify-center items-center
            h-20 w-20 text-gray-600 dark:text-gray-200
            ${props.className}
        `}
      >
        {props.icone}
        <span
          className={`
            text-xs font-light
          `}
        >
          {props.texto}
        </span>
      </span>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
        `}
    >
      {props.url ? (
        <Link href={props.url}>{renderizarConteudo()}</Link>
      ) : (
        renderizarConteudo()
      )}
    </li>
  );
}
