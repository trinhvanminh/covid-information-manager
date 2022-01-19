select * from public."Nguoi" where "Nguoi_id" in
(SELECT "nlq_id" 
FROM public."Nguoi" 
	full JOIN public."NguoiLienQuan" 
	on "Nguoi"."Nguoi_id" = "NguoiLienQuan"."nguoi_id" 
where "Nguoi"."Nguoi_id" = 1);


SELECT count(*) 
FROM public."Nguoi" 
left JOIN public."NoiDieuTri" 
on "Nguoi"."dieutri_id" = "NoiDieuTri"."DieuTri_id" 
where "NoiDieuTri"."DieuTri_id" = 3

select * from public."Nguoi" where "Nguoi_id" = 2

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