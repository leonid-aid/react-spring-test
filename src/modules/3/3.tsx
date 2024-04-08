import { Button } from "../components"
import * as Ss from "../styles"
import * as S from "./3-styles"
import { animated, useSpring, useSprings } from "react-spring"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer";

export const Part3 = () => {
    const [ref, inView] = useInView({ threshold: 0.5 });

    const [activeAnimation, setActiveAnimation] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);


    const leftBlock = useSpring({
        transform: inView ? 'translate(0, 0)' : 'translate(-100%, 0)',
        config: { tension: 50, friction: 20 }
    });

    const rightBlock = useSpring({
        transform: inView ? 'translate(0, 0)' : 'translate(100%, 0)',
        config: { tension: 50, friction: 20 }
    });

    return (
        <>
            <S.BackGround1/>
            <S.BackGround2 ref={ref}>
                <S.WrapperObj>
                    <S.Container1Animated style={leftBlock} />

                    <S.Container2Animated style={rightBlock}>
                        <animated.div><Ss.SmallTitle>Наша Комапания</Ss.SmallTitle></animated.div>
                        <Ss.BigTitle>Лидер отрасли и соединение мира</Ss.BigTitle>
                        <Ss.Text>Duis aute irure dolor в осуждении за сладострастие velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ocaecat cupidatat not proident</Ss.Text>
                        <animated.div><Button label="Узнать больше" /></animated.div>
                    </S.Container2Animated>
                </S.WrapperObj>
            </S.BackGround2>
        </>
    )
}
