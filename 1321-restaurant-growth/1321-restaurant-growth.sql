# Write your MySQL query statement below
with Customer_table as (
    select visited_on, sum(amount) as amount
from Customer
group by visited_on
),
result as (select
    visited_on,
    sum(amount) OVER (
        order by visited_on
        range between interval 6 day preceding
        and current row
    ) AS amount,
    round(avg(amount) OVER (
        order by visited_on
        range between interval 6 day preceding
        and current row
    ),2) AS average_amount
FROM Customer_table)

select visited_on, amount, average_amount from result
where visited_on >= (select min(visited_on) + interval 6 day
    FROM Customer_table)
order by visited_on