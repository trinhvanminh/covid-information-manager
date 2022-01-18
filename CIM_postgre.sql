-- ----------------------------
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
COMMIT;


-- ----------------------------
-- Table structure for NoiDieuTri
-- ----------------------------

DROP TABLE IF EXISTS "NoiDieuTri" CASCADE;
CREATE TABLE "NoiDieuTri" (
  "DieuTri_id" SERIAL PRIMARY KEY,
  "ten" varchar(50) NOT NULL,
  "diachi" varchar(255) not null,
  "succhua" int4 NOT NULL
)
;

-- ----------------------------
-- Records of NoiDieuTri
-- ----------------------------
BEGIN;
INSERT INTO "NoiDieuTri" (ten, diachi, succhua) VALUES ('NoiDieuTri LongAn','1, đường abc, xã xyz, tỉnh Long An', 500);
INSERT INTO "NoiDieuTri" (ten, diachi, succhua) VALUES ('Bệnh Viện Dã Chiến Củ Chi','huyện Củ Chi', 400);
INSERT INTO "NoiDieuTri" (ten, diachi, succhua) VALUES ('Bệnh Viện Điều Trị Covid Cần Giờ','Cần Giờ', 600);
COMMIT;


-- ----------------------------
-- Table structure for Nguoi
-- ----------------------------
DROP TABLE IF EXISTS "Nguoi" CASCADE;
CREATE TABLE "Nguoi" (
    "Nguoi_id" SERIAL PRIMARY KEY,
    "hoten" varchar(50) NOT NULL,
	"cccd" varchar(12) UNIQUE, 
	"diachi" varchar(255) not null,
	"trangthai" varchar(3),
	"dieutri_id" int4,
	"lichsu" varchar(255)
)
;


-- ----------------------------
-- Records of Nguoi
-- ----------------------------
BEGIN;
INSERT INTO "Nguoi" (hoten, cccd, diachi) VALUES ('trịnh văn minh','0123456789', 'đây là địa chỉ của trịnh văn minh');
INSERT INTO "Nguoi" (hoten, diachi, dieutri_id) VALUES ('lê quang nam', 'đây là địa chỉ của lê quang nam', 2);
INSERT INTO "Nguoi" (hoten, diachi, dieutri_id) VALUES ('nguyen van a', 'đây là địa chỉ của nguyen van a', 3);
COMMIT;


-- ----------------------------
-- Table structure for NguoiLienQuan
-- ----------------------------
DROP TABLE IF EXISTS "NguoiLienQuan" CASCADE;
CREATE TABLE "NguoiLienQuan" (
  nguoi_id int,
   nlq_id int,
   thoigian date,
	PRIMARY KEY (nguoi_id, nlq_id)
)
;

-- ----------------------------
-- Records of NguoiLienQuan
-- ----------------------------
BEGIN;
INSERT INTO "NguoiLienQuan" (nguoi_id, nlq_id, thoigian) 
VALUES (1, 2, '2022/1/18'),(1, 3, '2022/1/10');
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
INSERT INTO "SP" (ten, gia, donvi) VALUES ('bánh mì chay', 8000, 'cái');
INSERT INTO "SP" (ten, gia, donvi) VALUES ('rau xà lách', 5000, 'bó');
INSERT INTO "SP" (ten, gia, donvi) VALUES ('thịt lợn', 60000, 'kg');
INSERT INTO "SP" (ten, gia, donvi) VALUES ('bánh mì thịt', 10000, 'cái');
COMMIT;



-- ----------------------------
-- Table structure for Goi
-- ----------------------------
DROP TABLE IF EXISTS "Goi" CASCADE;
CREATE TABLE "Goi" (
  "Goi_id" SERIAL PRIMARY KEY,
   "ten" varchar(50) NOT NULL,
	"gioihan_goi" int default 1,
	"thoigian" varchar(6) default 'tuan'
)
;

-- ----------------------------
-- Records of Goi
-- ----------------------------
BEGIN;
INSERT INTO "Goi" (ten) VALUES ('gói combo ăn chay rau củ');
INSERT INTO "Goi" (ten, gioihan_goi, thoigian) VALUES ('gói ăn thịt', 4,'thang');
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



