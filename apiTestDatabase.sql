CREATE DATABASE apiTest;

USE apiTest;

CREATE TABLE Employee(
  EID mediumint PRIMARY KEY AUTO_INCREMENT,
  EName varchar(100) DEFAULT NULL,
  EPincode mediumint unsigned NULL
);

ALTER TABLE Employee AUTO_INCREMENT=1001;

CREATE TABLE Project(
  PID mediumint PRIMARY KEY AUTO_INCREMENT,
  PName varchar(30) DEFAULT NULL,
  MID mediumint UNIQUE NOT NULL,
  FOREIGN KEY (MID) REFERENCES Employee(EID)
);

ALTER TABLE Project AUTO_INCREMENT=2001;

CREATE TABLE Works_On(
  EID mediumint NOT NULL,
  PID mediumint NOT NULL,
  FOREIGN KEY (EID) REFERENCES Employee(EID),
  FOREIGN KEY (PID) REFERENCES Project(PID)
);

INSERT INTO Employee VALUES ('1000','Sean','99369'),
('1001','Golden','82936'),
('1002','Vernon','89180'),
('1003','Hans','98023'),
('1004','Alex','7553'),
('1005','Friedrich','78145'),
('1006','Rollin','78009'),
('1007','Branson','58235'),
('1008','Salvatore','52618'),
('1009','Frederick','61958'),
('1010','Russel','58363'),
('1011','Ali','91414'),
('1012','Jan','94251'),
('1013','Jed','51201'),
('1014','Jensen','17254'),
('1015','Lisandro','42302'),
('1016','Keenan','77734'),
('1017','Arden','94005'),
('1018','Tyson','86903'),
('1019','Howard','67396');

INSERT INTO Project VALUES ('2000','Alpha','1011'),
('2001','Beta','1018'),
('2002','Gamma','1007'),
('2003','Theta','1000'),
('2004','Delta','1017'); 

INSERT INTO Works_On VALUES ('1010','2003'),
('1019','2001'),
('1000','2001'),
('1019','2004'),
('1007','2004'),
('1017','2004'),
('1012','2002'),
('1009','2000'),
('1008','2003'),
('1005','2001'),
('1000','2003'),
('1010','2003'),
('1001','2004'),
('1002','2003'),
('1014','2003'),
('1010','2002'),
('1007','2000'),
('1000','2002'),
('1006','2003'),
('1002','2004'),
('1015','2001'),
('1007','2002'),
('1004','2001'),
('1017','2004'),
('1017','2003'),
('1010','2001'),
('1003','2003'),
('1018','2002'),
('1016','2003'),
('1007','2000'),
('1005','2001'),
('1014','2004'),
('1008','2004'),
('1000','2004'),
('1015','2003'),
('1007','2000'),
('1002','2004'),
('1018','2002'),
('1012','2001'),
('1000','2000'); 