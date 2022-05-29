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
class Przyklad3 {
    init() {
        const btn = document.getElementById('przycisk');
        const p = document.getElementById('wynik');
        btn.onclick = (e) => __awaiter(this, void 0, void 0, function* () {
            const resp = yield fetch('przyklad3.php');
            const data = yield resp.json();
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
            `;
            html += data.map((s) => `
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
            `);
            html += `</tbody></table>`;
            p.innerHTML = html;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJ6eWtsYWQzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1ByenlrbGFkMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBWUEsTUFBTSxTQUFTO0lBQ1gsSUFBSTtRQUNBLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFzQixDQUFBO1FBQ3BFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUF5QixDQUFBO1FBRWxFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBTyxDQUFRLEVBQUUsRUFBRTtZQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUN6QyxNQUFNLElBQUksR0FBZSxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUUxQyxJQUFJLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7O2FBZVYsQ0FBQTtZQUNELElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUNaLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7MEJBRUcsQ0FBQyxDQUFDLEVBQUU7MEJBQ0osQ0FBQyxDQUFDLEtBQUs7MEJBQ1AsQ0FBQyxDQUFDLEtBQUs7MEJBQ1AsQ0FBQyxDQUFDLEdBQUc7MEJBQ0wsQ0FBQyxDQUFDLFNBQVM7MEJBQ1gsQ0FBQyxDQUFDLFdBQVc7MEJBQ2IsQ0FBQyxDQUFDLGVBQWU7MEJBQ2pCLENBQUMsQ0FBQyxHQUFHOzBCQUNMLENBQUMsQ0FBQyxHQUFHOzthQUVsQixDQUNBLENBQUE7WUFDRCxJQUFJLElBQUksa0JBQWtCLENBQUE7WUFFMUIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDdEIsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQ0oifQ==