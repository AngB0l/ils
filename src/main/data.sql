CREATE DATABASE  IF NOT EXISTS `ils`;
USE `ils`;

--
-- Table structure for table `employee`
--


INSERT INTO publishers (name, street, city) VALUES ('ekdotis1','str1','skg');
INSERT INTO publishers (name, street, city) VALUES ('ekdotis2','str2','skg');

INSERT INTO authors (first_name, last_name, email,dob ,about) VALUES ( 'John1','Doe1','person1@gmail.com','2000-01-05','This is the first author');
INSERT INTO authors (first_name, last_name, email,dob ,about) VALUES ( 'John2','Doe2','person2@gmail.com','2020-01-05','This is the second author');

INSERT INTO author_publisher VALUES (1,1);
INSERT INTO author_publisher VALUES (1,2);
INSERT INTO author_publisher VALUES (2,1);

INSERT INTO books (copies, field, pages, ref_code, title, year_of_publication, isbn, author_id) VALUES (5,'cs',100,'e180','a year later',2020,'laorjt125',2); 