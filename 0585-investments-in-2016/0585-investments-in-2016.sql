# Write your MySQL query statement below
with result_insurance as (
    select i1.tiv_2016 from Insurance i1
    where exists (
    select 1 from Insurance i2
    where i1.tiv_2015 = i2.tiv_2015 and i1.pid != i2.pid
    )
    and not exists (
    select 1 from Insurance i3
    where i1.lat = i3.lat
      AND i1.lon = i3.lon
      AND i1.pid != i3.pid
    )
)

select round(sum(tiv_2016),2) as tiv_2016 from result_insurance