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
The numbers in first column are Row Numbers and the numbers of last row are column numbers.
Try to work with these numbers and build some <span class="highlighter">logic using row and column numbers</span>.
This code will print an 'A' made of asterisks (*) using nested loops. 
The <span class="highlighter">outer</span> loop (i) controls the <span class="highlighter">rows</span>, and the <span class="highlighter">inner</span> loop (j) controls the <span class="highlighter">columns</span>. 
As shown in the image.
For The ones colored in <span class="highlighter">red</span> will be printed when <span class="highlighter">row index is 0 or 3</span>, 
So we will add it inside an if condition using OR(||) operator like below
if(i === 0 || i === 3)
For the ones colored in <span class="highlighter">blue</span> will be printed when the <span class="highlighter">column index in 0 or 4</span>,
So we will add it inside an else if condition (because we dont want it to print when the row condition is printing) using OR(||) operator like below
else if(j === 0 || j === 4)
For the white blocks we will print a space in the else condition.
`,
}