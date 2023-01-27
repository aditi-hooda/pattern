export const data = {
    code: `
public class PrintA {
    public static void main(String[] args) {
        for (int i = 0; i i <= 6; i++) {
            for (int j = 0; j < 5; j++) {
                if (i === 0 || i === 3 || j === 0 || j === 4) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}    
    `,
    explanation: `This code will print an 'A' made of asterisks (*) using nested loops. 
    The outer loop (i) controls the rows, and the inner loop (j) controls the columns. 
    The if statement inside the loops checks the current row (i) and column (j) 
    and prints an asterisk if it is the first row or middle row or the first column or last column, otherwise it will print a space.`
}