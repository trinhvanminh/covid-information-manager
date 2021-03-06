----------------------------
-- Table structure for User
-- ----------------------------

DROP TABLE IF EXISTS "User" CASCADE;
CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar(50) NOT NULL,
  "password" VARCHAR(255) not null,
  "role" varchar(20) DEFAULT 'user'
)	
;
-- ----------------------------
-- Records of User
-- ----------------------------
BEGIN;
INSERT INTO "User" (username, password, role) VALUES ('admin','$2a$12$W/YJXySK8/oN199/pM0MYuS7M0okkSGQTHZIbDHkZr1Fursa5PEBq', 'admin');
INSERT INTO "User" (username, password)  VALUES ('1712601','$2a$12$W/YJXySK8/oN199/pM0MYuS7M0okkSGQTHZIbDHkZr1Fursa5PEBq');
INSERT INTO "User" (username, password, role)  VALUES ('manager','$2a$12$W/YJXySK8/oN199/pM0MYuS7M0okkSGQTHZIbDHkZr1Fursa5PEBq','manager');
INSERT INTO "User" (username, password)  VALUES ('1712602','');
INSERT INTO "User" (username, password)  VALUES ('1712603','');
INSERT INTO "User" (username, password)  VALUES ('1712604','');


COMMIT;


-- ----------------------------
-- Table structure for NoiDieuTri
-- ----------------------------

DROP TABLE IF EXISTS "NoiDieuTri" CASCADE;
CREATE TABLE "NoiDieuTri" (
  "DieuTri_id" SERIAL PRIMARY KEY,
  "ten" varchar(50) NOT NULL,
  "DieuTri_diachi" varchar(255) not null,
  "succhua" int4 NOT NULL,
  "controng" int4
)
;

-- ----------------------------
-- Records of NoiDieuTri
-- ----------------------------
BEGIN;
INSERT INTO "NoiDieuTri" (ten, "DieuTri_diachi", succhua) VALUES ('Bệnh Viện Điều Trị Covid-19 Phạm Ngọc Thạch','120 Hồng Bàng, Phường 12, Quận 5, TP.HCM', 500);
INSERT INTO "NoiDieuTri" (ten, "DieuTri_diachi", succhua) VALUES ('Bệnh Viện Dã Chiến Củ Chi','Bệnh viện Huyện Củ Chi, 1307 Tỉnh lộ 7, An Nhơn Tây, Củ Chi, Thành phố Hồ Chí Minh', 400);
INSERT INTO "NoiDieuTri" (ten, "DieuTri_diachi", succhua) VALUES ('Bệnh Viện Điều Trị Covid Cần Giờ','An Thới Đông, Cần Giờ, Thành phố Hồ Chí Minh, Việt Nam', 600);
INSERT INTO "NoiDieuTri" (ten, "DieuTri_diachi", succhua) VALUES ('Bệnh Viện Điều Trị Covid-19 Trưng Vương','266 Lý Thường Kiệt, Phường 14, Quận 10, TPHCM', 1000);
INSERT INTO "NoiDieuTri" (ten, "DieuTri_diachi", succhua) VALUES ('Bệnh Viện Điều Nhi Đồng 2','14 Lý Tự Trọng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh', 60);
COMMIT;


-- ----------------------------
-- Table structure for Nguoi
-- ----------------------------
DROP TABLE IF EXISTS "Nguoi" CASCADE;
CREATE TABLE "Nguoi" (
    "Nguoi_id" SERIAL PRIMARY KEY,
    "hoten" varchar(50) NOT NULL,
	"cccd" varchar(12) UNIQUE, 
	"namsinh" date,
	"city" varchar(255) not null,
	"ward" varchar(255) not null,
	"district" varchar(255) not null,
	"detail" varchar(255),
	"trangthai" varchar(3),
	"dieutri_id" int4,
	"lichsu" varchar(255)
)
;


-- ----------------------------
-- Records of Nguoi
-- ----------------------------
BEGIN;
INSERT INTO "Nguoi" (hoten, cccd, city, district, ward, detail, namsinh, trangthai, dieutri_id) VALUES ('trịnh văn minh','0123456789', 'Ho Chi Minh City', 'huyện Củ Chi', 'xã Hoà Phú','', '1998/11/26', 'F2', 1);
INSERT INTO "Nguoi" (hoten, cccd, city, district, ward, detail, namsinh, trangthai, dieutri_id) VALUES ('lê quang nam','111111111', 'Ho Chi Minh City','Thu Duc District', 'Linh Trung Ward','', '2000/1/3', 'F3', 2);
INSERT INTO "Nguoi" (hoten, cccd, city, district, ward, detail, namsinh, trangthai, dieutri_id) VALUES ('nguyễn hoàng mẫn','222222222', 'Can Tho City', 'Bình Thủy', 'An Thoi Ward', '366E Cach Mang Thang Tam Street', '1998/11/26','F3',3);
INSERT INTO "Nguoi" (hoten, cccd, city, district, ward, detail, namsinh, trangthai, dieutri_id) VALUES ('nguyễn văn a','33333333', 'Ha Noi city','Ba Dinh District','Thanh Binh Ward','36A Doi Can Street', '1998/11/26','', 3);
COMMIT;


-- ----------------------------
-- Table structure for NguoiLienQuan
-- ----------------------------
DROP TABLE IF EXISTS "NguoiLienQuan" CASCADE;
CREATE TABLE "NguoiLienQuan" (
  nguoi_id int,
   nlq_id int,
   thoigian TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (nguoi_id, nlq_id)
)
;

