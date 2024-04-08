import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import * as Ss from '../styles';
import * as S from './1-styles';
import { Button } from '../components';

export const Part1 = () => {

     const propsButton = useSpring({
        from: { transform: 'scale(0) translate(200%, 150%)' },
        to: { transform: 'scale(1) translate(0%, 0%)' },
        config: { tension: 60, friction: 20 },
        delay:500
    });

    const propsText = useSpring({
        from: { transform: 'scale(0) translate(10%, 20%)' },
        to: { transform: 'scale(1) translate(0%, 0%)' },
        config: { tension: 50, friction: 20 },
        delay:500
    });

    const propsHeader = useSpring({
        from: { transform: 'scale(0.8) translate(5%, 5%)' },
        to: { transform: 'scale(1) translate(0%, 0%)' },
        config: { tension: 40, friction: 20 },
        delay:500
    });
    const propsTextPlace = useSpring({
        from: { transform: 'scale(0) translate(0, 150%)' },
        to: { transform: 'scale(1) translate(0%, 0%)' },
        config: { tension: 30, friction: 20 },
        
    });
    const propsStub = useSpring({
        from: { transform: 'translate(100%, 0%)' },
        to: { transform: 'translate(0%, 0%)' },
        config: { tension: 40, friction: 20 }, 
    });

    return (
        <S.Background>
            <S.Wrap>                                                                                
                <S.TextPlaceAnimated style={propsTextPlace}>
                    <animated.div style={propsHeader}><Ss.SmallTitle>Наша компания </Ss.SmallTitle></animated.div>
                    <animated.div style={propsText} ><Ss.BigTitle>Клиент прежде всего, люди во главе, инновации</Ss.BigTitle></animated.div>
                    <animated.div style={propsButton}>
                        <Button label="Узнать больше" />
                    </animated.div>
                </S.TextPlaceAnimated>
                <S.OrangeStubAnimated style={propsStub}/>
            </S.Wrap>
        </S.Background>
    ); 
}; 




