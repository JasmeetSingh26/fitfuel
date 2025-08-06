
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
    title: 'Arrays & Hashing',
    questions: [
      { id: 'q1', title: 'Contains Duplicate', difficulty: 'Easy', link: 'https://leetcode.com/problems/contains-duplicate/' },
      { id: 'q2', title: 'Valid Anagram', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-anagram/' },
      { id: 'q3', title: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/' },
      { id: 'q4', title: 'Group Anagrams', difficulty: 'Medium', link: 'https://leetcode.com/problems/group-anagrams/' },
      { id: 'q5', title: 'Top K Frequent Elements', difficulty: 'Medium', link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
      { id: 'q6', title: 'Product of Array Except Self', difficulty: 'Medium', link: 'https://leetcode.com/problems/product-of-array-except-self/' },
      { id: 'q7', title: 'Valid Sudoku', difficulty: 'Medium', link: 'https://leetcode.com/problems/valid-sudoku/' },
      { id: 'q8', title: 'Encode and Decode Strings', difficulty: 'Medium', link: 'https://leetcode.com/problems/encode-and-decode-strings/' },
      { id: 'q9', title: 'Longest Consecutive Sequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-consecutive-sequence/' },
      { id: 'q145', title: 'First Missing Positive', difficulty: 'Hard', link: 'https://leetcode.com/problems/first-missing-positive/' },
      { id: 'q146', title: 'Substring with Concatenation of All Words', difficulty: 'Hard', link: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/' },
      { id: 'q147', title: 'Sort Colors', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-colors/' },
      { id: 'q148', title: 'Find the Duplicate Number', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-the-duplicate-number/' },
      { id: 'q149', title: 'Rotate Image', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-image/' },
      { id: 'q150', title: 'Set Matrix Zeroes', difficulty: 'Medium', link: 'https://leetcode.com/problems/set-matrix-zeroes/' },
    ],
  },
  {
    title: 'Two Pointers',
    questions: [
      { id: 'q10', title: 'Valid Palindrome', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-palindrome/' },
      { id: 'q11', title: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium', link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
      { id: 'q12', title: '3Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/3sum/' },
      { id: 'q13', title: 'Container With Most Water', difficulty: 'Medium', link: 'https://leetcode.com/problems/container-with-most-water/' },
      { id: 'q14', title: 'Trapping Rain Water', difficulty: 'Hard', link: 'https://leetcode.com/problems/trapping-rain-water/' },
      { id: 'q133', title: 'Merge Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-sorted-array/' },
      { id: 'q134', title: 'Move Zeroes', difficulty: 'Easy', link: 'https://leetcode.com/problems/move-zeroes/' },
      { id: 'q135', title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
    ],
  },
  {
    title: 'Sliding Window',
    questions: [
      { id: 'q15', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
      { id: 'q16', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
      { id: 'q17', title: 'Longest Repeating Character Replacement', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
      { id: 'q18', title: 'Permutation in String', difficulty: 'Medium', link: 'https://leetcode.com/problems/permutation-in-string/' },
      { id: 'q19', title: 'Minimum Window Substring', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-window-substring/' },
      { id: 'q20', title: 'Sliding Window Maximum', difficulty: 'Hard', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
      { id: 'q136', title: 'Frequency of the Most Frequent Element', difficulty: 'Medium', link: 'https://leetcode.com/problems/frequency-of-the-most-frequent-element/' },
    ],
  },
  {
    title: 'Stack',
    questions: [
      { id: 'q21', title: 'Valid Parentheses', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-parentheses/' },
      { id: 'q22', title: 'Min Stack', difficulty: 'Medium', link: 'https://leetcode.com/problems/min-stack/' },
      { id: 'q23', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
      { id: 'q24', title: 'Generate Parentheses', difficulty: 'Medium', link: 'https://leetcode.com/problems/generate-parentheses/' },
      { id: 'q25', title: 'Daily Temperatures', difficulty: 'Medium', link: 'https://leetcode.com/problems/daily-temperatures/' },
      { id: 'q26', title: 'Car Fleet', difficulty: 'Medium', link: 'https://leetcode.com/problems/car-fleet/' },
      { id: 'q27', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
    ],
  },
  {
    title: 'Binary Search',
    questions: [
      { id: 'q28', title: 'Binary Search', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-search/' },
      { id: 'q29', title: 'Search a 2D Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-a-2d-matrix/' },
      { id: 'q30', title: 'Koko Eating Bananas', difficulty: 'Medium', link: 'https://leetcode.com/problems/koko-eating-bananas/' },
      { id: 'q31', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
      { id: 'q32', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
      { id: 'q33', title: 'Time Based Key-Value Store', difficulty: 'Medium', link: 'https://leetcode.com/problems/time-based-key-value-store/' },
      { id: 'q34', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
    ],
  },
  {
    title: 'Linked List',
    questions: [
      { id: 'q35', title: 'Reverse Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-linked-list/' },
      { id: 'q36', title: 'Merge Two Sorted Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
      { id: 'q37', title: 'Reorder List', difficulty: 'Medium', link: 'https://leetcode.com/problems/reorder-list/' },
      { id: 'q38', title: 'Remove Nth Node From End of List', difficulty: 'Medium', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
      { id: 'q39', title: 'Copy List with Random Pointer', difficulty: 'Medium', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
      { id: 'q40', title: 'Add Two Numbers', difficulty: 'Medium', link: 'https://leetcode.com/problems/add-two-numbers/' },
      { id: 'q41', title: 'Linked List Cycle', difficulty: 'Easy', link: 'https://leetcode.com/problems/linked-list-cycle/' },
      { id: 'q42', title: 'Find the Duplicate Number', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-the-duplicate-number/' },
      { id: 'q43', title: 'LRU Cache', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/' },
      { id: 'q44', title: 'Merge k Sorted Lists', difficulty: 'Hard', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
      { id: 'q45', title: 'Reverse Nodes in k-Group', difficulty: 'Hard', link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/' },
    ],
  },
  {
    title: 'Trees',
    questions: [
      { id: 'q46', title: 'Invert Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/invert-binary-tree/' },
      { id: 'q47', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
      { id: 'q48', title: 'Diameter of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
      { id: 'q49', title: 'Balanced Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/balanced-binary-tree/' },
      { id: 'q50', title: 'Same Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/same-tree/' },
      { id: 'q51', title: 'Subtree of Another Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/subtree-of-another-tree/' },
      { id: 'q52', title: 'Lowest Common Ancestor of a Binary Search Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
      { id: 'q53', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
      { id: 'q54', title: 'Binary Tree Right Side View', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
      { id: 'q55', title: 'Count Good Nodes in Binary Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/' },
      { id: 'q56', title: 'Validate Binary Search Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/validate-binary-search-tree/' },
      { id: 'q57', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' },
      { id: 'q58', title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/' },
      { id: 'q59', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
      { id: 'q60', title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
    ],
  },
  {
    title: 'Tries',
    questions: [
      { id: 'q61', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
      { id: 'q62', title: 'Design Add and Search Words Data Structure', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/' },
      { id: 'q63', title: 'Word Search II', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-search-ii/' },
    ],
  },
  {
    title: 'Heap / Priority Queue',
    questions: [
      { id: 'q64', title: 'Kth Largest Element in a Stream', difficulty: 'Easy', link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/' },
      { id: 'q65', title: 'Last Stone Weight', difficulty: 'Easy', link: 'https://leetcode.com/problems/last-stone-weight/' },
      { id: 'q66', title: 'K Closest Points to Origin', difficulty: 'Medium', link: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
      { id: 'q67', title: 'Kth Largest Element in an Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
      { id: 'q68', title: 'Task Scheduler', difficulty: 'Medium', link: 'https://leetcode.com/problems/task-scheduler/' },
      { id: 'q69', title: 'Design Twitter', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-twitter/' },
      { id: 'q70', title: 'Find Median from Data Stream', difficulty: 'Hard', link: 'https://leetcode.com/problems/find-median-from-data-stream/' },
    ],
  },
  {
    title: 'Backtracking',
    questions: [
      { id: 'q71', title: 'Subsets', difficulty: 'Medium', link: 'https://leetcode.com/problems/subsets/' },
      { id: 'q72', title: 'Combination Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum/' },
      { id: 'q73', title: 'Permutations', difficulty: 'Medium', link: 'https://leetcode.com/problems/permutations/' },
      { id: 'q74', title: 'Subsets II', difficulty: 'Medium', link: 'https://leetcode.com/problems/subsets-ii/' },
      { id: 'q75', title: 'Combination Sum II', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum-ii/' },
      { id: 'q76', title: 'Word Search', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-search/' },
      { id: 'q77', title: 'Palindrome Partitioning', difficulty: 'Medium', link: 'https://leetcode.com/problems/palindrome-partitioning/' },
      { id: 'q78', title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
      { id: 'q79', title: 'N-Queens', difficulty: 'Hard', link: 'https://leetcode.com/problems/n-queens/' },
    ],
  },
  {
    title: 'Graphs',
    questions: [
      { id: 'q80', title: 'Number of Islands', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-islands/' },
      { id: 'q81', title: 'Clone Graph', difficulty: 'Medium', link: 'https://leetcode.com/problems/clone-graph/' },
      { id: 'q82', title: 'Max Area of Island', difficulty: 'Medium', link: 'https://leetcode.com/problems/max-area-of-island/' },
      { id: 'q83', title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/' },
      { id: 'q84', title: 'Surrounded Regions', difficulty: 'Medium', link: 'https://leetcode.com/problems/surrounded-regions/' },
      { id: 'q85', title: 'Rotting Oranges', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotting-oranges/' },
      { id: 'q86', title: 'Walls and Gates', difficulty: 'Medium', link: 'https://leetcode.com/problems/walls-and-gates/' },
      { id: 'q87', title: 'Course Schedule', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule/' },
      { id: 'q88', title: 'Course Schedule II', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule-ii/' },
      { id: 'q89', title: 'Redundant Connection', difficulty: 'Medium', link: 'https://leetcode.com/problems/redundant-connection/' },
      { id: 'q90', title: 'Number of Connected Components in an Undirected Graph', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/' },
      { id: 'q91', title: 'Graph Valid Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/graph-valid-tree/' },
      { id: 'q92', title: 'Word Ladder', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-ladder/' },
      { id: 'q137', title: 'Reconstruct Itinerary', difficulty: 'Hard', link: 'https://leetcode.com/problems/reconstruct-itinerary/' },
      { id: 'q138', title: 'Min Cost to Connect All Points', difficulty: 'Medium', link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/' },
      { id: 'q139', title: 'Network Delay Time', difficulty: 'Medium', link: 'https://leetcode.com/problems/network-delay-time/' },
    ],
  },
  {
    title: 'Advanced Graphs',
    questions: [
        { id: 'q93', title: 'Cheapest Flights Within K Stops', difficulty: 'Medium', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' },
        { id: 'q94', title: 'Swim in Rising Water', difficulty: 'Hard', link: 'https://leetcode.com/problems/swim-in-rising-water/' },
        { id: 'q95', title: 'Alien Dictionary', difficulty: 'Hard', link: 'https://leetcode.com/problems/alien-dictionary/' },
        { id: 'q96', title: 'Path with Maximum Probability', difficulty: 'Medium', link: 'https://leetcode.com/problems/path-with-maximum-probability/' },
        { id: 'q140', title: 'Design Graph With Shortest Path Calculator', difficulty: 'Hard', link: 'https://leetcode.com/problems/design-graph-with-shortest-path-calculator/' },
    ]
  },
  {
    title: '1-D Dynamic Programming',
    questions: [
      { id: 'q97', title: 'Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/climbing-stairs/' },
      { id: 'q98', title: 'Min Cost Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/min-cost-climbing-stairs/' },
      { id: 'q99', title: 'House Robber', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber/' },
      { id: 'q100', title: 'House Robber II', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber-ii/' },
      { id: 'q101', title: 'Longest Palindromic Substring', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-palindromic-substring/' },
      { id: 'q102', title: 'Palindromic Substrings', difficulty: 'Medium', link: 'https://leetcode.com/problems/palindromic-substrings/' },
      { id: 'q103', title: 'Decode Ways', difficulty: 'Medium', link: 'https://leetcode.com/problems/decode-ways/' },
      { id: 'q104', title: 'Coin Change', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/' },
      { id: 'q105', title: 'Maximum Product Subarray', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-product-subarray/' },
      { id: 'q106', title: 'Word Break', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-break/' },
      { id: 'q107', title: 'Longest Increasing Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
      { id: 'q108', title: 'Partition Equal Subset Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
    ],
  },
  {
    title: '2-D Dynamic Programming',
    questions: [
      { id: 'q109', title: 'Unique Paths', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-paths/' },
      { id: 'q110', title: 'Longest Common Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-common-subsequence/' },
      { id: 'q111', title: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/' },
      { id: 'q112', title: 'Coin Change II', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change-ii/' },
      { id: 'q113', title: 'Target Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/target-sum/' },
      { id: 'q114', title: 'Interleaving String', difficulty: 'Medium', link: 'https://leetcode.com/problems/interleaving-string/' },
      { id: 'q115', title: 'Edit Distance', difficulty: 'Hard', link: 'https://leetcode.com/problems/edit-distance/' },
      { id: 'q116', title: 'Distinct Subsequences', difficulty: 'Hard', link: 'https://leetcode.com/problems/distinct-subsequences/' },
      { id: 'q117', title: 'Burst Balloons', difficulty: 'Hard', link: 'https://leetcode.com/problems/burst-balloons/' },
      { id: 'q118', title: 'Regular Expression Matching', difficulty: 'Hard', link: 'https://leetcode.com/problems/regular-expression-matching/' },
    ],
  },
  {
    title: 'Greedy',
    questions: [
      { id: 'q119', title: 'Maximum Subarray', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-subarray/' },
      { id: 'q120', title: 'Jump Game', difficulty: 'Medium', link: 'https://leetcode.com/problems/jump-game/' },
      { id: 'q121', title: 'Jump Game II', difficulty: 'Medium', link: 'https://leetcode.com/problems/jump-game-ii/' },
      { id: 'q122', title: 'Gas Station', difficulty: 'Medium', link: 'https://leetcode.com/problems/gas-station/' },
      { id: 'q123', title: 'Hand of Straights', difficulty: 'Medium', link: 'https://leetcode.com/problems/hand-of-straights/' },
      { id: 'q124', title: 'Merge Triplets to Form Target Triplet', difficulty: 'Medium', link: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/' },
      { id: 'q125', title: 'Partition Labels', difficulty: 'Medium', link: 'https://leetcode.com/problems/partition-labels/' },
      { id: 'q126', title: 'Valid Parenthesis String', difficulty: 'Medium', link: 'https://leetcode.com/problems/valid-parenthesis-string/' },
    ],
  },
  {
    title: 'Intervals',
    questions: [
      { id: 'q127', title: 'Insert Interval', difficulty: 'Medium', link: 'https://leetcode.com/problems/insert-interval/' },
      { id: 'q128', title: 'Merge Intervals', difficulty: 'Medium', link: 'https://leetcode.com/problems/merge-intervals/' },
      { id: 'q129', title: 'Non-overlapping Intervals', difficulty: 'Medium', link: 'https://leetcode.com/problems/non-overlapping-intervals/' },
      { id: 'q130', title: 'Meeting Rooms', difficulty: 'Easy', link: 'https://leetcode.com/problems/meeting-rooms/' },
      { id: 'q131', title: 'Meeting Rooms II', difficulty: 'Medium', link: 'https://leetcode.com/problems/meeting-rooms-ii/' },
      { id: 'q132', title: 'Minimum Interval to Include Each Query', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/' },
    ],
  },
  {
    title: 'Bit Manipulation',
    questions: [
      { id: 'q141', title: 'Single Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/single-number/' },
      { id: 'q142', title: 'Number of 1 Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/number-of-1-bits/' },
      { id: 'q143', title: 'Counting Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/counting-bits/' },
      { id: 'q144', title: 'Reverse Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-bits/' },
    ],
  },
];
