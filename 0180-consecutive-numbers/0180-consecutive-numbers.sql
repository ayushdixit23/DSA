# Write your MySQL query statement below
with Numbers as (
    select num, 
    Lag(num) over () as lg,
    lead(num) over () as ld
    from Logs
)

select Distinct(num) as ConsecutiveNums from Numbers
where num = lg and num = ld