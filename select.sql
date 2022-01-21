select * from public."Nguoi" where "Nguoi_id" in
(SELECT "nlq_id" 
FROM public."Nguoi" 
	full JOIN public."NguoiLienQuan" 
	on "Nguoi"."Nguoi_id" = "NguoiLienQuan"."nguoi_id" 
where "Nguoi"."Nguoi_id" = 1);

-- select so luong nguoi trong cung 1 noi dieu tri
update public."NoiDieuTri"
set "controng" = 
(select 
(select succhua from public."NoiDieuTri" where "NoiDieuTri"."DieuTri_id" = 3)
-(
SELECT Count(*)
FROM public."Nguoi" 
left JOIN public."NoiDieuTri" 
on "Nguoi"."dieutri_id" = "NoiDieuTri"."DieuTri_id" 
where "NoiDieuTri"."DieuTri_id" = 3))
where "NoiDieuTri"."DieuTri_id" = 3


-- 

select * from public."Nguoi" where "Nguoi_id" = 2

delete from public."NoiDieuTri" where "DieuTri_id" = 3
select * from public."NoiDieuTri" where "DieuTri_id" = 1

-- sức chứa
select "succhua" 
from public."NoiDieuTri" 
where "DieuTri_id" = 1 and "succhua" > (	SELECT count(*) 
					FROM public."Nguoi" left JOIN public."NoiDieuTri" 
							on "Nguoi"."dieutri_id" = "NoiDieuTri"."DieuTri_id" 
					where "NoiDieuTri"."DieuTri_id" = 1);

	
UPDATE public."Nguoi"
SET "trangthai" = 'F2'
WHERE "Nguoi_id" = 2 or "Nguoi_id" = 3;




delete from public."Nguoi" where "Nguoi_id" = 4

select * from public."HinhAnh"
delete from public."HinhAnh" where "sp_id" = 2;

select * from public."SP"
select * from public."User"

UPDATE public."SP"
SET "ten" = 'ten moi', "gia" = 0, "donvi" = 'Kg'
WHERE "SP_id" = 2;


insert into public."SP" (ten, gia, donvi) values ('abc', 100, 'bos') returning "SP"."SP_id"



select * from public."Goi"	
select * from public."Goi_SP"
select * from public."SP"


select * from public."Goi_SP" join public."SP" on "Goi_SP"."sp_id" = "SP"."SP_id" where "goi_id" = 1

select * 
from (select * from public."Goi_SP" join public."SP" on "Goi_SP"."sp_id" = "SP"."SP_id" where "goi_id" = 1) AS "F" 
where "F"."ten" like '%thịt%'

select * 
from (select * from public."Goi_SP" join public."SP" on "Goi_SP"."sp_id" = "SP"."SP_id" where "goi_id" = 1) AS "F" 
order by "F"."ten" desc