-- ----------------------------
-- Records of NguoiLienQuan
-- ----------------------------
BEGIN;
INSERT INTO "NguoiLienQuan" (nguoi_id, nlq_id, thoigian) VALUES (1, 2, '2022/1/10');
INSERT INTO "NguoiLienQuan" (nguoi_id, nlq_id) VALUES (1, 3);
COMMIT;




-- ----------------------------
-- Table structure for SP
-- ----------------------------
DROP TABLE IF EXISTS "SP" CASCADE;
CREATE TABLE "SP" (
  "SP_id" SERIAL PRIMARY KEY,
   "ten" varchar(50) NOT NULL,
	"gia" int not null,
	"donvi" varchar(20) default 'sp'
)
;

-- ----------------------------
-- Records of SP
-- ----------------------------
BEGIN;
INSERT INTO "SP" (ten, gia, donvi) VALUES ('bánh mì chay', 8000, 'Cái');
INSERT INTO "SP" (ten, gia, donvi) VALUES ('rau xà lách', 5000, 'Bó');
INSERT INTO "SP" (ten, gia, donvi) VALUES ('thịt lợn', 60000, 'Kg');
INSERT INTO "SP" (ten, gia, donvi) VALUES ('bánh mì thịt', 10000, 'Cái');
COMMIT;



-- ----------------------------
-- Table structure for Goi
-- ----------------------------
DROP TABLE IF EXISTS "Goi" CASCADE;
CREATE TABLE "Goi" (
  "Goi_id" SERIAL PRIMARY KEY,
   "ten" varchar(50) NOT NULL,
	"gioihan_goi" int default 1,
	"thoigian" varchar(6) default 'Tuần'
)
;

-- ----------------------------
-- Records of Goi
-- ----------------------------
BEGIN;
INSERT INTO "Goi" (ten) VALUES ('gói combo ăn chay rau củ');
INSERT INTO "Goi" (ten, gioihan_goi, thoigian) VALUES ('gói ăn thịt', 4,'Tháng');
COMMIT;


-- ----------------------------
-- Table structure for Goi_SP
-- ----------------------------
DROP TABLE IF EXISTS "Goi_SP" CASCADE;
CREATE TABLE "Goi_SP" (
   "goi_id" int,
   "sp_id" int,
   "gioihan_sp" int default 1,
	PRIMARY KEY (goi_id, sp_id)
)
;

-- ----------------------------
-- Records of Goi_SP
-- ----------------------------
BEGIN;
INSERT INTO "Goi_SP" (goi_id, sp_id) VALUES (1, 1), (1, 2);
INSERT INTO "Goi_SP" (goi_id, sp_id, gioihan_sp) VALUES (2, 3, 4), (2, 4, 5);
COMMIT;


-- ----------------------------
-- Table structure for HinhAnh
-- ----------------------------
DROP TABLE IF EXISTS "HinhAnh" CASCADE;
CREATE TABLE "HinhAnh" (
   "HinhAnh_id" serial primary key,
   "sp_id" int,
   "link" varchar(2083)
)
;

-- ----------------------------
-- Records of HinhAnh
-- ----------------------------
BEGIN;
INSERT INTO "HinhAnh" (sp_id, link) 
VALUES 	(1, 'https://i.ytimg.com/vi/u127n7VqHY4/maxresdefault.jpg'), 
		(2, 'https://www.fao.org.vn/wp-content/uploads/2020/07/cach-trong-rau-xa-lach.jpg'), 
		(2, 'https://raucuquagiasi.com/upload/product/rau-xa-lach-5552.jpg'), 
		(2, 'http://hstatic.net/520/1000107520/1/2016/8-18/salad_my_grande.jpg'), 
		(3, 'https://vnn-imgs-f.vgcloud.vn/2020/07/01/16/thit-lon-1.jpg'), 
		(4, 'https://cdn.huongnghiepaau.com/wp-content/uploads/2019/08/banh-mi-kep-thit-nuong-thom-phuc.jpg');
COMMIT;

-- ----------------------------
-- Foreign Keys structure for table NguoiLienQuan
-- ----------------------------
ALTER TABLE "NguoiLienQuan" ADD CONSTRAINT "FK_Nguoi_NguoiId" FOREIGN KEY (nguoi_id) REFERENCES "Nguoi"("Nguoi_id") ON DELETE CASCADE;
ALTER TABLE "NguoiLienQuan" ADD CONSTRAINT "FK_Nguoi_NlqId" FOREIGN KEY (nlq_id) REFERENCES "Nguoi"("Nguoi_id") ON DELETE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table Nguoi
-- ----------------------------
ALTER TABLE "Nguoi" ADD CONSTRAINT "FK_Nguoi_NoiDieuTri" FOREIGN KEY ("dieutri_id") REFERENCES "NoiDieuTri"("DieuTri_id") on delete SET NULL;
-- ----------------------------
-- Foreign Keys structure for table Goi_SP
-- ----------------------------
ALTER TABLE "Goi_SP" ADD CONSTRAINT "FK_Goi_SP_SP" FOREIGN KEY (sp_id) REFERENCES "SP"("SP_id") ON DELETE CASCADE;
ALTER TABLE "Goi_SP" ADD CONSTRAINT "FK_Goi_SP_Goi" FOREIGN KEY (goi_id) REFERENCES "Goi"("Goi_id") ON DELETE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table HinhAnh
-- ----------------------------
ALTER TABLE "HinhAnh" ADD CONSTRAINT "FK_HinhAnh_SP" FOREIGN KEY ("sp_id") REFERENCES "SP"("SP_id") on delete CASCADE;



