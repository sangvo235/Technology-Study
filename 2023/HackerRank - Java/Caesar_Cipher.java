import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Result {

    /*
     * Complete the 'caesarCipher' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     * 1. STRING s
     * 2. INTEGER k
     */

    public static String caesarCipher(String s, int k) {
        // Write your code here
        char[] output = new char[s.length()];
        int ascii_value = 0;
        int new_ascii = 0;
        StringBuilder final_answer = new StringBuilder("");

        for (int i = 0; i < s.length(); i++) {

            output[i] = s.charAt(i);
            ascii_value = (int) output[i];
            int k_changed = k % 26; // required to solve for k > 26

            if (ascii_value > 96 && ascii_value < 123) {
                new_ascii = (char) (ascii_value + k_changed);

                if (new_ascii > 122) {
                    new_ascii = (char) ((new_ascii % 122) + 96);
                }

                char final_char = (char) new_ascii;
                final_answer.append(final_char);
            }

            else if (ascii_value > 64 && ascii_value < 91) {
                new_ascii = (char) (ascii_value + k_changed);

                if (new_ascii > 90) {
                    new_ascii = (char) ((new_ascii % 90) + 64);
                }

                char final_char = (char) new_ascii;
                final_answer.append(final_char);
            }

            else {
                char final_char = output[i];
                final_answer.append(final_char);
            }

        }
        return final_answer.toString();
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        String s = bufferedReader.readLine();

        int k = Integer.parseInt(bufferedReader.readLine().trim());

        String result = Result.caesarCipher(s, k);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}