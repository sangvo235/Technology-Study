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
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String timeConversion(String s) {
        // Write your code here    
        if (s.substring(0,2).equals("12") && s.contains("PM")) {
            return "12"+s.substring(2,8);
        }
        else if (s.contains("PM")) {
            String v1 = s.substring(0,2);
            int b = Integer.parseInt(v1);
            String v2 = Integer.toString(b+12);
            
            return v2+s.substring(2,8);
        }
        else if (s.substring(0,2).equals("12") && s.contains("AM")) {
            return "00"+s.substring(2,8);
        }
        else {
            return s.substring(0,8);
        }
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        String result = Result.timeConversion(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
