# Write your MySQL query statement below

select 'Low Salary' AS category,
    count(*) AS accounts_count
from Accounts
where income < 20000

union all

select 'Average Salary' AS category,
    count(*) AS accounts_count
from Accounts
where income between 20000 AND 50000

union all

select 'High Salary' AS category,
    count(*) AS accounts_count
from Accounts
where income > 50000;