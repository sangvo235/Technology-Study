import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void plusMinus(List<Integer> arr) {
        
        int countPositive = 0;
        int countNegative = 0;
        int countZero = 0;
        
        for (int i = 0; i < arr.size(); i++) {
            
            int pointer = arr.get(i); 

            if (pointer > 0) {
                countPositive++;
            }
            else if (pointer < 0) {
                countNegative++;
            }
            else {
                countZero++;
            }
            
        }

        System.out.println((float)countPositive / arr.size());
        System.out.println((float)countNegative / arr.size());
        System.out.println((float)countZero / arr.size());
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.plusMinus(arr);

        bufferedReader.close();
    }
}
