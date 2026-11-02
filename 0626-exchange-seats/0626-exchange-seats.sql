# Write your MySQL query statement below
select
    id,
    case
        when id % 2 != 0
            then COALESCE(LEAD(student) over (order by id), student)
        else
            LAG(student) over (order by id)
    end AS student
from Seat
order by id;