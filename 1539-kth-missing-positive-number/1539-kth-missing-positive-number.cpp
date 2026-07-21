class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int n = arr.size();
        int maxElement = INT_MIN;
        for (int i = 0; i < n; i++) {
            maxElement = max(maxElement, arr[i]);
        }
        int missingElement = maxElement - n;
        if (missingElement == 0) {
            return maxElement + k;
        } else if (missingElement >= k) {
            vector<int> nums(maxElement + 1, 0);
            vector<int> resultArr;
            for (int i = 0; i < n; i++) {
                int value = arr[i];
                nums[value] = 1;
            }
               for (int i = 1; i <= maxElement; i++) {
                if (nums[i] == 0) {
                    resultArr.push_back(i);
                }
            }
            return resultArr[k - 1];
        } else {
            return maxElement + k - missingElement;
        }
        return 0;
    }
};