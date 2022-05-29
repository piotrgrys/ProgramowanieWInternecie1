class Form { 
    calculator: Calculator 
    history: CalculatorHistory 
    constructor(calculator: Calculator, history: CalculatorHistory) 
    { 
        this.calculator = calculator 
        this.history = history 
    } 
    init(): void { 
        const form: HTMLFormElement = document.getElementById('calculator-form') as HTMLFormElement 
        form.onsubmit = async (e: Event) => { 
            e.preventDefault() 
            const xInput: HTMLInputElement = document.getElementById('x-txt') as HTMLInputElement 
            const yInput: HTMLInputElement = document.getElementById('y-txt') as HTMLInputElement 
            const operationSelect: HTMLSelectElement = document.getElementById('operation') as HTMLSelectElement 
            const wynikZSerwera: HTMLInputElement = document.getElementById('result-txt-server') as HTMLInputElement 
            if (operationSelect.selectedOptions.length) { 
                const resultTxt: HTMLInputElement = document.getElementById('result-txt') as HTMLInputElement 
                const operation: OperationsEnum = operationSelect.selectedOptions[0].value as OperationsEnum 
                const x: number = parseInt(xInput.value) 
                const y: number = parseInt(yInput.value) 
                const result = this.calculator.calculate(operation, x, y) 
                resultTxt.value = result.toString() 
                this.history.add({ x, y, operation, result }) 
                const history: HTMLElement = document.getElementById('history') as HTMLParagraphElement 
                history.innerHTML = this.getHistoryHtml() 
            
            
            }
            const p = document.getElementById('result-txt-server') as HTMLParagraphElement 
            const data = new FormData(form)
            const resp = await fetch('Calculator.php', {
                method: 'POST',
                body: data,
            }).then(async (response)=>
            {
                let wynik=await response.text();
                console.log(wynik);
                wynikZSerwera.value=wynik;
            })
        } 
    } 
    getHistoryHtml(): string { 
        return this.history.getEntries().map(e => `${e.x} ${e.operation} ${e.y} = ${e.result}`).join('<br>') 
    } 
}