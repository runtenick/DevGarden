import React from 'react';
import { Svg, G } from 'react-native-svg';

interface TreeSvgProps {
  x: number;
  y: number;
  size: number;
}

const TreeImageSvg: React.FC<TreeSvgProps> = ({ x, y, size }) => {
  return (
      <G transform={`translate(${x}, ${y}) scale(${size})`}>
      <svg width="301" height="262" viewBox="0 0 301 262" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_663_592)">
        <rect x="179.078" y="172" width="15" height="75" fill="#664B01"/>
        <rect x="194.078" y="172" width="23" height="75" fill="#7E6200"/>
        <path d="M194.078 254L179.078 247L194.078 247L194.078 254Z" fill="#664B01"/>
        <path d="M194.085 254L194.085 247L217.078 247L194.085 254Z" fill="#7E6200"/>
        </g>
        <path d="M197.5 0L264 72.3064L180 76.5L197.5 0Z" fill="#00A210"/>
        <path d="M197.5 0L180 76.5L135 67.8852L197.5 0Z" fill="#00680A"/>
        <g filter="url(#filter1_d_663_592)">
        <path d="M196.745 52L297.001 184.47L170.361 192.153L196.745 52Z" fill="#00A210"/>
        <path d="M196.743 53.2734L170.36 191.724L102.517 176.133L196.743 53.2734Z" fill="#00680A"/>
        <path d="M196.743 53.2734L170.36 191.724L102.517 176.133L196.743 53.2734Z" fill="url(#paint0_linear_663_592)" fillOpacity="0.2"/>
        </g>
        <g filter="url(#filter2_d_663_592)">
        <path d="M196.973 22L279.001 126.034L175.386 132.068L196.973 22Z" fill="#00A210"/>
        <path d="M196.972 23L175.386 131.731L119.878 119.487L196.972 23Z" fill="#00680A"/>
        <path d="M196.972 23L175.386 131.731L119.878 119.487L196.972 23Z" fill="url(#paint1_linear_663_592)" fillOpacity="0.2"/>
        </g>
        <g filter="url(#filter3_d_663_592)">
        <path d="M197.5 0L264 72.3064L180 76.5L197.5 0Z" fill="#00A210"/>
        <path d="M197.5 0L180 76.5L135 67.8852L197.5 0Z" fill="#00680A"/>
        <path d="M197.5 0L180 76.5L135 67.8852L197.5 0Z" fill="url(#paint2_linear_663_592)" fillOpacity="0.2"/>
        </g>
        <defs>
        <filter id="filter0_d_663_592" x="175.078" y="172" width="46" height="90.0002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_663_592"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_592" result="shape"/>
        </filter>
        <filter id="filter1_d_663_592" x="98.5176" y="52" width="202.483" height="148.153" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_663_592"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_592" result="shape"/>
        </filter>
        <filter id="filter2_d_663_592" x="115.878" y="22" width="167.123" height="118.068" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_663_592"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_592" result="shape"/>
        </filter>
        <filter id="filter3_d_663_592" x="131" y="0" width="137" height="84.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_663_592"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_592" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_663_592" x1="98.3715" y1="53.2734" x2="98.3715" y2="243" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="0.450724" stopColor="white"/>
        </linearGradient>
        <linearGradient id="paint1_linear_663_592" x1="116.486" y1="23" x2="116.486" y2="172" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="0.450724" stopColor="white"/>
        </linearGradient>
        <linearGradient id="paint2_linear_663_592" x1="132.25" y1="0" x2="132.25" y2="104.832" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="0.450724" stopColor="white"/>
        </linearGradient>
        </defs>
        </svg>
      </G>
  );
};

export default TreeImageSvg;