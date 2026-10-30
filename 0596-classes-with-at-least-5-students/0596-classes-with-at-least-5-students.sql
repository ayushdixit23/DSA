# Write your MySQL query statement below
select class from Courses group by class
having Count(DISTINCT student) >= 5