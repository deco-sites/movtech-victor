export default function comoSeria() {
    return (
        <div id="proposito" class="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-20 xl:px-0">
        <div class="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
            <div class="flex flex-col items-center justify-center w-full h-full max-w-2xl mx-auto text-center">
                <p class="my-5 text-base font-medium tracking-tight uppercase" style="color: #42AABB;">Um futuro que
                    vale a
                    pena construir
                </p>
                <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                    E se, em 2030...</h2>
                <p class="my-6 text-xl font-medium text-gray-600">Como seria se, em 2030, chegarmos num futuro em
                    que...</p>

            </div>
            <div class="flex flex-col w-full mt-0 lg:flex-row ">
                <div class="w-full max-w-md mx-auto mb-0 lg:mb-0 lg:w-1/3">
                    <div class="relative flex flex-col items-center justify-center w-full h-full p-6 lg:p-10 mr-5 rounded-lg">
                        <img src="despertar.jpeg" class="rounded-3xl"/>
                        <p class="relative mt-6 text-lg text-center text-gray-600">Crianças sonham ser
                            <strong>desenvolvedoras e designers?</strong>
                        </p>
                    </div>
                </div>

                <div class="w-full max-w-md mx-auto lg:mb-0 lg:w-1/3">
                    <div class="relative flex flex-col items-center justify-center w-full h-full p-6 lg:p-10 mr-5 rounded-lg">
                        <img src="capacitar.jpeg" class="rounded-3xl"/>
                        <p class="relative mt-6 text-lg text-center text-gray-600">Todos têm acesso à <strong>educação
                                tech</strong> de alta qualidade?</p>
                    </div>
                </div>

                <div class="w-full max-w-md mx-auto lg:mb-0 lg:w-1/3">
                    <div class="relative flex flex-col items-center justify-center w-full h-full p-6 lg:p-10 mr-5 rounded-lg">
                        <img src="empregar.jpeg" class="rounded-3xl"/>

                        <p class="relative mt-6 px-2 text-lg text-center text-gray-600">A participação de
                            <strong>tecnologia
                                no PIB do Brasil</strong>
                            dobrou?
                        </p>
                    </div>
                </div>

            </div>
            <div class="flex flex-col items-center justify-center w-full h-full max-w-lg py-6 px-2 mt-4 mx-auto text-center border-dotted border rounded-xl" style="border-color: #42AABB">
                <p class="text-xl font-medium text-gray-600">Esse futuro não é
                    previsível — mas ele é
                    <strong>possível,</strong> e nós estamos
                    <strong>comprometidos</strong> com ele.
                </p>

            </div>

            <video class="video-home pt-40 w-full" width="400" controls="">
                <source src="images/MOV_TECH_v1.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
        </div>
    </div>
    )

    }