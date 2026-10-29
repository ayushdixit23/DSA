# Write your MySQL query statement below
-- select employee_id from Employees where salary < 30000 and manager_id not in (select distinct employee_id from Employees)
-- order by employee_id;

SELECT e.employee_id
FROM Employees e
WHERE e.salary < 30000
  AND e.manager_id IS NOT NULL
  AND NOT EXISTS (
      SELECT 1
      FROM Employees m
      WHERE m.employee_id = e.manager_id
  )
ORDER BY e.employee_id;
