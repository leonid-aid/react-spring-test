import { Button } from "../components";
import * as Ss from "../styles";
import * as S from "./5-styles";
import card1 from "../../images/medium-shot-man-holding-clipboar.jpg";
import card2 from "../../images/medium-shot-man-holding-clipboar.jpg";
import card3 from "../../images/medium-shot-man-holding-clipboar.jpg";
import { useSprings, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export const Part5 = () => {

const [ref1,inView1]=useInView({threshold:0.3})
const [ref2,inView2]=useInView({threshold:0.3})

  const animations = useSprings(
    2,
    [
      {
        transform: inView1 ? 'rotate(0deg) translate(0px, 0px) ' : 'rotate(-90deg) translate(-850px, 100px)',
        config: { tension: 20, friction: 10 }
      },
      {
        transform:inView2?'scale(1)':'scale(0)',
        config: { tension: 30, friction: 10 }
      }
    ]
  );

  return (
    <S.Container  ref={ref1}>
      <animated.div style={{...animations[0] , color: 'white', marginTop:'150px' }}>
      <Ss.BigTitle>Соедините свой бизнес с миром</Ss.BigTitle>
      </animated.div>
      <Ss.SmallTitle style={{ color: 'white', margin: '30px 0 30px 0' }}>Мы являемся лидером в проектировании и строительстве передовых технологических объектов, и наши архитектурные решения являются результатом совместного процесса, который позволяет нашим многопрофильным командам обмениваться знаниями, использовать новые технологии и создавать инновационные дизайнерские решения.</Ss.SmallTitle>
      <S.Cards  ref={ref2}>
        <animated.div style={animations[1]}>
          <S.Card background="none">
            <Ss.TitleForText color="orange">О нас</Ss.TitleForText>
            <Ss.Text>Mauris pharetra et ultrices neque ornare aenean euismod. Обитатель morbi tristique senectus et netus et Malesuada Fames. Ut faucibus pulvinar elementum integer enim neque volutpat.</Ss.Text>
          </S.Card>
        </animated.div>
        <S.Card background={card1} />
        <animated.div style={animations[1]}>
          <S.Card background="none">
            <Ss.TitleForText color="orange">Cтратегия</Ss.TitleForText>
            <Ss.Text>Mauris pharetra et ultrices neque ornare aenean euismod. Обитатель morbi tristique senectus et netus et Malesuada Fames. Ut faucibus pulvinar elementum integer enim neque volutpat.</Ss.Text>
          </S.Card>
        </animated.div>
        <S.Card background={card2} />
        <animated.div style={animations[1]}>
          <S.Card background="none">
            <Ss.TitleForText color="orange">Наша миссия</Ss.TitleForText>
            <Ss.Text>Mauris pharetra et ultrices neque ornare aenean euismod. Обитатель morbi tristique senectus et netus et Malesuada Fames. Ut faucibus pulvinar elementum integer enim neque volutpat.</Ss.Text>
          </S.Card>
        </animated.div>
        <S.Card background={card3} />
      </S.Cards>
    </S.Container>
  );
};
