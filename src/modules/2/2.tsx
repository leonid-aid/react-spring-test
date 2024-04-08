import { Button } from "../components"
import * as Ss from "../styles"
import * as S from "./2-styles"
import card1 from "../../images/industrial-port-container-yard_1.jpg"
import card2 from "../../images/truck-vehicle-with-trailers-back.jpg"
import card3 from "../../images/aerial-view-container-cargo-ship.jpg"
import { useSprings, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

export const Part2=()=>{

/*     from: { opacity: 0, transform: 'scale(0)'},
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 10, friction: 5 }, */

/*     from: { transform: 'translate(0%, 100%)'},
    to: { transform: 'translate(0%, 0%)' },
    config: { tension: 20, friction: 5 }, */


    const [ref1, inView1] = useInView({ threshold: 0.5 })
    const [ref2, inView2] = useInView({ threshold: 0.1 })   

    const animations = useSprings(2, [
        {
            opacity: inView1 ? 1 : 0,
            transform: inView1 ? 'scale(1)' : 'scale(0)',
            config: { tension: 10, friction: 5 }
        },
        {
            opacity: inView2 ? 1 : 0,
            transform: inView2 ? 'translate(0%, 0%)' : 'translate(0%, 40%)',
            config: { tension: 20, friction: 5 }
        }
    ])

    return(
        <>
        <S.BackGround1>
        <animated.div ref={ref1} style={animations[0]}><Ss.TitleForText color="white">Мы соединяем мир </Ss.TitleForText></animated.div>
        <animated.div ref={ref1} style={animations[0]}><Ss.Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. </Ss.Text></animated.div>
        </S.BackGround1>

        <S.BackGround2>
        <S.CardsWrap  ref={ref2}>
            <S.AnimatedCard style={animations[1]}>
                <img src={card1}></img>
                <Ss.BigTitle>Наша стратегия</Ss.BigTitle>
                <Ss.Text color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. </Ss.Text>
            </S.AnimatedCard>
            <S.AnimatedCard style={animations[1]}>
            <img src={card2}></img>
                <Ss.BigTitle>Лидерство</Ss.BigTitle>
                <Ss.Text color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. </Ss.Text>
            </S.AnimatedCard>
            <S.AnimatedCard style={animations[1]}>
            <img src={card3}></img>
                <Ss.BigTitle>Инновации</Ss.BigTitle>
                <Ss.Text color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. </Ss.Text>
            </S.AnimatedCard>
        </S.CardsWrap>
            <div>
            <Button label="Узнать больше" />
            </div>
        </S.BackGround2>

        </>
    )
}