class Przyklad1 {
    init(): void {
        const btn = document.getElementById('przycisk') as HTMLButtonElement
        const p = document.getElementById('wynik') as HTMLParagraphElement

        btn.onclick = async (e: Event) => {
            // btn.style.backgroundColor = 'red'

            const resp = await fetch('przyklad1.php')
            p.innerHTML = await resp.text()

            // btn.style.backgroundColor = 'green'
        }
    }
}
