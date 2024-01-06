"use client";
import { useState } from "react";

export default function Home() {
  const [dialog, setDialog] = useState<null | number>(null);
  const [multiplier, setMultiplier] = useState<1 | 2 | 3>(1);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(1);
  const [gameFrom, setGameFrom] = useState<number>(301);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [results, setResults] = useState<number[]>([301]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [currentThrow, setCurrentThrow] = useState<number[]>([]);
  const [correctionIndex, setCorrectionIndex] = useState<null | number>(null);
  const [currentThrowIndex, setCurrentThrowIndex] = useState<number>(0);
  const [winnersArray, setWinnersArray] = useState<number[]>([]);

  const onReset = () => {
    setMultiplier(1);
    setGameStarted(false);
    setResults([]);
    setCurrentPlayerIndex(0);
    setCurrentThrow([]);
    setCorrectionIndex(null);
    setCurrentThrowIndex(0);
    setWinnersArray([]);
  };
  return (
    <div className="flex flex-col p-2 pb-16">
      <div className="flex">
        <svg
          width="455px"
          height="455px"
          viewBox="0 0 455 455"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="dartboard">
              <g id="Board" transform="translate(0.500000, 0.500000)">
                <g id="BaseBoard" fill="#000000">
                  <path
                    d="M453.5,227 C453.5,352.092496 352.092496,453.5 227,453.5 C101.907504,453.5 0.5,352.092496 0.5,227 C0.5,101.907504 101.907504,0.5 227,0.5 C352.092496,0.5 453.5,101.907504 453.5,227 L453.5,227 Z"
                    id="path1307"
                  ></path>
                </g>
                <g
                  id="Inside-Spider"
                  transform="translate(50.000000, 51.000000)"
                  stroke="#D0EDFD"
                >
                  <path
                    d="M347.55,176 C347.55,270.192164 271.192164,346.55 177,346.55 C82.8078359,346.55 6.45,270.192164 6.45,176 C6.45,81.8078359 82.8078359,5.45 177,5.45 C271.192164,5.45 347.55,81.8078359 347.55,176 L347.55,176 Z"
                    id="DoubleRed"
                    stroke-width="1.10000002"
                    fill="#FF0000"
                  ></path>
                  <path
                    d="M338.45,176 C338.45,265.166373 266.166373,337.45 177,337.45 C87.8336271,337.45 15.55,265.166373 15.55,176 C15.55,86.8336271 87.8336271,14.55 177,14.55 C266.166373,14.55 338.45,86.8336271 338.45,176 L338.45,176 Z"
                    id="path2195"
                    stroke-width="1.10000002"
                    fill="#000000"
                  ></path>
                  <path
                    d="M284.55,176 C284.55,235.398225 236.398225,283.55 177,283.55 C117.601775,283.55 69.45,235.398225 69.45,176 C69.45,116.601775 117.601775,68.45 177,68.45 C236.398225,68.45 284.55,116.601775 284.55,176 L284.55,176 Z"
                    id="TrebleRed"
                    stroke-width="1.10000002"
                    fill="#FF0000"
                  ></path>
                  <path
                    d="M275.449997,176 C275.449998,211.172797 256.685534,243.673801 226.224999,261.2602 C195.764464,278.846598 158.235536,278.846598 127.775001,261.2602 C97.3144658,243.673801 78.5500025,211.172797 78.550003,176 C78.5500023,140.827203 97.3144655,108.326198 127.775001,90.7397999 C158.235536,73.1534013 195.764464,73.1534013 226.224999,90.7397999 C256.685534,108.326198 275.449998,140.827203 275.449997,176 L275.449997,176 Z"
                    id="path2197"
                    stroke-width="1.10000002"
                    fill="#000000"
                  ></path>
                  <g id="GreenDoubleSpiders" fill="#00A000">
                    <path
                      onClick={() => {
                        console.log("2*5");
                      }}
                      d="M247.040324,61.7046644 C247.040324,79.6014366 244.223418,97.3866829 238.693012,114.407525 L76.4902901,61.7046644 L247.040324,61.7046644 Z"
                      id="path4826"
                      stroke-width="1.10000024"
                      transform="translate(161.765307, 88.056095) rotate(-116.999962) translate(-161.765307, -88.056095) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*9");
                      }}
                      d="M198.257753,87.455221 C198.257753,105.351985 195.440849,123.137224 189.910445,140.158058 L27.7077936,87.455221 L198.257753,87.455221 Z"
                      id="path4830"
                      stroke-width="1.09999976"
                      transform="translate(112.982773, 113.806640) rotate(-152.999961) translate(-112.982773, -113.806640) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*11");
                      }}
                      d="M173.927612,136.961509 C173.927613,154.85827 171.110709,172.643506 165.580306,189.664337 L3.37768187,136.961509 L173.927612,136.961509 Z"
                      id="path4832"
                      stroke-width="1.09999957"
                      transform="translate(88.652647, 163.312923) rotate(171.000023) translate(-88.652647, -163.312923) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*16");
                      }}
                      d="M183.343166,191.313773 C183.343166,209.210534 180.526262,226.99577 174.995859,244.016602 L12.7932338,191.313773 L183.343166,191.313773 Z"
                      id="path4834"
                      stroke-width="1.09999958"
                      transform="translate(98.068200, 217.665187) rotate(135.000041) translate(-98.068200, -217.665187) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*19");
                      }}
                      d="M222.907998,229.751391 C222.907998,247.648155 220.091094,265.433393 214.56069,282.454227 L52.3580407,229.751391 L222.907998,229.751391 Z"
                      id="path4836"
                      stroke-width="1.09999974"
                      transform="translate(137.633019, 256.102809) rotate(99.000033) translate(-137.633019, -256.102809) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*17");
                      }}
                      d="M277.50971,237.592475 C277.50971,255.489247 274.692805,273.274494 269.162398,290.295336 L106.959676,237.592475 L277.50971,237.592475 Z"
                      id="path4838"
                      stroke-width="1.10000024"
                      transform="translate(192.234693, 263.943905) rotate(63.000038) translate(-192.234693, -263.943905) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*15");
                      }}
                      d="M326.292206,211.841942 C326.292207,229.738706 323.475302,247.523945 317.944898,264.544779 L155.742247,211.841942 L326.292206,211.841942 Z"
                      id="path4840"
                      stroke-width="1.09999976"
                      transform="translate(241.017227, 238.193360) rotate(27.000039) translate(-241.017227, -238.193360) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*6");
                      }}
                      d="M350.622318,162.335663 C350.622319,180.232424 347.805415,198.01766 342.275012,215.038491 L180.072388,162.335663 L350.622318,162.335663 Z"
                      id="path4842"
                      stroke-width="1.09999957"
                      transform="translate(265.347353, 188.687077) rotate(-8.999977) translate(-265.347353, -188.687077) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*4");
                      }}
                      d="M341.206766,107.983398 C341.206767,125.88016 338.389863,143.665396 332.85946,160.686227 L170.656834,107.983398 L341.206766,107.983398 Z"
                      id="path4844"
                      stroke-width="1.09999958"
                      transform="translate(255.931800, 134.334813) rotate(-44.999959) translate(-255.931800, -134.334813) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("2*1");
                      }}
                      d="M301.641959,69.5457726 C301.64196,87.4425367 298.825055,105.227775 293.294651,122.248609 L131.092002,69.5457726 L301.641959,69.5457726 Z"
                      id="path4846"
                      stroke-width="1.09999974"
                      transform="translate(216.366981, 95.897191) rotate(-80.999967) translate(-216.366981, -95.897191) "
                    ></path>
                  </g>
                  <g
                    id="g4876"
                    transform="translate(10.000000, 9.000000)"
                    fill="#E7E4C7"
                  >
                    <path
                      onClick={() => {
                        console.log("5");
                      }}
                      d="M234.303197,58.8030972 C234.303195,75.744955 231.636588,92.5812373 226.401265,108.693901 L72.8531647,58.8030972 L234.303197,58.8030972 Z"
                      id="path4878"
                      stroke-width="1.10000024"
                      transform="translate(153.578181, 83.748499) rotate(-116.999962) translate(-153.578181, -83.748499) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("9");
                      }}
                      d="M188.123507,83.1796871 C188.123506,100.121537 185.4569,116.957812 180.221579,133.070469 L26.6735457,83.1796871 L188.123507,83.1796871 Z"
                      id="path4880"
                      stroke-width="1.09999976"
                      transform="translate(107.398526, 108.125078) rotate(-152.999961) translate(-107.398526, -108.125078) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("11");
                      }}
                      d="M165.091545,130.044479 C165.091543,146.986326 162.424938,163.822598 157.189618,179.935252 L3.64161099,130.044479 L165.091545,130.044479 Z"
                      id="path4882"
                      stroke-width="1.09999957"
                      transform="translate(84.366578, 154.989865) rotate(171.000023) translate(-84.366578, -154.989865) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("16");
                      }}
                      d="M174.004715,181.49668 C174.004714,198.438528 171.338109,215.2748 166.102789,231.387454 L12.5547796,181.49668 L174.004715,181.49668 Z"
                      id="path4884"
                      stroke-width="1.09999958"
                      transform="translate(93.279748, 206.442067) rotate(135.000041) translate(-93.279748, -206.442067) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("19");
                      }}
                      d="M211.458495,217.88339 C211.458494,234.82524 208.791888,251.661515 203.556567,267.774171 L50.0085358,217.88339 L211.458495,217.88339 Z"
                      id="path4886"
                      stroke-width="1.09999974"
                      transform="translate(130.733515, 242.828781) rotate(99.000033) translate(-130.733515, -242.828781) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("17");
                      }}
                      d="M263.146835,225.306099 C263.146834,242.247957 260.480227,259.084239 255.244904,275.196903 L101.696803,225.306099 L263.146835,225.306099 Z"
                      id="path4888"
                      stroke-width="1.10000024"
                      transform="translate(182.421819, 250.251501) rotate(63.000038) translate(-182.421819, -250.251501) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("15");
                      }}
                      d="M309.326454,200.929531 C309.326453,217.871381 306.659847,234.707656 301.424526,250.820313 L147.876493,200.929531 L309.326454,200.929531 Z"
                      id="path4890"
                      stroke-width="1.09999976"
                      transform="translate(228.601474, 225.874922) rotate(27.000039) translate(-228.601474, -225.874922) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("6");
                      }}
                      d="M332.358389,154.064748 C332.358388,171.006595 329.691782,187.842867 324.456462,203.955521 L170.908455,154.064748 L332.358389,154.064748 Z"
                      id="path4892"
                      stroke-width="1.09999957"
                      transform="translate(251.633422, 179.010135) rotate(-8.999977) translate(-251.633422, -179.010135) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("4");
                      }}
                      d="M323.44522,102.612546 C323.445219,119.554394 320.778614,136.390666 315.543294,152.50332 L161.995285,102.612546 L323.44522,102.612546 Z"
                      id="outer-4"
                      stroke-width="1.09999958"
                      transform="translate(242.720252, 127.557933) rotate(-44.999959) translate(-242.720252, -127.557933) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("1");
                      }}
                      d="M285.991464,66.2258287 C285.991463,83.1676788 283.324857,100.003954 278.089536,116.11661 L124.541505,66.2258287 L285.991464,66.2258287 Z"
                      id="outer-1"
                      stroke-width="1.09999974"
                      transform="translate(205.266485, 91.171219) rotate(-80.999967) translate(-205.266485, -91.171219) "
                    ></path>
                  </g>
                  <g
                    id="GreenTrebleSpiders"
                    transform="translate(64.000000, 66.000000)"
                    fill="#00A000"
                  >
                    <path
                      onClick={() => {
                        console.log("3*5");
                      }}
                      d="M156.167909,38.9245771 C156.167909,50.2104045 154.39155,61.4259029 150.904038,72.1593627 L48.6178875,38.9245771 L156.167909,38.9245771 Z"
                      id="path4856"
                      stroke-width="1.10000024"
                      transform="translate(102.392898, 55.541970) rotate(-116.999962) translate(-102.392898, -55.541970) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*9");
                      }}
                      d="M125.405285,55.1630547 C125.405285,66.4488771 123.628926,77.6643706 120.141416,88.3978257 L17.8553105,55.1630547 L125.405285,55.1630547 Z"
                      id="path4858"
                      stroke-width="1.09999976"
                      transform="translate(71.630298, 71.780440) rotate(-152.999961) translate(-71.630298, -71.780440) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*11");
                      }}
                      d="M110.062531,86.3820594 C110.062532,97.6678799 108.286173,108.883372 104.798663,119.616825 L2.51257509,86.3820594 L110.062531,86.3820594 Z"
                      id="path4860"
                      stroke-width="1.09999957"
                      transform="translate(56.287553, 102.999442) rotate(171.000023) translate(-56.287553, -102.999442) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*16");
                      }}
                      d="M116.000044,120.65697 C116.000045,131.94279 114.223686,143.158282 110.736176,153.891736 L8.45008664,120.65697 L116.000044,120.65697 Z"
                      id="path4862"
                      stroke-width="1.09999958"
                      transform="translate(62.225065, 137.274353) rotate(135.000041) translate(-62.225065, -137.274353) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*19");
                      }}
                      d="M140.949898,144.895996 C140.949899,156.181818 139.17354,167.397311 135.686029,178.130766 L33.3999253,144.895996 L140.949898,144.895996 Z"
                      id="path4864"
                      stroke-width="1.09999974"
                      transform="translate(87.174912, 161.513381) rotate(99.000033) translate(-87.174912, -161.513381) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*17");
                      }}
                      d="M175.382112,149.840637 C175.382113,161.126465 173.605753,172.341963 170.118241,183.075423 L67.8320913,149.840637 L175.382112,149.840637 Z"
                      id="path4866"
                      stroke-width="1.10000024"
                      transform="translate(121.607102, 166.458030) rotate(63.000038) translate(-121.607102, -166.458030) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*15");
                      }}
                      d="M206.144689,133.602174 C206.14469,144.887997 204.368331,156.10349 200.880821,166.836945 L98.5947153,133.602174 L206.144689,133.602174 Z"
                      id="path4868"
                      stroke-width="1.09999976"
                      transform="translate(152.369702, 150.219560) rotate(27.000039) translate(-152.369702, -150.219560) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*6");
                      }}
                      d="M221.487425,102.383175 C221.487426,113.668996 219.711067,124.884487 216.223557,135.617941 L113.937469,102.383175 L221.487425,102.383175 Z"
                      id="path4870"
                      stroke-width="1.09999957"
                      transform="translate(167.712447, 119.000558) rotate(-8.999977) translate(-167.712447, -119.000558) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*4");
                      }}
                      d="M215.549913,68.1082644 C215.549914,79.394085 213.773555,90.6095768 210.286045,101.34303 L107.999956,68.1082644 L215.549913,68.1082644 Z"
                      id="path4872"
                      stroke-width="1.09999958"
                      transform="translate(161.774935, 84.725647) rotate(-44.999959) translate(-161.774935, -84.725647) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("3*1");
                      }}
                      d="M190.600075,43.8692338 C190.600075,55.1550561 188.823716,66.3705495 185.336206,77.1040044 L83.0501019,43.8692338 L190.600075,43.8692338 Z"
                      id="path4874"
                      stroke-width="1.09999974"
                      transform="translate(136.825088, 60.486619) rotate(-80.999967) translate(-136.825088, -60.486619) "
                    ></path>
                  </g>
                  <g
                    id="GreenInner"
                    transform="translate(74.000000, 75.000000)"
                    fill="#E7E4C7"
                  >
                    <path
                      onClick={() => {
                        console.log("5");
                      }}
                      d="M142.430781,36.0230113 C142.430781,46.353924 140.804721,56.6204584 137.612294,66.4457403 L43.9807643,36.0230113 L142.430781,36.0230113 Z"
                      id="path5773"
                      stroke-width="1.10000024"
                      transform="translate(93.205773, 51.234376) rotate(-116.999962) translate(-93.205773, -51.234376) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("9");
                      }}
                      d="M114.271039,50.8875215 C114.271039,61.2184297 112.64498,71.4849596 109.452554,81.3102372 L15.8210655,50.8875215 L114.271039,50.8875215 Z"
                      id="path5775"
                      stroke-width="1.09999976"
                      transform="translate(65.046052, 66.098879) rotate(-152.999961) translate(-65.046052, -66.098879) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("11");
                      }}
                      d="M100.226464,79.4650289 C100.226464,89.7959354 98.6004056,100.062464 95.4079799,109.887739 L1.7765072,79.4650289 L100.226464,79.4650289 Z"
                      id="path5777"
                      stroke-width="1.09999957"
                      transform="translate(51.001486, 94.676384) rotate(171.000023) translate(-51.001486, -94.676384) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("16");
                      }}
                      d="M105.661593,110.839876 C105.661593,121.170783 104.035535,131.437311 100.843109,141.262587 L7.21163508,110.839876 L105.661593,110.839876 Z"
                      id="path5779"
                      stroke-width="1.09999958"
                      transform="translate(56.436614, 126.051232) rotate(135.000041) translate(-56.436614, -126.051232) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("19");
                      }}
                      d="M128.500394,133.027993 C128.500394,143.358901 126.874336,153.625431 123.681909,163.450709 L30.0504221,133.027993 L128.500394,133.027993 Z"
                      id="path5781"
                      stroke-width="1.09999974"
                      transform="translate(79.275408, 148.239351) rotate(99.000033) translate(-79.275408, -148.239351) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("17");
                      }}
                      d="M160.019236,137.55426 C160.019236,147.885172 158.393176,158.151707 155.200749,167.976989 L61.5692193,137.55426 L160.019236,137.55426 Z"
                      id="path5783"
                      stroke-width="1.10000024"
                      transform="translate(110.794227, 152.765624) rotate(63.000038) translate(-110.794227, -152.765624) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("15");
                      }}
                      d="M188.178934,122.689763 C188.178935,133.020671 186.552876,143.287201 183.36045,153.112479 L89.7289611,122.689763 L188.178934,122.689763 Z"
                      id="path5785"
                      stroke-width="1.09999976"
                      transform="translate(138.953948, 137.901121) rotate(27.000039) translate(-138.953948, -137.901121) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("6");
                      }}
                      d="M202.223493,94.1122605 C202.223493,104.443167 200.597434,114.709695 197.405009,124.534971 L103.773536,94.1122605 L202.223493,94.1122605 Z"
                      id="path5787"
                      stroke-width="1.09999957"
                      transform="translate(152.998514, 109.323616) rotate(-8.999977) translate(-152.998514, -109.323616) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("4");
                      }}
                      d="M196.788365,62.737413 C196.788365,73.0683195 195.162307,83.3348479 191.969881,93.1601239 L98.3384071,62.737413 L196.788365,62.737413 Z"
                      id="path5789"
                      stroke-width="1.09999958"
                      transform="translate(147.563386, 77.948768) rotate(-44.999959) translate(-147.563386, -77.948768) "
                    ></path>
                    <path
                      onClick={() => {
                        console.log("1");
                      }}
                      d="M173.949578,43.5492914 C173.949578,53.8801994 172.323519,64.1467292 169.131093,73.9720067 L75.4996058,43.5492914 L173.949578,43.5492914 Z"
                      id="path5791"
                      stroke-width="1.09999974"
                      transform="translate(124.724592, 58.760649) rotate(-80.999967) translate(-124.724592, -58.760649) "
                    ></path>
                  </g>
                  <path
                    onClick={() => {
                      setDialog(25);
                    }}
                    d="M193.450001,176 C193.450001,185.085085 186.085085,192.450001 177,192.450001 C167.914915,192.450001 160.549999,185.085085 160.549999,176 C160.549999,166.914915 167.914915,159.549999 177,159.549999 C186.085085,159.549999 193.450001,166.914915 193.450001,176 L193.450001,176 Z"
                    id="InnerGreen"
                    stroke-width="1.10000002"
                    fill="#00A000"
                  ></path>
                  <path
                    onClick={() => {
                      setDialog(25);
                      setMultiplier(2);
                    }}
                    d="M183.9,177 C183.9,180.810765 180.810765,183.9 177,183.9 C173.189235,183.9 170.1,180.810765 170.1,177 C170.1,173.189235 173.189235,170.1 177,170.1 C180.810765,170.1 183.9,173.189235 183.9,177 L183.9,177 Z"
                    id="InnerRed"
                    stroke-width="1.10000002"
                    fill="#FF0000"
                  ></path>
                </g>
                <g
                  id="BoardNumbers"
                  transform="translate(13.000000, 11.000000)"
                  font-size="28"
                  font-family="Helvetica"
                  fill="#FFFFFF"
                  font-weight="normal"
                >
                  <text
                    id="tspan6009"
                    onClick={() => {
                      setDialog(20);
                    }}
                  >
                    <tspan x="198.04829" y="28.17502">
                      20
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(1);
                    }}
                    id="tspan6897"
                  >
                    <tspan x="266.872234" y="35.63376">
                      1
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(18);
                    }}
                    id="tspan6907"
                  >
                    <tspan x="315.0151" y="65.46878">
                      18
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(4);
                    }}
                    id="tspan6913"
                  >
                    <tspan x="368.24347" y="112.25551">
                      4
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(13);
                    }}
                    id="tspan6917"
                  >
                    <tspan x="388.92455" y="170.230358">
                      13
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(6);
                    }}
                    id="tspan6968"
                  >
                    <tspan x="402.14688" y="225.153896">
                      6
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(10);
                    }}
                    id="tspan6925"
                  >
                    <tspan x="386.5513" y="283.467781">
                      10
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(15);
                    }}
                    id="tspan6929"
                  >
                    <tspan x="357.7334" y="343.13781">
                      15
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(2);
                    }}
                    id="tspan6933"
                  >
                    <tspan x="321.11771" y="385.85611">
                      2
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(17);
                    }}
                    id="tspan6977"
                  >
                    <tspan x="257.718311" y="412.63982">
                      17
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(3);
                    }}
                    id="tspan6981"
                  >
                    <tspan x="208.897384" y="424.16699">
                      3
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(19);
                    }}
                    id="tspan6985"
                  >
                    <tspan x="140.751503" y="415.01306">
                      19
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(7);
                    }}
                    id="tspan6989"
                  >
                    <tspan x="91.25252" y="389.24644">
                      7
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(16);
                    }}
                    id="tspan6993"
                  >
                    <tspan x="40.05835" y="343.13781">
                      16
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(8);
                    }}
                    id="tspan6997"
                  >
                    <tspan x="21.41145" y="288.892326">
                      8
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(11);
                    }}
                    id="tspan7013"
                  >
                    <tspan x="0.39133" y="224.814864">
                      11
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(14);
                    }}
                    id="tspan7017"
                  >
                    <tspan x="6.49394" y="167.179047">
                      14
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(9);
                    }}
                    id="tspan7021"
                  >
                    <tspan x="49.89035" y="106.49191">
                      9
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(12);
                    }}
                    id="tspan7025"
                  >
                    <tspan x="80.74245" y="63.77361">
                      12
                    </tspan>
                  </text>
                  <text
                    onClick={() => {
                      setDialog(5);
                    }}
                    id="tspan7029"
                  >
                    <tspan x="147.532188" y="37.32893">
                      5
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      {gameStarted ? (
        <div>
          <div className="flex flex-col items-start">
            <div className="flex justify-between w-full items-center mb-2">
              <div className="flex gap-2">
                <button
                  disabled={currentThrow.length === 0}
                  onClick={() => {
                    setCorrectionIndex(0);
                  }}
                  className={`border border-2
                 ${correctionIndex === 0 && "border-[#22ff09]"} ${
                    correctionIndex === null &&
                    currentThrowIndex === 0 &&
                    "border-[#222]"
                  } rounded-xl bg-[${
                    currentThrowIndex > 0 ? "#ff0909" : "#fff"
                  }] w-[30px] h-[30px]`}
                >
                  {currentThrow[0]}
                </button>
                <button
                  disabled={currentThrow.length < 1}
                  onClick={() => {
                    setCorrectionIndex(1);
                  }}
                  className={`border border-2  ${
                    correctionIndex === 1 && "border-[#22ff09]"
                  } ${
                    correctionIndex === null &&
                    currentThrowIndex === 1 &&
                    "border-[#222]"
                  } rounded-xl bg-[${
                    currentThrowIndex > 1 ? "#ff0909" : "#fff"
                  }] w-[30px] h-[30px]`}
                >
                  {currentThrow[1]}
                </button>
                <button
                  disabled={currentThrow.length < 2}
                  onClick={() => {
                    setCorrectionIndex(2);
                  }}
                  className={`border border-2 ${
                    correctionIndex === 2 && "border-[#22ff09]"
                  } ${
                    correctionIndex === null &&
                    currentThrowIndex === 2 &&
                    "border-[#222]"
                  } rounded-xl bg-[${
                    currentThrowIndex > 2 ? "#ff0909" : "#fff"
                  }] w-[30px] h-[30px]`}
                >
                  {currentThrow[2]}
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={onReset}
                >
                  Reset
                </button>

                <button
                  onClick={() => {
                    const tempResults = [...results];
                    const newResult =
                      tempResults[currentPlayerIndex] -
                      currentThrow.reduce((prev, curr) => prev + curr, 0);

                    tempResults.splice(
                      currentPlayerIndex,
                      1,
                      newResult < 0
                        ? tempResults[currentPlayerIndex]
                        : newResult
                    );
                    setResults(tempResults);
                    setCurrentPlayerIndex(
                      (currentPlayerIndex + 1) % numberOfPlayers
                    );
                    setCurrentThrow([]);
                    setCorrectionIndex(null);
                    setCurrentThrowIndex(0);
                    if (
                      newResult === 0 &&
                      !winnersArray.includes(currentPlayerIndex)
                    ) {
                      setWinnersArray([...winnersArray, currentPlayerIndex]);
                    }
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Next player
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {results.map((result, index) => {
              return (
                <div
                  key={`result-${index}`}
                  className={`p-2 bg-black rounded-md border border-2 border-solid border-${
                    index === currentPlayerIndex ? "green-500" : "red-500"
                  }`}
                >
                  {index === currentPlayerIndex
                    ? result -
                      currentThrow.reduce((prev, curr) => prev + curr, 0)
                    : ""}{" "}
                  {result === 0
                    ? `${
                        winnersArray.findIndex((winner) => winner === index) + 1
                      }.`
                    : result}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-col flex">
          <div>
            players:{" "}
            <button
              onClick={() => {
                if (numberOfPlayers > 1) {
                  setNumberOfPlayers(numberOfPlayers - 1);
                }
              }}
            >
              -
            </button>
            {numberOfPlayers}
            <button
              onClick={() => {
                setNumberOfPlayers(numberOfPlayers + 1);
              }}
            >
              +
            </button>
          </div>
          <div>
            game:{" "}
            <button
              onClick={() => {
                if (gameFrom > 301) {
                  setGameFrom(gameFrom - 200);
                }
              }}
            >
              -
            </button>
            {gameFrom}
            <button
              onClick={() => {
                if (gameFrom < 901) setGameFrom(gameFrom + 200);
              }}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setGameStarted(true);
                const newResults = new Array(numberOfPlayers).fill(gameFrom);
                setResults(newResults);
              }}
            >
              start
            </button>
          </div>
        </div>
      )}
      <dialog
        open={dialog !== null}
        className="bg-[#322e2f88] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <div>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Number hit: {dialog}
                </p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Multiplier hit: {multiplier}
                </p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Total hit: {multiplier * (dialog ?? 0)}
                </p>
              </div>
              <button
                onClick={() => {
                  setDialog(null);
                }}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4 space-x-4">
              <button
                onClick={() => {
                  setMultiplier(1);
                }}
                disabled={multiplier === 1}
                className={`text-white bg-${
                  multiplier === 1 ? "blue-600" : ""
                } focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${
                  multiplier === 1 ? "blue-600" : ""
                } dark:focus:ring-blue-800`}
              >
                x1
              </button>
              <button
                onClick={() => {
                  setMultiplier(2);
                }}
                disabled={multiplier === 2}
                className={`text-white bg-${
                  multiplier === 2 ? "blue-600" : ""
                } focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${
                  multiplier === 2 ? "blue-600" : ""
                } dark:focus:ring-blue-800`}
              >
                x2
              </button>
              {dialog !== null && dialog !== 25 && (
                <button
                  onClick={() => {
                    setMultiplier(3);
                  }}
                  disabled={multiplier === 3}
                  className={`text-white bg-${
                    multiplier === 3 ? "blue-600" : ""
                  } focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${
                    multiplier === 3 ? "blue-600" : ""
                  } dark:focus:ring-blue-800`}
                >
                  x3
                </button>
              )}
            </div>
            <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  if (correctionIndex === null && currentThrowIndex < 3) {
                    setCurrentThrow([
                      ...currentThrow,
                      multiplier * (dialog ?? 0),
                    ]);
                    setCurrentThrowIndex(currentThrowIndex + 1);
                  } else if (correctionIndex !== null) {
                    const newThrow = [...currentThrow];
                    newThrow.splice(
                      correctionIndex,
                      1,
                      multiplier * (dialog ?? 0)
                    );
                    setCurrentThrow(newThrow);
                  }
                  setDialog(null);
                  setMultiplier(1);
                  setCorrectionIndex(null);
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setDialog(null);
                }}
                data-modal-hide="default-modal"
                type="button"
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
