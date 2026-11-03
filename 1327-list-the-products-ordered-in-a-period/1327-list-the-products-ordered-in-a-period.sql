# Write your MySQL query statement below
select product_name, Sum(unit) as unit from Orders o
join Products p on o.product_id = p.product_id and o.order_date between 
'2020-02-01' and '2020-02-29'
group by p.product_id, p.product_name
having unit >= 100