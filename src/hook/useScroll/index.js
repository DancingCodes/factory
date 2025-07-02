export function useScroll() {
    const scrollY = ref(0)

    const handleScroll = () => {
        scrollY.value = window.scrollY
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return { scrollY }
}