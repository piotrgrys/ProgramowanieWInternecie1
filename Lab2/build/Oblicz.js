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
class Oblicz {
    init() {
        const form = document.getElementById('btnLiczNaSerwerze');
        const p = document.getElementById('result-txt-server');
        form.onsubmit = (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const data = new FormData(form);
            const resp = yield fetch('Calculator.php', {
                method: 'POST',
                body: data,
            });
            p.innerHTML = p.innerHTML + (yield resp.text());
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JsaWN6LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL09ibGljei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxNQUFNO0lBQ1IsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQW9CLENBQUE7UUFDNUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBeUIsQ0FBQTtRQUU5RSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQU8sQ0FBUSxFQUFFLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBRWxCLE1BQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQy9CLE1BQU0sSUFBSSxHQUFHLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQTtZQUNGLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDbkQsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQ0oifQ==