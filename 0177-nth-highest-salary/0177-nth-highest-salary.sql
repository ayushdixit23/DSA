CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
        with ranked_salary as (
            select salary,
            dense_rank() over (
            order by salary desc
            ) AS rnk
            from Employee
        )

        select distinct(salary) from ranked_salary where rnk = N
  );
END