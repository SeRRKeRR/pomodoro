import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reduser';
import { changeWeek } from '../../../store/statisticsActive/statisticsActivereduser';
import { useClose } from '../../../utils/hooks/useClose';
import { generateId } from '../../../utils/ts/generateRandomIndex';
import { GenericList } from '../../GenericList';
import { MenuBtn } from '../MenuBtn';
import styles from './dropdownmenu.scss';

export function DropdownMenu() {
  const week = useSelector<RootState, string>(state => state.statisticsActive.week)

  let activeWeek = 'Эта неделя'
  let lastWeek = 'Прошедшая неделя'
  let beforeLastWeek = 'Две недели назад'
  if (week === 'lastWeek') {
    activeWeek = 'Прошедшая неделя'
    lastWeek = 'Эта неделя'
    beforeLastWeek = 'Две недели назад'
  } else if (week === 'beforeLastWeek') {
    activeWeek = 'Две недели назад'
    lastWeek = 'Эта неделя'
    beforeLastWeek = 'Прошедшая неделя'
  } else if (week === 'nowWeek') {
    activeWeek = 'Эта неделя'
    lastWeek = 'Прошедшая неделя'
    beforeLastWeek = 'Две недели назад'
  }

  const dispatch = useDispatch()
  const [isDropdawn, setIsDropdawn] = useState(false)
  const onClickCallback = (text: string) => {
    setIsDropdawn(!isDropdawn)

    let post
    if (text === 'Эта неделя') {
      post = 'nowWeek'
    } else if (text === 'Прошедшая неделя') {
      post = 'lastWeek'
    } else if (text === 'Две недели назад') {
      post = 'beforeLastWeek'
    }

    dispatch(changeWeek(post))
  }

  const onClickCallback1 = () => setIsDropdawn(!isDropdawn)

  const onClose = () => {setIsDropdawn(false)}
  const btn = 'button' as const
  const btnClass = styles.menuListBtn
  const LIST = [
    {As: btn, onClick: onClickCallback, className: btnClass, text: lastWeek},
    {As: btn, onClick: onClickCallback, className: btnClass, text: beforeLastWeek}
  ].map(generateId)

  const [ref] = useClose(onClose, isDropdawn)

  return (
    <div className={styles.container} ref={ref}>
      <MenuBtn text={activeWeek} onClick={onClickCallback1} active={isDropdawn}/>
      {isDropdawn && (
        <div className={styles.menuList}>
          <GenericList list={LIST} />
        </div>
      )}
    </div>
  );
}
