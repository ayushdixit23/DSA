# Write your MySQL query statement below
with queue_total as (
    select person_name, 
    weight,
    SUM(Weight) over (
        order by turn
    ) AS total_weight
    from Queue
)

select person_name from queue_total where total_weight <= 1000
order by total_weight desc limit 1