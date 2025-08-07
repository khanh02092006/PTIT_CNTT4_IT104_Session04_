function handleUnionType(value: string | number): void {
    if (typeof value === "string") {
        console.log(`${value.length} ký tự`);
    } else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log(`${value} là số chẵn`);
        } else {
            console.log(`${value} là số lẻ`);
        }
    }


}
console.log(handleUnionType(2));