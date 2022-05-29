class Przyklad2 {
    init(): void {
        const form = document.getElementById('form') as HTMLFormElement
        const p = document.getElementById('wynik') as HTMLParagraphElement

        form.onsubmit = async (e: Event) => {
            e.preventDefault()

            const data = new FormData(form)
            const resp = await fetch('przyklad2.php', {
                method: 'POST',
                body: data,
            })
            p.innerHTML = p.innerHTML + (await resp.text())
        }
    }
}
