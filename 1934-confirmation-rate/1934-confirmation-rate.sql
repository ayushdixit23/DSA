# Write your MySQL query statement below
select Signups.user_id,COALESCE(confirmation_rate, 0.00) AS confirmation_rate
 from Signups left join (SELECT
    user_id,
    ROUND(
        SUM(
            CASE
                WHEN action = 'confirmed' THEN 1
                ELSE 0
            END
        ) / COUNT(*),
        2
    ) AS confirmation_rate
FROM Confirmations
GROUP BY user_id
) as confirmation_table on Signups.user_id = confirmation_table.user_id


