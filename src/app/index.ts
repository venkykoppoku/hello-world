export function range(from:number,to:number): Array<number> {
    var res: Array<number> = [];
    for(var i = from; i < to;i++ ) {
       res.push(i)
    }
    return res;
}

export function factorial(n: number): number {
    return range(1,n+1).reduce((x,y) => x *y ,1 )
} 

export function ncr(n: number,r: number):number{
    if(r === 0 || r === n) 
        return 1;
    return factorial(n)/(factorial(n-r) * factorial(r));
}

export function pascalaLine(n: number): Array<number> {
    if (n === 1) 
        return [1] ;
    return range(0,n).map(r => ncr(n-1,r));
}