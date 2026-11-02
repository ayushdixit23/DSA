# Write your MySQL query statement below
with result as ( select d.name as Department , e.name as Employee,
salary,
DENSE_RANK() over (partition by d.name 
order by salary desc
) as rank_salary
from Employee e join Department d
on e.departmentId = d.id
)

select Department , Employee , salary from result
where rank_salary <= 3