export default function comoSeria() {
    return (
        <header class="relative z-50 w-full h-40 lg:h-24">
        <div class="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0 lg:pt-10">

            <a href="/" class="relative flex items-center h-full font-black leading-none">
                <img src="images/movtech2030_logo.png" class="w-full"/>
            </a>

            <nav id="nav" class="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative">
                <a href="/#proposito" class="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-blue-600">Propósito</a>
                <a href="/#pilares" class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-blue-600">Pilares</a>
                <a href="/projetos/" class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-blue-600">Projetos</a>
                <a href="/parceiros/" class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-blue-600">Parceiros</a>
                <a href="/na-midia/" class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-blue-600">Na
                    mídia</a>
                <a href="/#participar" class="participar-nav mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-blue-600">Participar</a>    
                <div class="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
                    <a href="mailto:contato@movtech.org" target="_blank" class="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white fold-bold" style="background-color: #42AABB;">Quero participar</a>
                </div>
            </nav>

            <div class="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 lg:relative lg:w-auto lg:bg-transparent lg:border-none lg:mt-0 lg:flex-row lg:p-0 lg:items-end lg:flex lg:justify-between">                
                <svg class="absolute top-0 left-0 hidden w-screen max-w-3xl -mt-64 -ml-12 lg:block" viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
                            <stop stop-color="#42AABB" offset="50%"></stop>
                            <stop stop-color="#5AD0E4" offset="100%"></stop>
                        </linearGradient>
                        <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox" id="a">
                            <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                        <path d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z" id="b"></path>
                    </defs>
                    <g fill="none" fill-rule="evenodd" opacity=".9">
                        <g transform="rotate(65 416.452 409.167)">
                            <use fill="#000" filter="url(#a)"></use>
                            <use fill="url(#c)" ></use>
                        </g>
                    </g>
                </svg>
            </div>
            

        </div>
    </header>
    )

}