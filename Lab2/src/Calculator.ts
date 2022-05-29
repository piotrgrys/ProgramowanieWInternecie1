interface Operands 
{ 
    x: number 
    y: number 
}

enum OperationsEnum 
{ 
    ADD = 'ADD', 
    SUBTRACT = 'SUBTRACT', 
    MULTIPLY = 'MULTIPLY', 
    DIVIDE = 'DIVIDE' 
}

class Calculator 
{ 
    private add(operands: Operands): number 
    { 
        return operands.x + operands.y 
    }
    private subtract(operands: Operands): number 
    { 
        return operands.x - operands.y 
    } 
    private multiply(operands: Operands): number 
    { 
        return operands.x * operands.y 
    } 
    private divide(operands: Operands): number 
    { 
        return operands.x / operands.y 
    } 
    calculate(operation: OperationsEnum, x: number, y: number): number 
    { 
        const op: Operands = { x: x, y: y } 
        switch (operation) { 
            case OperationsEnum.ADD: return this.add(op) 
            case OperationsEnum.SUBTRACT: return this.subtract(op) 
            case OperationsEnum.MULTIPLY: return this.multiply(op) 
            case OperationsEnum.DIVIDE: return this.divide(op) 
        } 
    } 
}