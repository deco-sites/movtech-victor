export interface Props {
  text1: string;
  text2: string;
}
export default function main({ text1, text2 }: Props) {
  return (
    <div class="relative items-center justify-center w-full overflow-x-hidden lg:pt-24 lg:pb-24 xl:pt-40 xl:pb-32 pb-10">
      <div class="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div class="z-30 flex flex-col items-center w-full max-w-xl pt-32 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-10 lg:text-left">
          <div class="z-50 flex flex-col items-center h-full mb-6 rounded-lg lg:hidden justify-center w-4/5">
            <img
              src="estudante-small.jpeg"
              loading="lazy"
              class="w-full mt-0 mr-0 rounded-3xl"
              style="max-width: 600px"
            />
          </div>
          <h1 class="relative mb-6 text-4xl lg:text-6xl font-black leading-tight text-gray-900 xl:mb-8">
            {text1}
            <span style="color: #42AABB;">{text2}</span> e{" "}
            <span style="color: #42AABB;">protagonista</span>{" "}
            <br class="xs:hidden" />em tecnologia
          </h1>
          <p class="pr-0 mb-6 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
            Movimento Tech é um{" "}
            <span style="color: #42AABB;">fundo de investimento social</span>
            {" "}
            para despertar o interesse pela carreira em tecnologia, formar e
            empregar.
          </p>
          <p class="pr-0 mb-6 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
            Conectamos empresas e coordenamos esforços e recursos para gerar
            {" "}
            <span style="color: #42AABB;">
              impacto por meio de investimento social.
            </span>
          </p>
          <p class="pr-0 mb-6 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
            Selecionamos e financiamos projetos{" "}
            <span style="color: #42AABB;">
              que aceleram nossos pilares de atuação:{" "}
              <b>
                despertar, capacitar e empregar.
              </b>
            </span>
          </p>
          <a
            href="mailto:contato@movtech.org"
            target="_blank"
            class="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
            style="background-color: #42AABB;"
          >
            Quero participar
          </a>
          <span class="text-gray-600 text-sm pt-4">
            Email:{" "}
            <a href="mailto:contato@movtech.org" target="_blank">
              contato@movtech.org
            </a>
          </span>

          <svg
            class="absolute left-0 max-w-md mt-24 -ml-64 left-svg"
            viewBox="0 0 423 423"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="100%"
                y1="0%"
                x2="4.48%"
                y2="0%"
                id="linearGradient-1"
              >
                <stop stop-color="#42AABB" offset="50%"></stop>
                <stop stop-color="#5AD0E4" offset="100%"></stop>
              </linearGradient>
              <filter
                x="-9.3%"
                y="-6.7%"
                width="118.7%"
                height="118.7%"
                filterUnits="objectBoundingBox"
                id="filter-3"
              >
                <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1">
                </feOffset>
                <feGaussianBlur
                  stdDeviation="8"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                >
                </feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  in="shadowBlurOuter1"
                >
                </feColorMatrix>
              </filter>
              <rect id="path-2" x="63" y="504" width="300" height="300" rx="40">
              </rect>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              opacity=".9"
            >
              <g id="Desktop-HD" transform="translate(-39 -531)">
                <g id="Hero" transform="translate(43 83)">
                  <g id="Rectangle-6" transform="rotate(45 213 654)">
                    <use fill="#000" filter="url(#filter-3)"></use>
                    <use fill="url(#linearGradient-1)"></use>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="hidden lg:flex relative z-50 flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
          <div class="container relative left-0  lg:absolute lg:max-w-6xl lg:w-screen">
            <img
              src="estudante.jpeg"
              loading="lazy"
              class="w-full mt-0 mr-0  rounded-3xl"
              style="max-width: 800px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
