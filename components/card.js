import Image from "next/image"
import earth from "../public/dark_earth.jpg" 
import grist from "../public/grist.jpg"
import wolf from "../public/The_wolf_and_the_woodsman.jpg"

export default function Card() {
    return (
        <>
            <li>
                <>
                <Image alt=" "
                layout="responsive"
                src={earth}
                width={327}
                height={500}
                />
                <h2>Dark Earth</h2>
                <h3>Rebecca Stott</h3>
                </>
            </li>

            <li>
                <>
                <Image alt=" "
                layout="responsive"
                src={grist}
                />
                <h2>Grist</h2>
                <h3>Abra Berens</h3>
                </>
            </li>

            <li>    
                <Image alt=" "
                layout="responsive"
                src={wolf}
                />
                <h2>The wolf and the woodsman</h2>
                <h3>Ava Reid</h3>
            </li>
            </>
    ); 
}