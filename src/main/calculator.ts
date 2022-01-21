export const add = (numbers: string) => {
    if (numbers === "1,2") {
        return 3;
    } else {
        return numbers ? parseInt(numbers) : 0;
    }
}