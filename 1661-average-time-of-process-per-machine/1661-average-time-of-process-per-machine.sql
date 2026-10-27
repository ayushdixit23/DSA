# Write your MySQL query statement below
Select machine_id , Round(AVG(processing_time_min),3) as processing_time from (select machine_id, process_id, Round(Max(timestamp) - Min(timestamp), 3) as  processing_time_min from Activity 
Group by machine_id, process_id) as machine_table group by machine_id

