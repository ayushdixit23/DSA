# Write your MySQL query statement below
with result as (
select distinct requester_id as id from RequestAccepted
union 
select distinct accepter_id as id from RequestAccepted
)

select
    id,
    (select Count(*) from RequestAccepted where requester_id = id or accepter_id = id) as num
from result
order by num desc
limit 1;