# Write your MySQL query statement below
with group_table as (select Max(salary) as highest_salary, departmentId from Employee
group by departmentId)

select d.name as Department ,e.name as Employee ,e.salary as Salary from Employee e
join Department d
on e.departmentId = d.id
join group_table on 
e.departmentId = group_table.departmentId
and group_table.highest_salary = e.salary



