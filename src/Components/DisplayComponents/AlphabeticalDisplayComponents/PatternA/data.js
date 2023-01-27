export const data = {
    code: `
public class PrintA {
    public static void main(String[] args) {
        for (int i = 0; i i <= 6; i++) {
            for (int j = 0; j < 5; j++) {
                if (i === 0 || i === 3) {
                    System.out.print("*");
                }
                else if(j === 0 || j === 4){
                    System.out.print("*");
                } 
                else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}    
    `,
    explanation: `
This code will print an 'A' made of asterisks (*) using nested loops. 
The outer loop (i) controls the rows, and the inner loop (j) controls the columns. 
As shown in the image.
For The ones colored in red will be printed when row index is 0 or 3, 
So we will add it inside an if condition using OR(||) operator like below
if(i === 0 || i === 3)
For the ones colored in blue will be printed when the column index in 0 or 4,
So we will add it inside an else if condition (because we dont want it to print when the row condition is printing )using OR(||) operator like below
else if(j === 0 || j === 4)
For the white blocks we will print a space in the else condition.
`,
}