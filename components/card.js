
import styled from "styled-components"; 
import Image from "next/image"
import earth from "../public/dark_earth.jpg" 
import grist from "../public/grist.jpg"
import wolf from "../public/The_wolf_and_the_woodsman.jpg"

export default function Card() {
    return (
        <>
            <li>
                <>
                <div>
                <Image alt=" "
                layout="intrinsic"
                src="/earth"
                width={128}
                height={173}
                />
                </div>
                <h2>Dark Earth</h2>
                <h3>Rebecca Stott</h3>
                </>
            </li>

            <li>
                <>
                <Image alt=" "
                layout="intrinsic"
                src="/grist"
                width={128}
                height={173}
                />
                <h2>Grist</h2>
                <h3>Abra Berens</h3>
                
                </>
            </li>

            <li>    
                <Image alt=" "
                layout="intrinsic"
                src="/wolf"
                width={128}
                height={173}
                />
                <h2>The wolf and the woodsman</h2>
                <h3>Ava Reid</h3>
            </li>
            </>
    ); 
}

const Container = styled.div`
height: 100px; 
width: 100px; 
border: 1px solid black; 
`
