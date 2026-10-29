# Write your MySQL query statement below
select contest_id,
Round((COUNT(*) / (SELECT COUNT(*) FROM Users)) * 100, 2) AS percentage
from Register
group by contest_id
order by percentage desc , contest_id asc;