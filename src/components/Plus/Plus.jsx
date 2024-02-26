import s from './Plus.module.css';
import { NavLink, useNavigate } from "react-router-dom";


const PlusBtn = () =>{

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/ProjectCreationWindow')
    }

    return (
        <div className={s.btn}>
            <button onClick={handleClick} className={s.sign}>+</button>
        </div>
        
    )
}

export default PlusBtn;
