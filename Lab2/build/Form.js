"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Form {
    constructor(calculator, history) {
        this.calculator = calculator;
        this.history = history;
    }
    init() {
        const form = document.getElementById('calculator-form');
        form.onsubmit = (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const xInput = document.getElementById('x-txt');
            const yInput = document.getElementById('y-txt');
            const operationSelect = document.getElementById('operation');
            const wynikZSerwera = document.getElementById('result-txt-server');
            if (operationSelect.selectedOptions.length) {
                const resultTxt = document.getElementById('result-txt');
                const operation = operationSelect.selectedOptions[0].value;
                const x = parseInt(xInput.value);
                const y = parseInt(yInput.value);
                const result = this.calculator.calculate(operation, x, y);
                resultTxt.value = result.toString();
                this.history.add({ x, y, operation, result });
                const history = document.getElementById('history');
                history.innerHTML = this.getHistoryHtml();
            }
            const p = document.getElementById('result-txt-server');
            const data = new FormData(form);
            const resp = yield fetch('Calculator.php', {
                method: 'POST',
                body: data,
            }).then((response) => __awaiter(this, void 0, void 0, function* () {
                let wynik = yield response.text();
                console.log(wynik);
                wynikZSerwera.value = wynik;
            }));
            //console.log(resp);
            //p.innerHTML = p.innerHTML + (await resp.text())
        });
    }
    getHistoryHtml() {
        return this.history.getEntries().map(e => `${e.x} ${e.operation} ${e.y} = ${e.result}`).join('<br>');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLElBQUk7SUFHTixZQUFZLFVBQXNCLEVBQUUsT0FBMEI7UUFFMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDMUIsQ0FBQztJQUNELElBQUk7UUFDQSxNQUFNLElBQUksR0FBb0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBb0IsQ0FBQTtRQUMzRixJQUFJLENBQUMsUUFBUSxHQUFHLENBQU8sQ0FBUSxFQUFFLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ2xCLE1BQU0sTUFBTSxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBcUIsQ0FBQTtZQUNyRixNQUFNLE1BQU0sR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUE7WUFDckYsTUFBTSxlQUFlLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFzQixDQUFBO1lBQ3BHLE1BQU0sYUFBYSxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFxQixDQUFBO1lBQ3hHLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hDLE1BQU0sU0FBUyxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBcUIsQ0FBQTtnQkFDN0YsTUFBTSxTQUFTLEdBQW1CLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBdUIsQ0FBQTtnQkFDNUYsTUFBTSxDQUFDLEdBQVcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDeEMsTUFBTSxDQUFDLEdBQVcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDeEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDekQsU0FBUyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtnQkFDN0MsTUFBTSxPQUFPLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUF5QixDQUFBO2dCQUN2RixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTthQUc1QztZQUNELE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQXlCLENBQUE7WUFDOUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDL0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLFFBQVEsRUFBQyxFQUFFO2dCQUV0QixJQUFJLEtBQUssR0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsYUFBYSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtZQUNGLG9CQUFvQjtZQUNwQixpREFBaUQ7UUFDckQsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0lBQ0QsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4RyxDQUFDO0NBQ0oifQ==