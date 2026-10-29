# Write your MySQL query statement below
select DATE_FORMAT(trans_date, '%Y-%m') AS month, country ,
  Count(*) as trans_count ,sum(Case when state = "approved" then 1 else 0 end) as approved_count ,Sum(amount) as trans_total_amount ,sum(Case when state = "approved" then amount else 0 end) as approved_total_amount from Transactions
group by month,country