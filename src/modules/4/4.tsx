import { Button } from "../components";
import { Card } from "../components";
import * as Ss from "../styles";
import * as S from "./4-styles";
import { useSprings,animated,useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

import icon1 from "../../images/154178.png"
import icon2 from "../../images/660154.png"
import icon3 from "../../images/565391.png"
import icon4 from "../../images/9721531.png"



const CountAnimation = ({ n }: { n: number }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 400,
    config: { mass: 1, friction: 10, tension: 20 },
  });

  return (
    <animated.div>
      {number.to((n: number) => n.toFixed(0))}
    </animated.div>
  );
};


export const Part4=()=>{

    const [ref1, inView1] = useInView({threshold:0.2})
    const [ref2, inView2] = useInView({threshold:0.2})

    const animations= useSprings(2,[
      {
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translate(0%, 0%)' : 'translate(0%, 40%)',
        config: { tension: 20, friction: 5 }
      },
        {
          opacity:inView2 ? 1:0,
          transform:inView2 ? 'scale(1)':'scale(0)',
          config:{tension:50,friction:10},

        }

    ])

    return(
        <>
        <S.BackGround>
            <S.SignStateAnimated ref={ref1} style={animations[0]}> 
            <animated.div ref={ref2} style={animations[1]}>
                <Card icon={icon1} firstText=">" secondText="тыс." number={inView2 ? <CountAnimation n={500}/>:<>500</>} caption="Сотрудники"/>
            </animated.div>
            <animated.div ref={ref2} style={animations[1]}>
                <Card icon={icon2} firstText="" secondText="+" number={inView2 ? <CountAnimation n={200}/>:<>200</>} caption="Обслуживаемые страны и территории"/>
                </animated.div>
                <animated.div ref={ref2} style={animations[1]}>
                <Card icon={icon3} firstText="" secondText="М" number={inView2 ? <CountAnimation n={34} />:<>34</>} caption="Посылки доставляются ежедневно"/>
                </animated.div>
                <animated.div ref={ref2} style={animations[1]}>
                <Card icon={icon4} firstText="$" secondText="" number={inView2 ? <CountAnimation n={31} />:<>31</>} caption="Общий доход за 2022 год"/>
                </animated.div>
            </S.SignStateAnimated>

            <animated.div ref={ref2} style={{...animations[1], marginTop:'-110px', marginRight:'-150px', zIndex:'1', paddingBottom:'50px'}}>
            <Button label="Просмотреть все информационные биллютени"/>
            </animated.div>
        </S.BackGround>

        </>
    )
} 
















/* import { Button } from "../components";
import { Card } from "../components";
import * as Ss from "../styles";
import * as S from "./4-styles";
import { useSprings,animated,useSpring } from "react-spring";

import icon1 from "../../images/154178.png"
import icon2 from "../../images/660154.png"
import icon3 from "../../images/565391.png"
import icon4 from "../../images/9721531.png"



const CountAnimation = ({ n }: { n: number }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, friction: 10, tension: 20 },
  });

  return (
    <animated.div>
      {number.to((n: number) => n.toFixed(0))}
    </animated.div>
  );
};


export const Part4=()=>{

    const animations= useSprings(3,[
        {   from: { transform: 'translate(0%, 50%)'},
            to: { transform: 'translate(0%, 0%)' },
            config: { tension: 40, friction: 5 },
        },

        {   from: { transform: 'translate(0%, 30%)'},
            to: { transform: 'translate(0%, 0%)' },
            config: { tension: 10, friction: 5},
            delay:500 
        },
        { from:{transform:'scale(0)'},
          to:{transform:'scale(1)'},
          config:{tension:20,friction:10},
          delay:700
        }

    ])

    return(
        <>
        <S.BackGround>
            <S.SignStateAnimated style={animations[0]}> 
            <animated.div style={animations[2]}>
                <Card icon={icon1} firstText=">" secondText="тыс." number={<CountAnimation n={500} />} caption="Сотрудники"/>
            </animated.div>
            <animated.div style={animations[2]}>
                <Card icon={icon2} firstText="" secondText="+" number={<CountAnimation n={200} />} caption="Обслуживаемые страны и территории"/>
                </animated.div>
                <animated.div style={animations[2]}>
                <Card icon={icon3} firstText="" secondText="М" number={<CountAnimation n={34} />} caption="Посылки доставляются ежедневно"/>
                </animated.div>
                <animated.div style={animations[2]}>
                <Card icon={icon4} firstText="$" secondText="" number={<CountAnimation n={31} />} caption="Общий доход за 2022 год"/>
                </animated.div>

            </S.SignStateAnimated>
            <animated.div style={{...animations[2], marginTop:'-110px', marginRight:'-150px', zIndex:'1', paddingBottom:'50px'}}>
            <Button label="Просмотреть все информационные биллютени"/>
            </animated.div>
        </S.BackGround>

        </>
    )
}




 */
