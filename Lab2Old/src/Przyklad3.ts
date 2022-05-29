interface Samochod {
    id: number
    marka: string
    model: string
    rok: number
    pojemnosc: number
    typ_silnika: string
    liczba_poduszek: number
    abs: string
    esp: string
}

class Przyklad3 {
    init(): void {
        const btn = document.getElementById('przycisk') as HTMLButtonElement
        const p = document.getElementById('wynik') as HTMLParagraphElement

        btn.onclick = async (e: Event) => {
            const resp = await fetch('przyklad3.php')
            const data: Samochod[] = await resp.json()

            let html = `<table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Marka</th>
                    <th>Model</th>
                    <th>Rok</th>
                    <th>Pojemność</th>
                    <th>Typ silnika</th>
                    <th>Liczba poduszek</th>
                    <th>ABS</th>
                    <th>ESP</th>
                </tr>
                </thead>
                <tbody>
            `
            html += data.map(
                (s) => `
                <tr>
                    <td>${s.id}</td>
                    <td>${s.marka}</td>
                    <td>${s.model}</td>
                    <td>${s.rok}</td>
                    <td>${s.pojemnosc}</td>
                    <td>${s.typ_silnika}</td>
                    <td>${s.liczba_poduszek}</td>
                    <td>${s.abs}</td>
                    <td>${s.esp}</td>
                </tr>
            `
            )
            html += `</tbody></table>`

            p.innerHTML = html
        }
    }
}
