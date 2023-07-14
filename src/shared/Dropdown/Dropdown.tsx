import React, { useState } from "react";
import { useClose } from "../../utils/hooks/useClose";
import styles from './dropdown.scss';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  classN?: string
}

export function Dropdown({button, children, classN}: IDropdownProps) {
  const [isDropdawn, setIsDropdawn] = useState(false)
  const onClose = () => {setIsDropdawn(false)}

  const [ref] = useClose(onClose, isDropdawn)

  return (
    <div className={styles.container} ref={ref}>
      {button}
      {isDropdawn && (
        <div className={classN}>
          {children}
        </div>
      )}
    </div>
  )
}
