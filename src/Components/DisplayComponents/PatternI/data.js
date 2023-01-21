export const data = {
    code: `
    public class PrintI {
        public static void main(String[] args) {
            for (int i = 0; i i <= 6; i++) {
                for (int j = 0; j < 5; j++) {
                    if (i == 0 || i === 6 || j == 2) {
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
    explanation:`This code will print an 'I' made of asterisks (*) using nested loops. 
    The outer loop (i) controls the rows, and the inner loop (j) controls the columns same as in matrix. 
    The if statement inside the loops checks the current row (i) and column (j) 
    and prints an asterisk if it is the first or last row or the middle column, otherwise it will print a space.`
}