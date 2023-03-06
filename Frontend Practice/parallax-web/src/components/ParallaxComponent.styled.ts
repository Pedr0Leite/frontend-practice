import styled from "styled-components";

interface animationLayerInterface {
  image: string;
}

export const AnimationLayer = styled.div<animationLayerInterface>`
height: 1000px;
background-position: bottom center;
background-size: auto 1038px;
background-repeat: repeat-x;
width: 100%;
position: absolute;
background-image: url(${(props) => props.image});

&.parallax {
    position: fixed;
}
`;