-- select * from public."User";
-- select * from public."NoiDieuTri";
-- select * from public."Nguoi";
-- select * from public."NguoiLienQuan";
-- select * from public."HinhAnh";
-- select * from public."Goi_SP";
-- select * from public."SP";
-- select * from public."Goi";

-- Copy (Select * From public."User") To 'D:\OLD DATA\User.csv' With  DELIMITER ',' HEADER ENCODING 'utf-8';
-- Copy (select * from public."NoiDieuTri") To 'D:\OLD DATA\NoiDieuTri.csv' With CSV DELIMITER ',' HEADER ENCODING 'utf-8';
-- Copy (select * from public."Nguoi") To 'D:\OLD DATA\Nguoi.csv' With CSV DELIMITER ',' HEADER ENCODING 'utf-8';
-- Copy (select * from public."NguoiLienQuan") To 'D:\OLD DATA\NguoiLienQuan.csv' With CSV DELIMITER ',' HEADER ENCODING 'utf-8';
-- Copy (select * from public."HinhAnh") To 'D:\OLD DATA\HinhAnh.csv' With CSV DELIMITER ',' HEADER ENCODING 'utf-8';
-- Copy (select * from public."Goi_SP") To 'D:\OLD DATA\Goi_SP.csv' With CSV DELIMITER ',' HEADER ENCODING 'utf-8';
-- Copy (select * from public."SP") To 'D:\OLD DATA\SP.csv' With CSV DELIMITER ',' HEADER ENCODING 'utf-8';
-- Copy (select * from public."Goi") To 'D:\OLD DATA\Goi.csv' With CSV DELIMITER ',' HEADER ENCODING 'utf-8';



-- select * from information_schema.tables where table_schema = 'public'


-- select * from public."HinhAnh" where "sp_id" = 2

-- DELETE FROM public."NguoiLienQuan" WHERE "nguoi_id" = 1 or "nlq_id" = 1;
-- DELETE FROM public."Nguoi" WHERE "id" = 1;
-- DELETE FROM public."NoiDieuTri" WHERE "id" = 2;
