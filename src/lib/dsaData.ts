
export interface Question {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  link: string;
}

export interface DsaTopic {
  title: string;
  questions: Question[];
}

export const dsaSheetData: DsaTopic[] = [
  {
    title: "Arrays & Hashing",
    questions: [
      { id: "q1", title: "Contains Duplicate", difficulty: "Easy", link: "https://leetcode.com/problems/contains-duplicate/" },
      { id: "q2", title: "Valid Anagram", difficulty: "Easy", link: "https://leetcode.com/problems/valid-anagram/" },
      { id: "q3", title: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
      { id: "q4", title: "Group Anagrams", difficulty: "Medium", link: "https://leetcode.com/problems/group-anagrams/" },
      { id: "q5", title: "Top K Frequent Elements", difficulty: "Medium", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { id: "q6", title: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/" },
      { id: "q7", title: "Longest Consecutive Sequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
    ],
  },
  {
    title: "Two Pointers",
    questions: [
        { id: "q8", title: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
        { id: "q9", title: "3Sum", difficulty: "Medium", link: "https://leetcode.com/problems/3sum/" },
        { id: "q10", title: "Container With Most Water", difficulty: "Medium", link: "https://leetcode.com/problems/container-with-most-water/" },
    ],
  },
  {
    title: "Sliding Window",
    questions: [
        { id: "q11", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { id: "q12", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { id: "q13", title: "Minimum Window Substring", difficulty: "Hard", link: "https://leetcode.com/problems/minimum-window-substring/" },
    ],
  },
  {
    title: "Stack",
    questions: [
        { id: "q14", title: "Valid Parentheses", difficulty: "Easy", link: "https://leetcode.com/problems/valid-parentheses/" },
        { id: "q15", title: "Min Stack", difficulty: "Medium", link: "https://leetcode.com/problems/min-stack/" },
    ],
  },
   {
    title: "Binary Search",
    questions: [
        { id: "q16", title: "Binary Search", difficulty: "Easy", link: "https://leetcode.com/problems/binary-search/" },
        { id: "q17", title: "Search a 2D Matrix", difficulty: "Medium", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
        { id: "q18", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
    ],
  },
   {
    title: "Linked List",
    questions: [
        { id: "q19", title: "Reverse Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
        { id: "q20", title: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { id: "q21", title: "Reorder List", difficulty: "Medium", link: "https://leetcode.com/problems/reorder-list/" },
        { id: "q22", title: "Remove Nth Node From End of List", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        { id: "q23", title: "Linked List Cycle", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
    ],
  },
];
