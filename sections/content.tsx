export default function pilares() {
  return (
    <div
      id="pilares"
      class="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-20 xl:px-0"
    >
      <div class="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
        <div class="flex flex-col items-center justify-center w-full h-full max-w-2xl mx-auto text-center">
          <h3
            class="my-5 text-base font-medium tracking-tight uppercase"
            style="color: #42AABB;"
          >
            Os caminhos que escolhemos
          </h3>
          <h2 class="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            Pilares de atuação
          </h2>

          <p class="my-6 text-xl font-medium text-gray-600">
            O Movimento Tech organiza e financia projetos que atuam em um ou
            mais dos seguintes pilares de atuação:
          </p>
        </div>
        <div class="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-10">
          <div class="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
            <div class="relative flex flex-col items-center justify-center w-full h-full p-10 lg:p-20 mr-5 rounded-lg">
              <svg
                class="absolute w-full h-ful fill-current"
                style="color: #F7F7F7;"
                viewBox="0 0 377 440"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <path d="M342.8 3.7c24.7 14 18.1 75 22.1 224s18.6 85.8 -28.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z">
                    </path>
                  </g>
                </g>
              </svg>

              <img src="icons/icon8.jpeg" style="z-index:99; width: 100px;" />
              <h4 class="relative mt-6 text-3xl font-bold">Despertar</h4>
              <p class="relative mt-2 text-base text-center text-gray-800">
                Despertar os jovens para as possibilidades da carreira em
                tecnologia.
              </p>
            </div>
          </div>

          <div class="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
            <div class="relative flex flex-col items-center justify-center w-full h-full p-10 lg:p-20 mr-5 rounded-lg">
              <svg
                class="absolute w-full h-full fill-current"
                style="color: #F7F7F7;"
                viewBox="0 0 358 372"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <path d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 122.5-1.1 40.6-15.7 75.2-24.3 104.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z">
                    </path>
                  </g>
                </g>
              </svg>
              <img src="icons/icon2.jpeg" style="z-index:99; width: 100px;" />
              <h4 class="relative mt-6 text-3xl font-bold">Capacitar</h4>
              <p class="relative mt-2 text-base text-center text-gray-800">
                Capacitar os futuros talentos para as profissões de amanhã.
              </p>
            </div>
          </div>

          <div class="w-full max-w-md p-4 mx-auto mb-6 lg:mb-0 lg:w-1/3">
            <div class="relative flex flex-col items-center justify-center w-full h-full p-10 lg:p-20 mr-5 rounded-lg">
              <svg
                class="absolute w-full h-full fill-current"
                style="color: #F7F7F7;"
                viewBox="0 0 378 440"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <path d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 175.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z">
                    </path>
                  </g>
                </g>
              </svg>
              <img src="icons/icon6.jpeg" style="z-index:99; width: 100px;" />
              <h4 class="relative mt-6 text-3xl font-bold">Empregar</h4>
              <p class="relative mt-2 text-base text-center text-gray-800">
                Empregar profissionais de perfis sub-representados promovendo
                inclusão produtiva em escala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
