interface CalculatorHistoryEntry
{
    x:number,
    y:number,
    operation:OperationsEnum,
    result:number
}

class CalculatorHistory
{
    Entries:CalculatorHistoryEntry[]
    constructor ()
    {
        this.Entries=[]
    }
    add(entry: CalculatorHistoryEntry) 
    { 
        this.Entries.push(entry);
    }
    getEntries():CalculatorHistoryEntry[]
    {
        return this.Entries;
    }

}