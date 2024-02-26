import s from './Plus.module.css';
import plus from '../../img/plus.svg'
import { NavLink } from "react-router-dom";


const PlusBtn = () =>{
    return (
        <img className={s.plus} src={plus} />
    )
}

export default PlusBtn;
