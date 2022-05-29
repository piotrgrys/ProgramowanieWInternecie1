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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sSUFBSTtJQUdOLFlBQVksVUFBc0IsRUFBRSxPQUEwQjtRQUUxRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUMxQixDQUFDO0lBQ0QsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFvQixRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFvQixDQUFBO1FBQzNGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBTyxDQUFRLEVBQUUsRUFBRTtZQUMvQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDbEIsTUFBTSxNQUFNLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFxQixDQUFBO1lBQ3JGLE1BQU0sTUFBTSxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBcUIsQ0FBQTtZQUNyRixNQUFNLGVBQWUsR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUE7WUFDcEcsTUFBTSxhQUFhLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQXFCLENBQUE7WUFDeEcsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsTUFBTSxTQUFTLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFxQixDQUFBO2dCQUM3RixNQUFNLFNBQVMsR0FBbUIsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUF1QixDQUFBO2dCQUM1RixNQUFNLENBQUMsR0FBVyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUN4QyxNQUFNLENBQUMsR0FBVyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUN4QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN6RCxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO2dCQUM3QyxNQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXlCLENBQUE7Z0JBQ3ZGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2FBRzVDO1lBQ0QsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBeUIsQ0FBQTtZQUM5RSxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMvQixNQUFNLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdkMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLElBQUk7YUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLENBQU8sUUFBUSxFQUFDLEVBQUU7Z0JBRXRCLElBQUksS0FBSyxHQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixhQUFhLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFBO1lBQ0Ysb0JBQW9CO1lBQ3BCLGlEQUFpRDtRQUNyRCxDQUFDLENBQUEsQ0FBQTtJQUNMLENBQUM7SUFDRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hHLENBQUM7Q0FDSiJ9