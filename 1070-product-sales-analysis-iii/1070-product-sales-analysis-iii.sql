# Write your MySQL query statement below
SELECT s.product_id,
       s.year AS first_year,
       s.quantity,
       s.price
FROM Sales AS s
JOIN (
    SELECT product_id,
           MIN(year) AS year
    FROM Sales
    GROUP BY product_id
) AS sales_table
ON s.product_id = sales_table.product_id
AND s.year = sales_table.year;