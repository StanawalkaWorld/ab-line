<template>
    <footer class="bg-black text-white flex <lg:(flex-col items-center) p-10">
        <div class="footer-block <lg:w-full">
            <div
                class="w-1/2 h-20 bg-contain bg-no-repeat bg-center"
                :style="{
                    backgroundImage: `url('${require('@/assets/img/logo/short-new.webp')}')`,
                }"
            ></div>
        </div>
        <div class="footer-block">
            <div class="p-5 <lg:text-center">
                <h3 class="footer-header">Nawigacja:</h3>
                <ul class="text-lg">
                    <li>
                        <NuxtLink to="/">Strona główna</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/pricing">Wycena</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Kontakt</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-block">
            <div class="p-5">
                <h3 class="footer-header">
                    <i class="bi bi-building"></i> Dane firmy:
                </h3>
                <ul>
                    <li>
                        <span class="font-semibold">Pełna nazwa</span>: A&B Line
                    </li>
                    <li><span class="font-semibold">NIP</span>: 5811803184</li>
                    <li><span class="font-semibold">REGON</span>: 220330804</li>
                </ul>
            </div>
        </div>
        <div class="footer-block">
            <div class="p-5">
                <h3 class="footer-header">
                    <i class="bi bi-person"></i> Kontakt:
                </h3>
                <address class="text-lg">
                    <ul>
                        <li>
                            <i class="bi bi-envelope-fill mr-2"></i>
                            <a
                                href="mailto:abline.office@gmail.com"
                                class="text-primary-200"
                                >abline.office@gmail.com</a
                            >
                        </li>
                        <li>
                            <i class="bi bi-telephone-fill mr-2"></i>
                            <a href="tel:+48883766963" class="text-primary-200"
                                >+48 883 766 963</a
                            >
                        </li>
                    </ul>
                </address>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-block {
    @apply lg:flex-grow flex justify-center items-center my-5;
}
.footer-header {
    @apply text-xl text-center font-semibold mb-2;
}

.nuxt-link-exact-active {
    @apply text-rose-500 font-bold;
}
</style>
