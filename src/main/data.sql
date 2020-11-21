CREATE DATABASE  IF NOT EXISTS `ils`;
USE `ils`;

--
-- Table structure for table `employee`
--


INSERT INTO publishers (name, street, city) VALUES ('Penguin','str1','London');
INSERT INTO publishers (name, street, city) VALUES ('ekdotis2','str2','Skg');
INSERT INTO publishers (name, street, city) VALUES ('Bikini Bottom publishing inc','str3','bikini bottom');

INSERT INTO authors (first_name, last_name, email,dob ,about) VALUES ( 'Eric','Cartman','eric@gmail.com','1997-01-01','an');
INSERT INTO authors (first_name, last_name, email,dob ,about) VALUES ( 'Lisa','Simpson','lisa@gmail.com','1989-01-05','First in her class');
INSERT INTO authors (first_name, last_name, email,dob ,about) VALUES ( 'Spongebob','Squarepants','spongebob@gmail.com','2005-01-05','the best cook in bikini bottom');
INSERT INTO authors (first_name, last_name, email,dob ,about) VALUES ( 'Rick','Sanchez','rick@gmail.com','2015-01-05','crazy inventor');

INSERT INTO author_publisher VALUES (1,1);
INSERT INTO author_publisher VALUES (1,2);
INSERT INTO author_publisher VALUES (2,1);
INSERT INTO author_publisher VALUES (2,2);
INSERT INTO author_publisher VALUES (2,3);
INSERT INTO author_publisher VALUES (3,3);
INSERT INTO author_publisher VALUES (4,1);


INSERT INTO books (copies, field, pages, ref_code, title, year_of_publication, isbn, author_id) VALUES (5,'food',100,'e180','the best chilly',2020,'laorjt12885',1);
INSERT INTO books (copies, field, pages, ref_code, title, year_of_publication, isbn, author_id) VALUES (1000,'physics',100,'e180','on multiple universes',2020,'laorjt125',4);
INSERT INTO journal (copies, field, pages, ref_code, title, year_of_publication, isbn, issue, volume, publisher_id) VALUES (15,'computers',25,'ep180','Nature',2020,'gr125',100,1,1);
INSERT INTO thesis (copies, field, pages, ref_code, title, year_of_publication, department, supervisingProfessor, type, university, author_id) VALUES (5,'child psychology',15,'ekh180','growing un with the Simpsons',2020,'psychology','Homer Simpson','thesis','uom',2);