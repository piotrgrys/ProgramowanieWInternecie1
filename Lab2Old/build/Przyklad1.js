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
class Przyklad1 {
    init() {
        const btn = document.getElementById('przycisk');
        const p = document.getElementById('wynik');
        btn.onclick = (e) => __awaiter(this, void 0, void 0, function* () {
            // btn.style.backgroundColor = 'red'
            const resp = yield fetch('przyklad1.php');
            p.innerHTML = yield resp.text();
            // btn.style.backgroundColor = 'green'
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJ6eWtsYWQxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1ByenlrbGFkMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxTQUFTO0lBQ1gsSUFBSTtRQUNBLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFzQixDQUFBO1FBQ3BFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUF5QixDQUFBO1FBRWxFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBTyxDQUFRLEVBQUUsRUFBRTtZQUM3QixvQ0FBb0M7WUFFcEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDekMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUUvQixzQ0FBc0M7UUFDMUMsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQ0oifQ==