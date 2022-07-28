<template>
    <footer class="bg-black text-white flex <lg:(flex-col items-center) p-10">
        <div class="footer-block">
            <div class="p-5">
                <h3 class="footer-header">Nawigacja</h3>
                <ul>
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
                    <li>Pełna nazwa: A&B Line Andrzej Barański</li>
                    <li>NIP: 5811803184</li>
                    <li>REGON: 220330804</li>
                </ul>
            </div>
        </div>
        <div class="footer-block">
            <div class="p-5">
                <h3 class="footer-header">
                    <i class="bi bi-person"></i> Kontakt:
                </h3>
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
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-block {
    @apply lg:flex-grow flex justify-center items-center;
}
.footer-header {
    @apply text-xl text-center font-semibold mb-2;
}

.nuxt-link-exact-active {
    @apply text-rose-500 font-bold;
}
</style>
