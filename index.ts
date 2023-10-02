const xtpo1: string = "Teste";
const xtpo2: number = 4;
const xtpo3:  boolean = true;
const xtpo4:  Array<string> = ["string1","string2"];
const xtpo5:  Array<string | number> = ["string1",2];
const xtpo6:  Array<string | number | boolean> = ["string1",2,true];
const xtpo7:  Array<Array<string>> = [["string"]];

const xtpo8:  Object = {
    teste:"teste"
};

function teste(x:string, y:number): string{
    let xtpo:string = 'O X é ';
    xtpo = xtpo + x;
    xtpo += " e o y é ";
    xtpo += y;

    return xtpo;
}

console.log(teste("Vasco",1));
