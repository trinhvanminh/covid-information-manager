DROP TABLE IF EXISTS "User";
CREATE TABLE "User" (
  "uid" SERIAL PRIMARY KEY,
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
COMMIT;
