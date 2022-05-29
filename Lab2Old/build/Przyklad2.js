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
class Przyklad2 {
    init() {
        const form = document.getElementById('form');
        const p = document.getElementById('wynik');
        form.onsubmit = (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const data = new FormData(form);
            const resp = yield fetch('przyklad2.php', {
                method: 'POST',
                body: data,
            });
            p.innerHTML = p.innerHTML + (yield resp.text());
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJ6eWtsYWQyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1ByenlrbGFkMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxTQUFTO0lBQ1gsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFvQixDQUFBO1FBQy9ELE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUF5QixDQUFBO1FBRWxFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBTyxDQUFRLEVBQUUsRUFBRTtZQUMvQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7WUFFbEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDL0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsZUFBZSxFQUFFO2dCQUN0QyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQTtZQUNGLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDbkQsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQ0oifQ==