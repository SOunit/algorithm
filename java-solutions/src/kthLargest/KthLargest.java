package kthLargest;

import java.util.PriorityQueue;

public class KthLargest {
    int k;
    PriorityQueue<Integer> heap;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.heap = new PriorityQueue<>();

        // set numbers to heap
        for (int num : nums) {
            this.heap.offer(num);
        }

        // pop items
        while (this.heap.size() > k) {
            this.heap.poll();
        }
    }

    public int add(int val) {
        this.heap.offer(val);

        if (this.heap.size() > this.k) {
            this.heap.poll();
        }

        System.out.println(this.heap);

        return this.heap.peek();
    }

    public void execute() {
        int ans1 = this.add(3);
        int ans2 = this.add(5);
        int ans3 = this.add(10);
        int ans4 = this.add(9);
        int ans5 = this.add(4);
        System.out.println("4:" + ans1);
        System.out.println("5:" + ans2);
        System.out.println("5:" + ans3);
        System.out.println("8:" + ans4);
        System.out.println("8:" + ans5);
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */