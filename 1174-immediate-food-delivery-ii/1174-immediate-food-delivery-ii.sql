# Write your MySQL query statement below
SELECT Round(AVG(
    case when order_date = customer_pref_delivery_date then 1 
    else 0
    END
) * 100,2) as immediate_percentage
FROM Delivery d
WHERE order_date = (
    SELECT MIN(order_date)
    FROM Delivery
    WHERE customer_id = d.customer_id
);