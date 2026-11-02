# Write your MySQL query statement below
(
select name as results from MovieRating join Users
on MovieRating.user_id = Users.user_id
group by Users.user_id , name
order by Count(*) desc, name asc
limit 1
)
union all 
(select title as results from MovieRating join Movies
on MovieRating.movie_id = Movies.movie_id
where created_at between '2020-02-01' AND '2020-02-29'
group by Movies.movie_id , title
order by AVG(rating) desc, title asc
limit 1
)