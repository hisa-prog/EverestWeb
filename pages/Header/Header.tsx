import { HeaderHome, TitleHeader  } from '../../components/layouts';
import Image from 'next/image'
import icon from '../../public/imageSource/icon.png';

export default function Header () {

    return (
        <HeaderHome>
            <TitleHeader>E</TitleHeader>
            <TitleHeader>V</TitleHeader>
            <TitleHeader>E</TitleHeader>
            <TitleHeader>R</TitleHeader>
            <TitleHeader>E</TitleHeader>
            <TitleHeader>S</TitleHeader>
            <TitleHeader>T</TitleHeader>
            <Image src={icon}/>
        </HeaderHome>
    )

}