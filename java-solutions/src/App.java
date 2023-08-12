import kthLargest.KthLargest;

public class App {
    public static void main(String[] args) throws Exception {

        int k = 3;
        int[] nums = { 4, 5, 8, 2 };
        KthLargest solution8 = new KthLargest(k, nums);
        solution8.execute();
    }
}
