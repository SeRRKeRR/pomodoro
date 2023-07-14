import React, { ButtonHTMLAttributes } from "react";
import { noop } from "../../utils/ts/noop";

export interface IItem {
  text: string
  id: string
  onClick?: (text: string) => void
  className?: string
  As?: 'a'|'li'|'button'|'div'
  href?: string
  children?: React.ReactNode
}

interface IGenericListProps {
  list: IItem[]
}

export function GenericList({list}: IGenericListProps) {
  return (
    <>
      {list.map(({
        As = 'li',
        text,
        onClick = noop,
        className,
        id,
        href,
        children
        }) => (
        <As
          className={className}
          onClick={() => onClick(text)}
          key={id}
          href={href}
        >
          {children}
          {text}
        </As>
      ))}
    </>
  )
}
