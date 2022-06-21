document.querySelectorAll('.aDodajDoKoszyka').forEach((elem)=> {
    elem.addEventListener('click', async (e) => {
        e.preventDefault()
        const a = e.currentTarget
        const href = a.getAttribute('href')
        const resp = await fetch(href, {method:'post'})
        const text = await resp.text()
        console.log(text)
        if (!isNaN(text))
        {
            const ok = document.createElement('i')
            ok.classList.add('fas', 'fa-check-circle', 'text-success')
            a.parentNode.replaceChild(ok, a)
            const elem=document.getElementById("liczbaOfert").innerHTML=text;
            elem.textContent=text;
        } else {
            alert('Wystąpił błąd:'+text)
        }
    })
})

