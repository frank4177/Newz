import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
// import {ReactComponent as svgSource} from '../../assets/icons/lopo.svg';



type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

type IconName = 'bell' | 'magnifier' | 'categories' | 'calendar';

const Bell = ({color = 'black', height = 20, width = 20}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 18 19" fill="#FFF">
    <Path
      d="M5.8 3.2c-.9.7-1.9 3.4-2.3 6L2.9 14h12.3l-.6-3.1c-.3-1.7-.6-3.7-.6-4.5C14 4.6 11.2 2 9.1 2c-.9 0-2.4.6-3.3 1.2zm5.9 1c.6.7 1.3 3 1.6 5l.6 3.8h-10l.7-3.8C5.4 4.8 6.6 3 9 3c1 0 2.2.6 2.7 1.2zM7.5 16c.3.5 1.2.7 2 .3 2.1-.7 1.9-1.3-.6-1.3-1.1 0-1.8.4-1.4 1z"
      stroke={color}
    />
  </Svg>
);

const Magnifier = ({color = 'black', height = 20, width = 20}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 18 19" fill="#FFF">
    <Path
    //  d={svgSource}
      stroke={color}
    />
  </Svg>
);

const Icons = ({name, color, height, width}: IconProps & {name: IconName}) => {
  switch (name) {
    case 'bell':
      return <Bell color={color} height={height} width={width} />;
    case 'magnifier':
      return <Magnifier color={color} height={height} width={width} />;
  }
};

export default Icons;
