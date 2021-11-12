import './Header.css';
import icon from '../img/icon.png';

export default function Header () {

    return (
        <div className="Header">
            <p className="TitleHeader">E</p>
            <p className="TitleHeader">V</p>
            <p className="TitleHeader">E</p>
            <p className="TitleHeader">R</p>
            <p className="TitleHeader">E</p>
            <p className="TitleHeader">S</p>
            <p className="TitleHeader">T</p>
            <img src={icon}/>
        </div>
    )

}